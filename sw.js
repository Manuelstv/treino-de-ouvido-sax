/* Guarda o app no aparelho para ele abrir e tocar sem internet.
   A página e o teoria.json vêm primeiro da rede (pra receber as novidades) e
   caem na cópia guardada quando não há conexão. Sons, ícones e fontes vêm da
   cópia guardada: cada som é guardado na primeira vez que toca, então um
   instrumento já usado com internet funciona offline. Login e ranking
   (Firebase) sempre vão direto pra rede. */
const CACHE = "ouvido-v1";
const SHELL = ["./", "index.html", "teoria.json", "manifest.webmanifest",
  "icones/icone-192.png", "icones/icone-512.png", "icones/apple-touch-icon.png"];
const FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

/* Busca na rede e guarda a resposta; sem rede, devolve a cópia guardada. */
async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request, { ignoreSearch: true })) || Response.error();
  }
}

/* Usa a cópia guardada; se ainda não houver, busca na rede e guarda. */
async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok || response.type === "opaque") cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  if (sameOrigin && (req.mode === "navigate" || url.pathname.endsWith("teoria.json"))) {
    e.respondWith(networkFirst(req));
  } else if (sameOrigin || FONT_HOSTS.includes(url.hostname)) {
    e.respondWith(cacheFirst(req));
  }
});

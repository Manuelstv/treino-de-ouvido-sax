# Treino de ouvido no sax

A página toca uma nota e você responde tocando a mesma no instrumento. O microfone escuta e diz se você acertou.

**Usar:** https://manuelstv.github.io/treino-de-ouvido-sax/ (Chrome, Edge ou Safari; permita o microfone).

- Escolha o instrumento: sax alto, tenor, soprano, barítono ou instrumento em Dó. As notas aparecem como estão escritas na partitura do instrumento.
- A nota conta como certa quando fica a até 40 cents do alvo por 350 ms. Por padrão, qualquer oitava vale.
- Use fone de ouvido ou volume baixo, para o microfone não ouvir a caixa de som.

Um arquivo só (`index.html`), sem dependências. Para reconhecer a nota, usa o método de McLeod (NSDF), que resiste a confundir a nota com a oitava acima.

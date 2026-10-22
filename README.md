# Treino de ouvido no sax

A página toca uma nota e você responde tocando a mesma no instrumento. O microfone escuta e diz se você acertou.

**Usar:** https://manuelstv.github.io/treino-de-ouvido-sax/ (Chrome, Edge ou Safari; permita o microfone).

- **Nota:** a página toca uma nota e você toca a mesma.
- **Intervalo:** a página toca duas notas e mostra a primeira na pauta. Você toca a segunda. Dá pra escolher quais intervalos entram e se eles sobem, descem ou os dois.
- **Melodia:** a página toca uma frase de 4 a 6 notas num tom maior e você repete na ordem. A primeira nota aparece na pauta; errar uma nota não volta ao começo.
- **Som contínuo:** a nota de referência fica soando enquanto você toca (no Intervalo, a primeira nota; na Melodia, a tônica). Use fone de ouvido nesse modo.
- Escolha o instrumento: sax alto, tenor, soprano, barítono ou instrumento em Dó. As notas aparecem como estão escritas na partitura do instrumento.
- A nota conta como certa quando fica a até 40 cents do alvo por 350 ms. Por padrão, qualquer oitava vale.
- Use fone de ouvido ou volume baixo, para o microfone não ouvir a caixa de som.

Um arquivo só (`index.html`), sem dependências. Para reconhecer a nota, usa o método de McLeod (NSDF), que resiste a confundir a nota com a oitava acima.

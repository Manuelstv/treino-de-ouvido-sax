# Treino de ouvido no sax

A página toca uma nota e você responde tocando a mesma no instrumento. O microfone escuta e diz se você acertou.

**Usar:** https://manuelstv.github.io/treino-de-ouvido-sax/ (Chrome, Edge ou Safari; permita o microfone).

- **Nota:** a página toca uma nota e você toca a mesma.
- **Intervalo:** a página toca duas notas e mostra a primeira na pauta. Você toca a segunda. Dá pra escolher quais intervalos entram e se eles sobem, descem ou os dois.
- **Melodia:** a página toca uma frase de 4 a 6 notas num tom maior e você repete na ordem. A primeira nota aparece na pauta; errar uma nota volta a melodia pro começo.
- **Teoria:** 3 módulos (Escalas e modos, Harmonia do jazz, Recursos avançados), com 10 textos curtos cada. Cada texto tem 3 perguntas de múltipla escolha, e cada módulo termina com um questionário de 10 perguntas. O conteúdo fica em `teoria.json`.
- **Teclado na tela:** cada tecla toca a nota e vale como resposta nos modos Nota, Intervalo e Melodia. Dá pra jogar sem instrumento e sem microfone: se o microfone for recusado, o jogo segue só pelo teclado.
- **Som contínuo:** a nota de referência fica soando enquanto você toca (no Intervalo, a primeira nota; na Melodia, a tônica). Use fone de ouvido nesse modo.
- Escolha o instrumento: sax alto, tenor, soprano, barítono, trompete, trombone ou instrumento em Dó. A página toca com o som do instrumento escolhido, e as notas aparecem como estão escritas na partitura dele. Cada instrumento tem as próprias faixas de notas. O trombone ainda aparece em clave de Sol, uma oitava acima do som real.
- A nota conta como certa quando fica a até 40 cents do alvo por 350 ms. Por padrão, qualquer oitava vale.
- Use fone de ouvido ou volume baixo, para o microfone não ouvir a caixa de som.

Um arquivo só (`index.html`), sem dependências. Para reconhecer a nota, usa o método de McLeod (NSDF), que resiste a confundir a nota com a oitava acima.

## Créditos do som

Cada instrumento toca a própria gravação. Ficam em `sons/<instrumento>/`, um arquivo por nota.

- **Sax alto:** gravações do **Weresax**, da [Karoryfer Samples](https://karoryfer.com/), na versão editada (cortada e com volume igualado) do [tonejs-instruments](https://github.com/nbrosowsky/tonejs-instruments), de Nicholaus Brosowsky. Licença: [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
- **Sax soprano, tenor e barítono:** [MTG Solo Saxophones](https://github.com/sfzinstruments/MTG.SoloSax), montado por kinwie a partir das gravações do [MTG (Universitat Pompeu Fabra)](https://freesound.org/people/MTG/) no Freesound. Aqui foram afinadas, encurtadas e com volume igualado. Licença: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- **Trompete e trombone:** [VSCO 2 Community Edition](https://versilian-studios.com/vsco-community/), da Versilian Studios, na versão do [tonejs-instruments](https://github.com/nbrosowsky/tonejs-instruments). Aqui foram encurtadas e com volume igualado. Licença: [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
- O instrumento em Dó usa o som do sax alto.

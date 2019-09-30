# Truquin-de-Redes
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Truquin de Redes</title>
    <link rel="stylesheet" href="truquin.css">
  </head>
  <body>
    <div class="cadastro">
      <h1>Insira os seu dados para jogar</h1>
      <p>Nick:</p>
      <p>Senha:</p>
      <p>Repita a Senha:</p>
      <button id="cadastro_jogo">Começar</button>
    </div>
    <div class="inicio">
      <img src="imgs/derik_inicial.jpg">
      <img src="imgs/fala_derik.png">
      <button id="entrar_jogo">Bo entrar?</button>
    </div>
    <div class="regras_jogo">
      <button id="comecar_jogo">X</button>
      <h2>Regras:</h2>
      <ol>
        <li>Quem fizer 12 pontos primeiro ganha;</li>
        <li>Uma rodada normal vale 2 pontos;</li>
        <li>Quando estiver no truco, vale 4 pontos;</li>
        <li>6 vale 8, 9 vale 10, 12 vale 12;</li>
      </ol>
      <p>E as cartas na ordem da maior para a menor são:</p>
      <ol>
        <li>Maffort</li>
        <li>Baranhão de paus</li>
        <li>Bagal de copas</li>
        <li>Grosso de espadas</li>
        <li>Cafú de ouros</li>
        <li>3</li>
        <li>2</li>
        <li>Ás</li>
        <li>Rei</li>
        <li>Valete</li>
        <li>Dama</li>
        <li>7</li>
        <li>6</li>
        <li>5</li>
        <li>4</li>
        <li>Salada</li>
      </ol>
    </div>
    <div classs="jogo">
      <button id="duvida">?</button>
    </div>
    <script src="jogo.js">
    </script>
  </body>
</html>

let botaoCadastroEl = document.querySelector('#cadastro_jogo');
let divCadastro = document.querySelector('.cadastro');
let botaoEntrarEl = document.querySelector('#entrar_jogo');
let divInicio = document.querySelector('.inicio');
let botaoComecarJogarEl = document.querySelector('#comecar_jogo');
let divRegrasJogo = document.querySelector('.regras_jogo');
let botaoDuvida = document.querySelector("#duvida");

botaoCadastroEl.addEventListener('click', function() {
  divCadastro.innerHTML = "";
  divInicio.style.display = "block";
  divInicio.style.visibility = "visible";
});

botaoEntrarEl.addEventListener('click', function() {
  divInicio.innerHTML = "";
  divRegrasJogo.style.display = "block";
  divRegrasJogo.style.visibility = "visible";
});

botaoDuvida.addEventListener('click', function() {
  divRegrasJogo.style.display = "block";
  botaoDuvida.style.visibility = "hidden";
});

botaoComecarJogarEl.addEventListener('click', function() {
  divRegrasJogo.style.display = "none";
  botaoDuvida.style.display = "block";
  botaoDuvida.style.visibility = "visible";
});

let cartas = ['as_paus.png', 'as_copas.png', 'as_espadas.png', 'as_ouros.png',
              '2_paus.png', '2_copas.png', '2_espadas.png', '2_ouros.png',
              '3_paus.png', '3_copas.png', '3_espadas.png', '3_ouros.png',
              '4_paus.png', '4_copas.png', '4_espadas.png', '4_ouros.png',
              '5_paus.png', '5_copas.png', '5_espadas.png', '5_ouros.png',
              '6_paus.png', '6_copas.png', '6_espadas.png', '6_ouros.png',
              '7_paus.png', '7_copas.png', '7_espadas.png', '7_ouros.png',
              'dama_paus.png', 'dama_copas.png', 'dama_espadas.png', 'dama_ouros.png',
              'valete_paus.png', 'valete_copas.png', 'valete_espadas.png', 'valete_ouros.png',
              'rei_paus.png', 'rei_copas.png', 'rei_espadas.png', 'rei_ouros.png',
              'maffort.jpg', 'baranhao_paus.jpg', 'bagal_copas.jpg', 'grosso_espadas.jpg',
              'cafu_ouros.jpg', 'salada.jpg'];
let baralho;
let listaNmrAleatorios = ['46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46', '46', '46',
                          '46', '46'];

let nmrAleatorio;

for(var i = 0; i < 46; i++){
  nmrAleatorio = Math.floor(Math.random()*46);
  if(i > 0){
    for(var j = 0; j < i; j++)
    {
      if(listaNmrAleatorios[j] == cartas[nmrAleatorio])
      {
        nmrAleatorio++;
        j = -1;
      }
      if(nmrAleatorio == 46)
        nmrAleatorio = 0;
    }
  }
  listaNmrAleatorios[i] = cartas[nmrAleatorio];
}

for(var i = 3; i < 12; i++)
{

}
let jogador1 = ['0', '0', '0'];
let jogador2 = ['0', '0', '0'];
let jogador3 = ['0', '0', '0'];
let jogador4 = ['0', '0', '0'];

for(var i = 0; i < 3; i++)
{
    jogador1[i] = listaNmrAleatorios[i];
    jogador2[i] = listaNmrAleatorios[i + 3];
    jogador3[i] = listaNmrAleatorios[i + 6];
    jogador4[i] = listaNmrAleatorios[i + 9];

}

let divJogo = document.querySelector('.jogo');

//Variáveis da Bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//Velocidade da Bolinha

let velocidadeXBolinha = 6
let velocidadeYBolinha = 6


//Variáveis da Raquete

let xRaquete = 15
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//Variáveis Raquete do Oponente
let xRaqueteOponente = 575;
let yRaqueteOponente = 150;

let velocidadeYOponente ;

let chanceErro = 0;

//Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;

//Sons do jogo
//let ponto;
//let raquetada;

//function preload(){
//  raquetada = loadSound("");
//  ponto = loadSound("");
//}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha(fill(color(255)));
  movimentacaoBolinha();
  verificaToqueBorda();
  mostraRaquete(xRaquete, yRaquete, fill(color(255, 0, 0)));
  movimentacaoRaquete();
  verificaToqueRaquete();  
  mostraRaquete(xRaqueteOponente, yRaqueteOponente, fill(color(0, 0, 255)));
//movimentacaoRaqueteOponenteComputador();
  verificaToqueRaqueteOponente();
  incluiPlacar();
  marcarPonto();
  movimentacaoRaqueteOponenteMultiplayer();
  evitarBolaPresa();
  zerarPlacar();
}

function mostraBolinha(){
    
  circle(xBolinha, yBolinha, diametro);
}

function movimentacaoBolinha (){
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}

function verificaToqueBorda(){
  
  if (xBolinha + raio > width ||
      xBolinha -raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height ||
      yBolinha -raio < 0){
     velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
   rect(x, y, comprimentoRaquete, alturaRaquete);
}


function movimentacaoRaquete(){
  
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}

function verificaToqueRaquete(){
  
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1;
  }
}

function movimentacaoRaqueteOponenteComputador(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
  calculeChanceErro();
}

function calculeChanceErro(){
  
  if (pontosOponente >= meusPontos){
    chanceErro += 1;
  }
  
  if (chanceErro >= 39){
    chanceErro = 40;
  }
  
  else {
    chanceErro -= 1;
    
    if (chanceErro <= 35){
      chanceErro = 35;
    }
  }
} 

function movimentacaoRaqueteOponenteMultiplayer(){
  
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

function verificaToqueRaqueteOponente(){
  
  if (xBolinha + raio > xRaqueteOponente + comprimentoRaquete && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente ){
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(50);
  fill(255)
  fill(color(255, 0, 0))
  text(meusPontos, 200, 60);
  fill(color( 0, 0, 255))
  text(pontosOponente,400, 60);
}

function marcarPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}

function zerarPlacar(){
  if (meusPontos > 9 || pontosOponente > 9){
    meusPontos = 0;
    pontosOponente = 0;
  }
}

function evitarBolaPresa(){
  if (xBolinha - raio < 0 || xBolinha + raio > 600){
    xBolinha = 300;
  }
}


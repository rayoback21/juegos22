'use strict';

function Jugador(nickname, vidas, carta) {
  this.nickname = nickname;
  this.vidas = vidas;
  this.carta = carta;
  this.disminuirVida = function () {
    this.vidas--;
  }
}

let jugadoruno = new Jugador("juan", 3, 7);
jugadoruno.disminuirVida();

// Mostrar información con alert
alert(`Nombre: ${jugadoruno.nickname}, Vidas: ${jugadoruno.vidas}`);

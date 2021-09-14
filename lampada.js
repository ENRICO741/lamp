"use strict"
const lampada = document.getElementById("lampada")
let idInterval

function lampadaInteira() {
    return lampada.src.includes("ligada")
}

function LampadaDesligada() {
    return lampada.src.includes("desligada")
}

function ligarLampada() {
    if (lampadaInteira()) {
        lampada.src = "img/ligada.jpg"
    }
}

function desligarLampada() {
    if (lampadaInteira()) {
        lampada.src = "img/desligada.jpg"
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
}

function trocarImagem() {
    if(LampadaDesligada()) {
        ligarLampada()
    } else {
        desligarLampada()
    }
}

function pararPiscar() {
    clearInterval(idInterval)
}

function piscar() {
    const piscar = document.getElementById("piscar")
    if(piscar.textContent == "Piscar") {
        idInterval = setInterval(trocarImagem, 1000)
        piscar.textContent = "Parar"
    } else {
        pararPiscar()
        piscar.textContent = "Piscar"
    }
}

//eventos
document.getElementById("ligar")
    .addEventListener("click", ligarLampada)

document.getElementById("desligar")
    .addEventListener("click", desligarLampada)

document.getElementById("piscar")
    .addEventListener("click", piscar)

lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", desligarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
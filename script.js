let ncartas = 0;
const fundos = [ "bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"]
const fundosTotal = [];
const container = document.querySelector(".cartas")
let click = 1;
let seguraCarta1
let seguraCarta2
let contaAcertos = 0
let jogadas = 0;

while(ncartas%2 != 0 || ncartas > 14 || ncartas < 4){
    ncartas = Number(prompt("quantas cartas você quer?"));
}

for(let i = 0; i<ncartas/2; i++){
    fundosTotal.push(fundos[i]);
    fundosTotal.push(fundos[i]);
}

function comparador() { 
    return Math.random() - 0.5; 
}
fundosTotal.sort(comparador);
// cria cartas --------------------------------------
for(let i = 0; i < ncartas ; i++){

    const ct = `
    <div id="${fundosTotal[i]}" class="carta" onclick="marcaCarta(this)">
                <div class="front-face face">
                    <img src="back.png" >
                </div>
                <div class="back-face face">
                    <img src="${fundosTotal[i]}parrot.gif">
                </div>
            </div>
    `
    container.innerHTML += ct;
}
// cria cartas --------------------------------------
function marcaCarta(variavel){
    if(click === 1){
        viraCarta(variavel);
        variavel.setAttribute('onclick','')
        click++;
        jogadas++;
    }
    else if(click === 2){
        variavel.setAttribute('onclick','')
        seguraCarta2 = seguraCarta1;
        viraCarta(variavel);
        click++;
        verificaDupla();
        jogadas++;
    }
}
function verificaDupla(){
    if (seguraCarta1.id != seguraCarta2.id){
        seguraCarta1.setAttribute('onclick','marcaCarta(this)')
        seguraCarta2.setAttribute('onclick','marcaCarta(this)')
        setTimeout(viraCarta, 1000, seguraCarta1)
        setTimeout(viraCarta, 1000, seguraCarta2) 
        setTimeout(voltaClick, 1000);
    }
    else{
        contaAcertos++;
        setTimeout(testaVitoria, 50);
        voltaClick();
        
    }
    
}
function voltaClick(){
    click = 1;
}

function testaVitoria(){
    if(contaAcertos == ncartas/2){
        alert(`acabô mané tu terminou em ${jogadas} jogadas`);
    }
}
function viraCarta(variavel){
    variavel.querySelector(`.front-face`).classList.toggle("front-flip");
    variavel.querySelector(`.back-face`).classList.toggle("back-flip");
    seguraCarta1 = variavel;
}

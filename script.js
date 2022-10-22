let ncartas = 0;
const fundos = [ "bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"]
const fundosTotal = [];
const container = document.querySelector(".cartas")

while(ncartas%2 != 0 || ncartas > 14 || ncartas < 4){
    ncartas = Number(prompt("quantas cartas você quer?"));
}

for(let i = 0; i<ncartas/2; i++){
    fundosTotal.push(fundos[i]);
    fundosTotal.push(fundos[i]);
}

for(let i = 0; i < ncartas ; i++){
    const ct = `
    <div class="carta">
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

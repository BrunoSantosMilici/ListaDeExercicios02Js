function calc(){
let eleitores = parseInt(document.getElementById("eleitores").value);
let brancos = parseInt(document.getElementById("brancos").value);
let nulos = parseInt(document.getElementById("nulos").value);
let validos = parseInt(document.getElementById("validos").value);

const brancosPorcento = (brancos*100) / eleitores
const nulosPorcento = (nulos*100) / eleitores
const validosPorcento = (validos*100) / eleitores

document.write(brancosPorcento + "% dos votos foram brancos" + '</br>');
document.write(nulosPorcento + "% dos votos foram nulos" + '</br>');
document.write(validosPorcento + "% dos votos foram validos" + '</br>');
}
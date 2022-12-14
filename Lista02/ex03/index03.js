function calc(){
let SalarioAtual = parseInt(document.getElementById("SalarioAtual").value);
let reajuste = parseInt(document.getElementById("reajuste").value);

const NovoSalario = SalarioAtual + (reajuste / 100 * SalarioAtual);

document.write("O novo salário é: " + NovoSalario + "R$");
}
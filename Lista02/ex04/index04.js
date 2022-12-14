function calc(){

let CustoFabrica = parseInt(document.getElementById("CustoFabrica").value);
const CustoDistribuidor = (CustoFabrica * 28) / 100
const CustoImposto = (CustoFabrica * 45) / 100

const CustoFinal = CustoFabrica + CustoDistribuidor + CustoImposto;

document.write("O custo final do carro é de : " + CustoFinal + "R$");
}
function calc(){
    let ValorA = parseFloat(document.getElementById("ValorA").value);
    let ValorB = parseFloat(document.getElementById("ValorB").value);
    let ValorC = ValorA

    ValorA = ValorB
    ValorB = ValorC

    document.write("O valor A é de: " + ValorA + "</br>");
    document.write("O valor B é de: " + ValorB);
}
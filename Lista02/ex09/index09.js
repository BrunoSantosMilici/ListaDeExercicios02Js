function calc(){
    let ValorInicial = parseFloat(document.getElementById("ValorInicial").value);
    let Tempo = parseInt(document.getElementById("Tempo").value);
    let Taxa = parseFloat(document.getElementById("Taxa").value);

    const ValorFinal = ValorInicial + (ValorInicial * Taxa/100) * Tempo;

    document.write("O valor final, após as taxa de atrasos, é igual a: " + ValorFinal + " R$");
}
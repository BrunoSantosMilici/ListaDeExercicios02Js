function calc(){

    let horas = parseFloat(document.getElementById("horas").value);
    let velocidade = parseFloat(document.getElementById("velocidade").value);

    const distancia = horas * velocidade
    const LitrosUsados = Math.round(distancia / 12)

    document.write("A quantidade de litros usados é de: " + LitrosUsados +"L")
}
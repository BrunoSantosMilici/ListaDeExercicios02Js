function calc(){

    let Altura = parseFloat(document.getElementById("Altura").value);
    let Raio = parseFloat(document.getElementById("Raio").value);

    const Volume = 3.14 * (Math.pow(Raio,2)) * Altura;

    document.write("O volume da lata de óleo é igual a: " + Volume);


}
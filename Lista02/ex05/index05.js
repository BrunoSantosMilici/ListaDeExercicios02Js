function conv(){
    let Celsius = parseFloat(document.getElementById("Celsius").value);

    const Fahrenheit = (9 * Celsius + 160) / 5

    document.write("A temperatura em Fahrenheit é :" + Fahrenheit + "º")
}
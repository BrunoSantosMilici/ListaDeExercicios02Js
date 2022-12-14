function conv(){
    let Fahrenheit = parseFloat(document.getElementById("Fahrenheit").value);

    const Celsius = (Fahrenheit - 32) * (5 / 9);

    document.write("A temperatura em Celsius é " + Celsius + "º");
}
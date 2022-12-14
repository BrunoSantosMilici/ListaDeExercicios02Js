function calc(){
    const dia = new Date();
    const mes = new Date();
    const ano = new Date();

    let MesNas = parseInt(document.getElementById("MesNas").value);
    let DiaNas = parseInt(document.getElementById("DiaNas").value);
    let AnoNas = parseInt(document.getElementById("AnoNas").value);

    let DifMes = MesNas - mes.getMonth();
    let DifDia = DiaNas - dia.getDate();
    let DifAno = ano.getFullYear() - AnoNas;

    if (DifMes <= 0){
        DifMes = DifMes * (-1);
    }

    if (DifDia <= 0){
        DifDia = DifDia * (-1);
    }
 
    const IdadeEmDias = (DifAno * 365) + (DifMes * 30) + DifDia;

    document.write(IdadeEmDias);

    //document.getElementById("resultado").innerHTML = IdadeEmDias;

}
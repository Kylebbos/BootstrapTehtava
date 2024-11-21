function laheta() {
    let nimi = document.getElementById("nimi").value;
    let sposti = document.getElementById("sposti").value;


    document.getElementById("vastaus").innerHTML = "Kiitos viestistäsi, " + nimi + "<br>Sähköpostisi: " + sposti;
}

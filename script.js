function verCaratula() {
    document.getElementById("caratula").style.display = "block";
    document.getElementById("stand1").style.display = "none";
    document.getElementById("stand2").style.display = "none";
    document.getElementById("stand3").style.display = "none";
}

function verStand1() {
    document.getElementById("caratula").style.display = "none";
    document.getElementById("stand1").style.display = "block";
    document.getElementById("stand2").style.display = "none";
    document.getElementById("stand3").style.display = "none";
}

function verStand2() {
    document.getElementById("caratula").style.display = "none";
    document.getElementById("stand1").style.display = "none";
    document.getElementById("stand2").style.display = "block";
    document.getElementById("stand3").style.display = "none";
}

function verStand3() {
    document.getElementById("caratula").style.display = "none";
    document.getElementById("stand1").style.display = "none";
    document.getElementById("stand2").style.display = "none";
    document.getElementById("stand3").style.display = "block";
}
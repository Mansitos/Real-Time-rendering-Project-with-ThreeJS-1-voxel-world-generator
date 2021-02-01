// aggiungo i vari valori alla GUI
document.getElementById('mapImg').src = heightmap_img;
document.getElementById('shadowQuality').innerHTML = shadowQuality;
document.getElementById('verticesNumber').innerHTML = faces;
document.getElementById('cubesNumber').innerHTML = cubes;
document.getElementById('mapDim').innerHTML = dim + ' x ' + dim;
document.getElementById('terrTime').innerHTML = time_to_render;

function musicOn() {
    // la musica riprende
    background_music.play();
    // aggiorno la visualizzazione dei button
    var buttonOff = document.getElementById("musicOff");
    buttonOff.classList.remove("active");
    var buttonOn = document.getElementById("musicOn");
    buttonOn.classList.add("active");
    console.log("Music ON")
}
function musicOff() {
    // la musica si ferma
    background_music.pause();
    // aggiorno la visualizzazione dei button
    var buttonOff = document.getElementById("musicOff");
    buttonOff.classList.add("active");
    var buttonOn = document.getElementById("musicOn");
    buttonOn.classList.remove("active");
    console.log("Music OFF")
}

function wireframeOn() {
    // logica algoritmo --> TODO: Mansi
    
    // aggiorno la visualizzazione dei button
    var buttonOff = document.getElementById("wireframeOff");
    buttonOff.classList.remove("active");
    var buttonOn = document.getElementById("wireframeOn");
    buttonOn.classList.add("active");
    console.log("Wireframe ON")
}
function wireframeOff() {
    // logica algoritmo --> TODO: Mansi
    
    // aggiorno la visualizzazione dei button
    var buttonOff = document.getElementById("wireframeOff");
    buttonOff.classList.add("active");
    var buttonOn = document.getElementById("wireframeOn");
    buttonOn.classList.remove("active");
    console.log("Wireframe OFF")
}

function worseShadow() {
    if (shadowQuality > 1) {
        shadowQuality--;

        // Ricalcolo dell'ombra
        SetupDirectionalLight();
    
        // Aggiorno il valore nella GUI
        document.getElementById('shadowQuality').innerHTML = shadowQuality;
    }
}
function betterShadow() {
    if (shadowQuality < 5) {
        shadowQuality++;
        
        // Ricalcolo dell'ombra
        SetupDirectionalLight();

        // Aggiorno il valore nella GUI
        document.getElementById('shadowQuality').innerHTML = shadowQuality;
    }
}
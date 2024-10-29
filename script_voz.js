// Configuración de reconocimiento de voz
let repro;
if (!("webkitSpeechRecognition" in window)) {
    alert("Disculpa, no puedes usar la API de reconocimiento de voz.");
} else {
    repro = new webkitSpeechRecognition();
    repro.lang = "es-ES";
    repro.continuous = true;
    repro.interimResults = true;
    repro.addEventListener("result", mostrarTexto);

    // Iniciar reconocimiento de voz
    repro.start();
}

// Función para mostrar el texto reconocido en tiempo real
function mostrarTexto(event) {
    let textoReconocido = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        textoReconocido += event.results[i][0].transcript;
    }
    document.getElementById("texto").innerHTML = textoReconocido;
}

// Función para leer el texto ingresado en el campo de texto
function speakText() {
    const text = document.getElementById("text-input").value;
    if (text.trim() !== "") {
        const voz = new SpeechSynthesisUtterance(text);
        voz.lang = "es-ES";
        voz.volume = 1;
        window.speechSynthesis.speak(voz);
    }
}

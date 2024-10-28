// Temporizador de redirección automática
function delayRedirect() {
    document.getElementById('delayMsg').innerHTML = '<span id="countDown">10</span> segundos para ser redirigido automáticamente...';
    let count = 10;
    const countdown = setInterval(function () {
        count--;
        document.getElementById('countDown').innerHTML = count;
        if (count === 0) {
            clearInterval(countdown);
            window.location.href = 'voz.html';
        }
    }, 1000);
}

// Función para reproducir el texto en voz
function speech() {
    const text = document.getElementById("text").value;
    if (text !== "") {
        const voz = new SpeechSynthesisUtterance(text);
        voz.lang = "es-ES";
        voz.volume = 1;
        window.speechSynthesis.speak(voz);
    }
}

// Configuración de reconocimiento de voz
let recognition;
function startRecognition() {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Disculpa, no puedes usar la API de reconocimiento de voz.");
    } else {
        recognition = new webkitSpeechRecognition();
        recognition.lang = "es-ES";
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            let text = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                text += event.results[i][0].transcript + ' ';
            }
            document.getElementById("resultText").innerText = text;
        };
        recognition.start();
    }
}

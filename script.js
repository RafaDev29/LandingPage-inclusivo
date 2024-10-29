// Leer el mensaje de bienvenida en voz alta y comenzar cuenta regresiva al cargar la página
window.onload = function() {
    speakMessage();
    startCountdown();
};

// Función para leer el texto en voz alta
function speakMessage() {
    const text = document.getElementById("text").textContent;
    if (text !== "") {
        let voz = new SpeechSynthesisUtterance(text);
        voz.lang = "es-ES";
        voz.volume = 1;
        window.speechSynthesis.speak(voz);
    }
}

// Función de cuenta regresiva y redirección
function startCountdown() {
    let countdown = 10;
    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(() => {
        countdown -= 1;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = "voz.html";
        }
    }, 1000);
}

// Redirección manual para problemas auditivos
function redirectToSum() {
    window.location.href = "sum.html";
}

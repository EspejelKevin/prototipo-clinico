function iniciarEvaluacion() {
    const resultado = document.getElementById('resultado');
    const mensaje = `
        <p><strong>Resultado:</strong> Tu bienestar emocional es importante.</p>
        <p>Si últimamente te sientes ansioso/a o triste, considera hablar con alguien de confianza o contactar a un profesional.</p>
    `;
    resultado.innerHTML = mensaje;
}

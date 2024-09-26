function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

document.getElementById("verificar").addEventListener("click", function() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isPrime(numero)) {
        resultado.textContent = numero + " é primo.";
    } else {
        resultado.textContent = numero + " não é primo.";
    }
});
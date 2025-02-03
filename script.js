// Funkce pro generování Fibonacciho posloupnosti
function generateFibonacci(n) {
    let a = 1, b = 1, temp;
    let i = 0;
    while (i <= n) {
        const mesic = document.createElement('div');
        mesic.classList.add('rabbit');
        let stars = '';
        let j = 0;
        while (j < a) {
            stars += '**';
            j++;
      }
    }
    mesic.innerTEXT = stars;
    fibonacci.appendChild(mesic);
    temp = a + b;
    a = b;
    b = temp;
    i++;
}

// Spuštění generování Fibonacciho posloupnosti s 6 prvky
const n = 6;
generateFibonacci(n);
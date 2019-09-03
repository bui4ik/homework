let quadraticEquation = () => {

    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let third = document.getElementById("third").value;
    const solution = document.getElementById("solution");

    if (first === '') first = 1;
    if (second === '') second = 1;
    if (third === '') third = 0;

    if (+first === 0 ) {
        solution.innerHTML = 'Первый коэффициент не может быть равен нулю. Исправьте';
        return false
    }

    const d = second * second - 4 * first * third;

    if(d < 0) {
        solution.innerHTML = 'Дискриминант меньше нуля. Корней нет';
        return false;
    }

    if(d === 0) {
        const result = (-second + Math.sqrt(d)) / (2 * first);
        solution.innerHTML = `Дискриминант равен нулю. Корень ${result}`;
    } else if(d > 0){
        const x = ((-second + Math.sqrt(d)) / (2 * first));
        const y = ((-second - Math.sqrt(d)) / (2 * first));
        solution.innerHTML = `Первый корень ${x}, Второй корень ${y}`;
    }
};

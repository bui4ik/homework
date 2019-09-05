let quadraticEquation = (a, b, c) => {

    if (a === '') a = 0;
    if (b === '') b = 0;
    if (c === '') c = 0;

    if (a === 0) {
        if (b !== 0) {
            let x = -c / b;
            return ` коэффициенты : a = ${a}, b = ${b}, c = ${c} уравнение становится линейным x =${x}`
        } else if (c === 0) {
            return 'x = любое число'
        }
        else {
            return 'Нет решений'
        }
    }

    let d = b * b - 4 * a * c;

    if(d < 0) {
        let x1 = `(-${b} + ${Math.sqrt(Math.abs(d))}i) / ${(2 *a)}`;
        let x2 = `(-${b} - ${Math.sqrt(Math.abs(d))}i) / ${(2 *a)}`;
        return `дискриминант ${d} нуля, комплексные корни: ${x1} , ${x2}`;
    }


    if(d === 0) {
        const result = (-b + Math.sqrt(d)) / (2 * a);
        return `Дискриминант равен нулю. Корень ${result}`;
     } else if(d > 0){
         const x = ((-b + Math.sqrt(d)) / (2 * a));
         const y = ((-b - Math.sqrt(d)) / (2 * a));
         return `Первый корень ${x}, Второй корень ${y}`;
    }
};

const getResult = () =>{
    const solution = document.getElementById("solution");
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let third = document.getElementById("third").value;
    solution.innerHTML = quadraticEquation(first, second, third);
};

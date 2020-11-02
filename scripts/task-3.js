// Задание 3! Функция-конструктор.

// Напишем функцию-конструктор, содержащую три метода:
// Принимает массив, и возвращает количество элементов этого массива.
// Принимает массив строк, выводит новый массив, содержащий количество символов каждой строки. 
// Прим на входе [“пирамида”, “юг”, “параллелограмм”] на выходе [8, 2, 14]
// Принимает массив строк, выводит их в виде строки, разделенной запятыми.

function Strings(mass) {
    this.elLenght = function() {
        return mass.length;
    }
    this.massLenght = function() {
        let massLength = mass.map(function(el) {
            return el.length;
          });
          return massLength;
    }
    this.joinMass = function() {
        return mass.join(', ');
    }
}

var str = new Strings(['пирамида', 'юг', 'параллелограмм']);
console.log(str.elLenght());
console.log(str.massLenght());
console.log(str.joinMass());

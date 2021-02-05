// Задание 1

document.write('<br>')
document.write('--- Задание 1: Вывести каждый элемент массива с помощью цикла for --- [1, 2, 3, 4, 5, 10] ---')
document.write('<br>')

let mass = [1, 2, 3, 4, 5, 10],
    index;

for(index = 0; index < mass.length; index++) {
    document.write(mass[index] + ' ');
}

document.write('<br>')

// Задание 2

document.write('<br>')
document.write('--- Задание 2: Вывести только отрицательные числа --- [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7] ---')
document.write('<br>')

let mass2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7],
    dex2;

for(dex2 = 0; dex2 < mass2.length; dex2++) {
    if(mass2[dex2] < 0) {
        document.write(mass2[dex2] + ' ');
    }
}
document.write('<br>')

// Задание 3

document.write('<br>')
document.write('--- Задание 3: Потом допишу ---')
document.write('<br>')

let mass3 = [],
    dex3,
    coun = 0,
    result = 0;

for(dex3 = 23; dex3 <= 57; dex3++) {
    mass3.splice(coun, 0, dex3);
    coun++;
    result = result + dex3;
}

document.write(mass3 + '<br>');

mass3 = [],
dex3 = 23,
coun = 0;

while(dex3 <= 57) {
    mass3.splice(coun, 0, dex3);
    dex3++;
    coun++;
}

document.write(mass3 + '<br>');
document.write('Сумма ' + result);

document.write('<br>')

// Задание 4     [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]

document.write('<br>')
document.write('--- Задание 4: Вывести числа начинающиеся с 1, 2 и 5 --- [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’] ---')
document.write('<br>')

let mass4 = ['10', '20', '30', '50', '235', '3000'],
    index4;

for(index4 = 0; index4 < mass4.length; index4++) {
    if(mass4[index4][0] == 1) {
        document.write(mass4[index4] + ' ');
    }
    else if(mass4[index4][0] == 2) {
        document.write(mass4[index4] + ' ');
    } 
    else if(mass4[index4][0] == 5) {
        document.write(mass4[index4] + ' ');
    }
mass4[index4] = [];
}

document.write('<br>')

// Задание 5

document.write('<br>')
document.write('--- Задание 5: Вывести дни недели (выходные жирным) ---')
document.write('<br>')

let mass5 = ['ПН', 'ВТ', 'СР', 'ЧВ', 'ПТ', 'СБ', 'ВС'],
    index5;

for(index5 = 0; index5 < mass5.length; index5++) {
    if(mass5[index5] == 'СБ' || mass5[index5] == 'ВС') {
        document.write('<b>' + mass5[index5] + '</b> ');
    }
    else {
        document.write(mass5[index5] + ' ');
    }
}

document.write('<br>')

// Задание 6

document.write('<br>')
document.write('--- Задание 6: К призвольному массиву добавить элемент и вывести его ---')
document.write('<br>')

let mass6 = ['u3','4r','f9','q7','u3','4h','79','93','e4','g'];
mass6.push('23');
document.write(mass6[mass6.length - 1]);

document.write('<br>')

// Задание 7

document.write('<br>')
document.write('--- Задание 7: Введённые числа внести в массив, а так же отсортировать ---')
document.write('<br>')

let num7 = 0,
    mass7 = [];

while(num7 < 100000) {
    num7 = prompt('Введите число. Пробел - стоп');
    if(num7 == Number(num7)) {
        mass7.push(' ' + num7);
    }
    else if(num7 == String(num7)) {
        alert('Это буква((');
    }
    if(num7 == ' ') break;
}

mass7.splice(mass7.length - 1, 1);
document.write('Введённые числа: ' + mass7 + '<br>');

mass7.sort(function(a,b) {
    return a - b;
})
document.write('После сортировки: ' + mass7);

document.write('<br>');

// Задание 8

document.write('<br>')
document.write('--- Задание 8: Перевернуть массив и вывести его --- [12, false, Текст, 4, 2, -5, 0] ---')
document.write('<br>')

let mass8 = [12, false, 'Текст', 4, 2, -5, 0],
    index8 = 0;
    
mass8.reverse();

while (index8 < mass8.length) {
    document.write(mass8[index8] + ' ');
    index8++
}

document.write('<br>')

// Задание 9

document.write('<br>')
document.write('--- Задание 9: Посчитать количество пустых элементов --- [5, 9, 21, , , 9, 78, , , , 6] ---')
document.write('<br>')

let mass9 = [5, 9, 21, , , 9, 78, , , , 6],
    index9,
    coun9 = 0;

for(index9 = 0; index9 < mass9.length; index9++) {
    if(mass9[index9] == undefined) {
        coun9++;
    }
    else;
}
document.write('Пустых элементов: ' + coun9);

document.write('<br>')

// Задание 10

document.write('<br>')
document.write('--- Задание 10: Посчитать сумму чисел между нулями --- [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2] ---')
document.write('<br>')

let mass10 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2],
    start = mass10.indexOf(0),
    finish = mass10.lastIndexOf(0),
    index10 = start + 1,
    arr10 = 0;

for(index; index10 < finish; index10++) {
    arr10 = arr10 + mass10[index10];
}

document.write('Сумма: ' + arr10);

document.write('<br>')

// Задание 11

document.write('<br>')
document.write('--- Задание 11: Треугольник ---')
document.write('<br>')

let mass11 = prompt('Введите высоту пирамиды'),
    coun11 = 0,
    space11 = mass11;

for(let index11 = 0; index11 < mass11; index11++){
    for(space11; space11 > 0; space11--) {
        document.write('<b style="color:white;">^</b>');
        coun11++;
    }
    space11 = coun11 - 1;
    coun11 = 0;
    for(let num11 = 0; num11 <= index11; num11++) {
        if(num11 == 0) {
            document.write('<b>^</b>');
        }
        else {
            document.write('<b>^^</b>');
        }
    }
document.write('<br>');
}
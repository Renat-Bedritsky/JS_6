// Задание 1

document.write('<br>--- Задание 1: В строке "aaa@bbb@ccc" заменить все @ на ! --- <br>');

let str1 = 'aaa@bbb@ccc';

document.write(str1.replace(/@/g, '!'));

// Задание 2

document.write('<br><br>--- Задание 2: Преобразуйте дату 2025-12-31 в формат 31/12/2025 --- <br>');

let date2 = '2025-12-31';

document.write(date2.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'));

// Задание 3

document.write('<br><br>--- Задание 3: Вырежете из строки «Я учу javascript!» слово «учу» и слово «javascript» через substr, substring, slice --- <br>');

let str3 = 'Я учу javascript!';

document.write('Через <b>substr</b>: ' + str3.substr(2, 3) + ', ' + str3.substr(6) + '<br>');
document.write('Через <b>substring</b>: ' + str3.substring(2, 5) + ', ' + str3.substring(6) + '<br>');
document.write('Через <b>slice</b>: ' + str3.slice(2, 5) + ', ' + str3.slice(6));

// Задание 4

document.write('<br><br>--- Задание 4: Найдите квадратный корень из суммы кубов элементов массива "4, 2, 5, 19, 13, 0, 10", через цикл for --- <br>');

let mass4 = [4, 2, 5, 19, 13, 0, 10],
    sum4 = 0;

for(i = 0; i < mass4.length; i++) {
    sum4 += mass4[i] * mass4[i] * mass4[i];
}
document.write(`Сумма кубов элементов: ${sum4} <br>`);
sum4 = `${Math.sqrt(sum4)}`;
document.write(`Корень из суммы: ${Math.round(sum4)}`);

// Задание 5

document.write('<br><br>--- Задание 5: От <b>a</b> отнять <b>b</b>. Результат присвоить <b>c</b>. Переменная <b>c</b> всегда положительная --- <br>');

let a = 3,
    b = 5,
    c = a - b;

document.write(`Результат: ${Math.abs(c)}`);

// Задание 6

document.write('<br><br>--- Задание 6: Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. --- <br>');

function fun6() {
    $date = new Date;
    time6 = $date.getHours() + ':' + $date.getMinutes() + ':' + $date.getSeconds();
    if($date.getDate() < 10) {dateDay = '0' + $date.getDate()} else dateDay = $date.getDate();
    if($date.getMonth() < 10) {dateMonth = '0' + $date.getMonth()} else dateMonth = $date.getMonth();
    date6 = dateDay +  '.' + dateMonth +  '.' + $date.getFullYear();
}
fun6();
document.write(time6 + ' ' +  date6);

// Задание 7

document.write('<br><br>--- Задание 7: Выражение, которое из строки <b>aa aba abba abbba abca abea</b> вырежет <b>aba, abba, abbba</b> --- <br>');

let str7 = 'aa aba abba abbba abca abea';
document.write(str7.match(/ab+a/g));

// Задание 8

document.write('<br><br>--- Задание 8: Проверить номер телефона --- <br>');

/* let regexp8 = /[+]{1}[0-9]{1,3}[ ]{1}[0-9]{1,3}[ ]{1}[0-9]{2,3}[ -]{1}[0-9]{2,3}[ -]{1}[0-9]{2,3}/;

function check8() {
    phone8 = prompt('Введите номер в фомате: +(код страны) (код города) (xx-xx-xx)');
    if(regexp8.test(phone8) == false) {
        alert('Неверный формат!');
        check8();
    };
}
check8();
document.write(`Вы ввели: ${phone8} <br>`);
document.write(regexp8.test(phone8)); */

// Задание 9

document.write('<br><br>--- Задание 9: Проверить email --- <br>');

let regexp9 = /^[a-z]{1}[a-z0-9]{2,20}@[a-z._-]{2,10}.[a-z]{2,11}$/i;

function check9() {
    email9 = prompt('Введите email в формате: John@mail.en');
    if(regexp9.test(email9) == false) {
        alert('Неверный формат!');
        check9();
    }
}

check9();
document.write(`Вы ввели: ${email9} <br>`);
document.write(regexp9.test(email9));
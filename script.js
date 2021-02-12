// Задание_1

document.write('<br>--- Задание 1: В строке "aaa@bbb@ccc" заменить все @ на ! --- <br>');

let str_1 = 'aaa@bbb@ccc';

document.write(str_1.replace(/@/g, '!'));

// Задание_2

document.write('<br><br>--- Задание 2: Преобразуйте дату 2025-12-31 в формат 31/12/2025 --- <br>');

let date_2 = '2025-12-31';

document.write(date_2.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'));

// Задание_3

document.write('<br><br>--- Задание 3: Вырежете из строки «Я учу javascript!» слово «учу» и слово «javascript» через substr, substring, slice --- <br>');

let str_3 = 'Я учу javascript!';

document.write('Через <b>substr</b>: ' + str_3.substr(2, 3) + ', ' + str_3.substr(6) + '<br>');
document.write('Через <b>substring</b>: ' + str_3.substring(2, 5) + ', ' + str_3.substring(6) + '<br>');
document.write('Через <b>slice</b>: ' + str_3.slice(2, 5) + ', ' + str_3.slice(6));

// Задание_4

document.write('<br><br>--- Задание 4: Найдите квадратный корень из суммы кубов элементов массива "4, 2, 5, 19, 13, 0, 10", через цикл for --- <br>');

let mass_4 = [4, 2, 5, 19, 13, 0, 10],
    sum_4 = 0;

for(i = 0; i < mass_4.length; i++) {
    sum_4 += mass_4[i] * mass_4[i] * mass_4[i];
}
document.write(`Сумма кубов элементов: ${sum_4} <br>`);
sum_4 = `${Math.sqrt(sum_4)}`;
document.write(`Корень из суммы: ${Math.round(sum_4)}`);

// Задание_5

document.write('<br><br>--- Задание 5: От <b>a</b> отнять <b>b</b>. Результат присвоить <b>c</b>. Переменная <b>c</b> всегда положительная --- <br>');

let a = 3,
    b = 5,
    c = a - b;

document.write(`Результат: ${Math.abs(c)}`);

// Задание_6

document.write('<br><br>--- Задание 6: Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. --- <br>');

function fun_6() {
    $date = new Date;
    time_6 = $date.getHours() + ':' + $date.getMinutes() + ':' + $date.getSeconds();
    if($date.getDate() < 10) {dateDay = '0' + $date.getDate()} else dateDay = $date.getDate();
    if($date.getMonth() < 10) {dateMonth = '0' + $date.getMonth()} else dateMonth = $date.getMonth();
    date_6 = dateDay +  '.' + dateMonth +  '.' + $date.getFullYear();
}
fun_6();
document.write(time_6 + ' ' +  date_6);

// Задание_7

document.write('<br><br>--- Задание 7: Выражение, которое из строки <b>aa aba abba abbba abca abea</b> вырежет <b>aba, abba, abbba</b> --- <br>');

let str_7 = 'aa aba abba abbba abca abea';
document.write(str_7.match(/ab+a/g));

// Задание_8

document.write('<br><br>--- Задание 8: Проверить номер телефона --- <br>');

let regexp_8 = /[+]{1}[0-9]{1,3}[ ]{1}[0-9]{1,3}[ ]{1}[0-9]{2,3}[ -]{1}[0-9]{2,3}[ -]{1}[0-9]{2,3}/;

function check_8() {
    phone_8 = prompt('Введите номер в фомате: +(код страны) (код города) (xx-xx-xx)');
    if(regexp_8.test(phone_8) == false) {
        alert('Неверный формат!');
        check_8();
    };
}
check_8();
document.write(`Вы ввели: ${phone_8} <br>`);
document.write(regexp_8.test(phone_8));

// Задание_9

document.write('<br><br>--- Задание 9: Проверить email --- <br>');

let regexp_9 = /^[a-z]{1}[a-z0-9]{2,20}@[a-z._-]{2,10}.[a-z]{2,11}$/i;

function check_9() {
    email_9 = prompt('Введите email в формате: John@mail.en');
    if(regexp_9.test(email_9) == false) {
        alert('Неверный формат!');
        check_9();
    }
}

check_9();
document.write(`Вы ввели: ${email_9} <br>`);
document.write(regexp_9.test(email_9));

// Задание_10 НЕ ГОТОВО

document.write('<br><br>--- Задание 9: Разбить email на 4 части --- <br>');

let site_10 = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'

function site(site_10) {
    let search = /^(https:\/\/[\D+.])([/\d+]\/[\D+-]\d\/)(\?\D+_\D+=\D+_\D+\&\D+_\D+=\D+\d+)(#\d+\D)$/;
    return site_10.match(search);
}
document.write(site(site_10));
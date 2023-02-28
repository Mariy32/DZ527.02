// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
// const Myarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < Myarr.length; i++) 
// {
//     if (Myarr[i] === 0) {
//         console.log(`${Myarr[i]} - это ноль`);
//     } 
//     else if (Myarr[i] % 2 === 0) 
//         {
//         console.log(`${Myarr[i]} - это четное число`);
//     }
//       else {
//         console.log(`${Myarr[i]}- это нечетное число`);
//       }  
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
// const Myarr = [1, 2, 3, 4, 5, 6, 7];
// Myarr.splice(3,2);
// console.log(Myarr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const min = 0;
// const max = 9;
// let Myarr = []; // создаём массив
// for (let i = 0; i < 5; i += 1) { 
// Myarr[i] = Math.random(min, max); 
// }
// console.log(Myarr); 
// function sumNum(Myarr) 
// {
//     let sum = 0; 
//     for( let j = 0; j < 5; j++)
//     {sum += Myarr[j];      
// }
// console.log(sum);  
// }
// sumNum(Myarr); 

// let minimum = Myarr[0];
// for (const item of Myarr) {
//   if(item < minimum) {
//     minimum = item; 
// }
// }
// console.log(minimum); 

// function numthree(Myarr) 
// {
//     for (let k = 0; k < 5; k += 1) { 
//     if (Myarr[k] === 3) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }      
// }
// }
// numthree(Myarr); 


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

const mount = (n,s) => {
    let box = "";
    for (let i = 0; i < n; i += 1) { 
        box += "".repeat(n - i) + s.repeat(2*i + 1) + "\n";
}
return box;
}
const box = mount(20, "x");
console.log(box);


//  Анонимная функция
function sum(a,b) {
    return a+b;
}
function multi(a,b) {
    return a*b;
}

// document.querySelector('.b-1').addEventListener('click',function(){ 
//     let res = sum(6,5);
//     console.log(res);
// })
// document.querySelector('.b-1').addEventListener('click',() => { 
//     let res = sum(6,6);
//     console.log(res);
// })

// запуск двух функций

// document.querySelector('.b-2').addEventListener('click',function(){ 
//     let res = sum(46,55);
//     console.log(res);
//     let res2 = multi(46,55);
//     console.log(res2);

// })
// document.querySelector('.b-2').addEventListener('click', ()=>{ 
//     let res = sum(46,55);
//     console.log(res);
//     let res2 = multi(46,55);
//     console.log(res2);

// })

// callback
function pow2(a) {
    return a**3;
}
const ar1 =[4,5,6,7,8];
const rez2 =ar1.map(pow2);
console.log(rez2);

/* const rez3 = ar1.map((a)=> {
    return a **2 ;
})
console.log(rez3); */

// Сокращенная форма
const rez4 = ar1.map( a => a ** 2) ;
 
console.log(rez4);

filter

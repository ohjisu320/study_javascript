let name = "오지수";
// undefined
console.log(name) ;
// VM364:1 오지수
let welcome = 'Hello world';
// undefined
welcome ;
// 'Hello world'
let numbers = 55 ;
// undefined
numbers ;
// 55
let concat ='String:'+welcome+', Number :'+numbers
// undefined
alert(concat)
// undefined
`string :${welcome}`;
// 'string :Hello world'
`string :${welcome}, Number:${numbers}`;
// 'string :Hello world, Number:55'
let concats_tilt = `String :${welcome}, Number:${numbers}`;
// undefined
console.log(concats_tilt)
// VM965:1 String :Hello world, Number:55

// if
if (true) {
} else if (true) {
} else {
}

let numbers = 10;
// undefined
if (numbers > 0) {
    console.log("숫자는 양수")
} else if (numbers < 0) {
    console.log("숫자는 음수")
} else { console.log("0 입니다.")
}
// VM1356:2 숫자는 양수
// 삼항 연산자 (Ternary Operation)
if (true) {
} else {
}

// Ternary 예제
result = (true) ? 'as true' : 'as false'
result = (numbers > 0) ? '양수' : '음수' ;
// '양수'
console.log(`숫자는 ${result}`)
// VM1474:1 숫자는 양수
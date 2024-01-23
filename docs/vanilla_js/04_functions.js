// function 기본 구문
function function_name(params) {
    return 0;
};
// call function
function_name(5);

// 예제
function function_name(params) {
    return params;
};
// undefined
function_name(5);
// 5

// 예제
function calculateSum(param_first, param_second) {
    result = param_first + param_second;
    return result;
};
// undefined
calculateSum(3, 5);
// 8

// arrow function 기본 구문 << 우리는 쓰지 않을 것임.
let arrow_function = (params) => {
    return 0
}
// arrow function 내부 사용 기본 구문
(params) => {
    console.log()
}
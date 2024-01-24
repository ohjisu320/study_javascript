// fetch() 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch (error) {
//         console.log(`${error.message}`)
//     };
// }

// rent_loan_rate_info from data.go.kr
let rate_list = document.querySelector("#rent_loan_rate_info");
rate_list.addEventListener('click', async (event) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=n8q0vxEC5P2BMwv1kLcYxS7kTyu6EUP6HDeneaUs4TXvp%2Fm6Xfg5ljzg7A%2FQssE2VA%2BuOdmlkYItOj7tngykpA%3D%3D&pageNo=1&numOfRows=30&dataType=JSON`;
    let options = {} ; //python dict 유사 
    try {
        let response = await fetch(url, options); //send
        let result = await response.json(); // 응답 + json형식으로 보여지게끔 변환
        console.log(`response result : ${result}`);
        let contents = document.querySelector("#rent_loan_rate_info_contents");
        contents.innerHTML = result['header']['resultMsg']
    } catch (error) {
        console.log(`${error.message}`)
    };
});

// datalab_shoppinginsight from naver api
let shopping_insight = document.querySelector("#datalab_shoppinginsight");
shopping_insight.addEventListener('click',  async (event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories`;
    let data = {
        "startDate": "2023-08-01",
        "endDate": "2023-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
      }
    let options = {
        method : "POST"
        , headers : {
            "X-Naver-Client-Id" : "9T7l_9LTFbP5PAhqFHcY"
            , "X-Naver-Client-Secret" : "pkikqaY333"
            , "Content-Type" : "application/json"
        }
        , body : JSON.stringify(data)
        } //python dict 유사 
    try {
        let response = await fetch(url, options); 
        let result = await response.json(); // 응답 + json형식으로 보여지게끔 변환
        console.log(`response result : ${result}`);
        let contents = document.querySelector("#datalab_shoppinginsight");
        contents.innerHTML = result['endDate']
    } catch (error) {
        console.log(`${error.message}`)
    };
});

// datagokr_ad_count_by_times from : https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15110963
// let button_data = document.querySelector("#button_id");
// button_data.addEventListener('click', async (event) => {
//     let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=n8q0vxEC5P2BMwv1kLcYxS7kTyu6EUP6HDeneaUs4TXvp%2Fm6Xfg5ljzg7A%2FQssE2VA%2BuOdmlkYItOj7tngykpA==&pageNo=1&numOfRows=30`;
//     let options = {} ; //python dict 유사 
//     try {
//         let response = await fetch(url, options); //send
//         let result = await response.json(); // 응답 + json형식으로 보여지게끔 변환
//         let ad_all = await result["response"]["body"]["items"]; // response > body > items > [...]
//         let ad_array = "" ; //빈 리스트 정의
//         for (let ad_obj of ad_all){
//             ad_array = `${ad_array}<tr><td>${ad_obj["BRDC_YMD"]}</td><td>${ad_obj["BRDC_WKD"]}</td><td>${ad_obj["BRDC_TM_RNG"]}</td><td>${ad_obj["TPBIZ_NM_1"]}</td><td>${ad_obj["TPBIZ_NM_2"]}</td><td>${ad_obj["TPBIZ_NM_3"]}</td><td>${ad_obj["AD_CNT"]}</td></tr>`
//             };
//             let ad_count_element = document.querySelector("#ad_count_array_id");
//             ad_count_element.innerHTML = ad_array
//     } catch (error) {
//         console.log(`${error.message}`)
//     };
// });

window.onload = async (event) => {
    let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=n8q0vxEC5P2BMwv1kLcYxS7kTyu6EUP6HDeneaUs4TXvp%2Fm6Xfg5ljzg7A%2FQssE2VA%2BuOdmlkYItOj7tngykpA==&pageNo=1&numOfRows=50`;
    let options = {} ; //python dict 유사 
    try {
        let response = await fetch(url, options); //send
        let result = await response.json(); // 응답 + json형식으로 보여지게끔 변환
        let ad_all = await result["response"]["body"]["items"]; // response > body > items > [...]
        let ad_array = "" ; //빈 리스트 정의
        let start_num = 0
        let end_num =9
        for (let ad_obj of ad_all.slice(start_num,end_num)){
            ad_array = `${ad_array}<tr><td>${ad_obj["BRDC_YMD"]}</td><td>${ad_obj["BRDC_WKD"]}</td><td>${ad_obj["BRDC_TM_RNG"]}</td><td>${ad_obj["TPBIZ_NM_1"]}</td><td>${ad_obj["TPBIZ_NM_2"]}</td><td>${ad_obj["TPBIZ_NM_3"]}</td><td>${ad_obj["AD_CNT"]}</td></tr>`
            };
        let ad_count_element = document.querySelector("#ad_count_array_id");
        ad_count_element.innerHTML = ad_array
        let previous_click = document.querySelector("#previous_id")
        let next_click = document.querySelector("#next_id")
        previous_click.addEventListener('click', (event)=>{
            console.log(event.code)
            if (event.code=='click') {
                try {
                    for (let ad_obj of ad_all.slice(start_num-10,end_num-10)){
                        ad_array = `${ad_array}<tr><td>${ad_obj["BRDC_YMD"]}</td><td>${ad_obj["BRDC_WKD"]}</td><td>${ad_obj["BRDC_TM_RNG"]}</td><td>${ad_obj["TPBIZ_NM_1"]}</td><td>${ad_obj["TPBIZ_NM_2"]}</td><td>${ad_obj["TPBIZ_NM_3"]}</td><td>${ad_obj["AD_CNT"]}</td></tr>`
                        };
                    ad_count_element.innerHTML = ad_array
                } catch (error) {
                    let message = "이전 데이터가 없습니다."
                    ad_count_element.innerHTML = `${message}`     
                }
            }});
        next_click.addEventListener('click', (event)=>{
            console.log(`${event.code}`)
        });
        if (previous_click.addEventListener('click', (event) => {event.code=='click'})) {
            try {
                for (let ad_obj of ad_all.slice(start_num-10,end_num-10)){
                    ad_array = `${ad_array}<tr><td>${ad_obj["BRDC_YMD"]}</td><td>${ad_obj["BRDC_WKD"]}</td><td>${ad_obj["BRDC_TM_RNG"]}</td><td>${ad_obj["TPBIZ_NM_1"]}</td><td>${ad_obj["TPBIZ_NM_2"]}</td><td>${ad_obj["TPBIZ_NM_3"]}</td><td>${ad_obj["AD_CNT"]}</td></tr>`
                    };
                ad_count_element.innerHTML = ad_array
            } catch (error) {
                let message = "이전 데이터가 없습니다."
                ad_count_element.innerHTML = `${message}`     
            }
        } else if (next_click.addEventListener('click', (event) => {event.code=='click'})) {
            try {
                start_num = start_num+10
                end_num =end_num+10
                for (let ad_obj of ad_all.slice(start_num,end_num)){
                    ad_array = `${ad_array}<tr><td>${ad_obj["BRDC_YMD"]}</td><td>${ad_obj["BRDC_WKD"]}</td><td>${ad_obj["BRDC_TM_RNG"]}</td><td>${ad_obj["TPBIZ_NM_1"]}</td><td>${ad_obj["TPBIZ_NM_2"]}</td><td>${ad_obj["TPBIZ_NM_3"]}</td><td>${ad_obj["AD_CNT"]}</td></tr>`
                    };
                ad_count_element.innerHTML = ad_array
            } catch (error) {
                let message = "다음 데이터가 없습니다."
                ad_count_element.innerHTML = `${message}`     
            }
        } else {
        }
    } catch (error) {
        console.log(`${error.message}`)
    };
}
event_keydown.addEventListener('keydown', (event) => {
    console.log(`now key down : ${event.code}`);
    if (event.code == 'Enter'){ // keydown 시 넘어온 event에서 코드 확인
        console.log(`key down : ${event.code}`);
    }
}
                              );

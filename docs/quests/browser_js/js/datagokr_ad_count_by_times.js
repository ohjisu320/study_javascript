// datagokr_ad_count_by_times from : https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15110963

window.onload = async (event) => {
    let url = `https://apis.data.go.kr/B552898/ad_count_by_times/getAdCountByTimesList?serviceKey=n8q0vxEC5P2BMwv1kLcYxS7kTyu6EUP6HDeneaUs4TXvp%2Fm6Xfg5ljzg7A%2FQssE2VA%2BuOdmlkYItOj7tngykpA==&pageNo=1&numOfRows=100`;
    let options = {} ; //python dict 유사 
    try {
        let response = await fetch(url, options); //send
        let result = await response.json(); // 응답 + json형식으로 보여지게끔 변환
        let ad_all = await result["response"]["body"]["items"]; // response > body > items > [...]
        let ad_array = "" ; //빈 리스트 정의
        let start_num = 0 // 초기값 정의
        let end_num =9
        for (let ad_obj of ad_all.slice(start_num,end_num)){
            ad_array = `${ad_array}<tr><td>${ad_obj["BRDC_YMD"]}</td><td>${ad_obj["BRDC_WKD"]}</td><td>${ad_obj["BRDC_TM_RNG"]}</td><td>${ad_obj["TPBIZ_NM_1"]}</td><td>${ad_obj["TPBIZ_NM_2"]}</td><td>${ad_obj["TPBIZ_NM_3"]}</td><td>${ad_obj["AD_CNT"]}</td></tr>`
            };
        let ad_count_element = document.querySelector("#ad_count_array_id");
        ad_count_element.innerHTML = ad_array
        let previous_click = document.querySelector("#previous_id")
        let next_click = document.querySelector("#next_id")
        // paginations
        previous_click.addEventListener('click', (event) => {
            let ad_array = "" // ad_array 초기화
            start_num = start_num-10 // start_num, end_num 재설정
            end_num =end_num-10
            if (start_num<0) { 
                start_num=-10 //start_num, end_num 재설정
                end_num=-1
                let message = '이전 데이터가 없습니다.'
                ad_count_element.innerHTML = message   
            }
            else {  // start_num>=0일 때          
                for (let ad_obj of ad_all.slice(start_num,end_num)){
                ad_array = `${ad_array}<tr><td>${ad_obj["BRDC_YMD"]}</td><td>${ad_obj["BRDC_WKD"]}</td><td>${ad_obj["BRDC_TM_RNG"]}</td><td>${ad_obj["TPBIZ_NM_1"]}</td><td>${ad_obj["TPBIZ_NM_2"]}</td><td>${ad_obj["TPBIZ_NM_3"]}</td><td>${ad_obj["AD_CNT"]}</td></tr>`
                };
            ad_count_element.innerHTML = ad_array}
        });
        next_click.addEventListener('click', (event)=>{
            let ad_array = "" // ad_array 초기화
            start_num = start_num+10 // start_num, end_num 재설정
            end_num =end_num+10
            if (start_num>=ad_all.length) { //start_num이 ad_all(array)의 길이보다 커질 때
                start_num=ad_all.length //start_num,end_num 재설정
                end_num=ad_all.length+9
                let message = "다음 데이터가 없습니다." 
                ad_count_element.innerHTML = message   // message 띄우기
            }
            else {
                for (let ad_obj of ad_all.slice(start_num,end_num)){
                    ad_array = `${ad_array}<tr><td>${ad_obj["BRDC_YMD"]}</td><td>${ad_obj["BRDC_WKD"]}</td><td>${ad_obj["BRDC_TM_RNG"]}</td><td>${ad_obj["TPBIZ_NM_1"]}</td><td>${ad_obj["TPBIZ_NM_2"]}</td><td>${ad_obj["TPBIZ_NM_3"]}</td><td>${ad_obj["AD_CNT"]}</td></tr>`
                    };
                ad_count_element.innerHTML = ad_array
            }})
            

        } catch (error) {
            console.log(`${error.message}`)
    };
}

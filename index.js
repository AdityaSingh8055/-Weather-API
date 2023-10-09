const cityinput=document.getElementById('cityinput');
const submitBtn=document.getElementById('add');
const city_name=document.getElementById('cityoutput');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('tempstatus');
const getInfo =async(event)=>{
    event.preventDefault();
    let cityVal=cityinput.value;

    if(cityVal==""){
        city_name.innerText="Please enter a valid city";

    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9234faf6bc1070234c4551e5616fd604`;
            city_name.innerHTML=`${cityVal}`;
            const response=await fetch(url);
            const data=await response.json()
            const arrdata=[data];
            temp.innerText=arrdata[0].main.temp;
            temp_status.innerText=arrdata[0].weather[0].main;
        }catch{
            city_name.innerText="Please enter the input correctly";
        }
    }
}
submitBtn.addEventListener('click',getInfo);
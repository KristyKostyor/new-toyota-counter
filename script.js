function toyotaCountDown(){
    const toyotaDate = new Date('September 25, 2023 00:00')
    const now=new Date();
    const diff=toyotaDate-now;
    
    const msInSecond=1000;
    const msInMinute=60*1000;
    const msInHour=60*60*1000;
    const msInDay=24*60*60*1000;
    
    const displayDay= Math.floor(diff/msInDay);
    document.querySelector('.days').textContent=displayDay;
    
    const displayHour=Math.floor((diff%msInDay)/ msInHour);
    document.querySelector('.hours').textContent=displayHour;
    
    const displayMinute=Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minutes').textContent=displayMinute;
    
    const dispalySecond=Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent=dispalySecond;
    
    if (diff <=0){
        document.querySelector('.days').textContent=0;
        document.querySelector('.hours').textContent=0;
        document.querySelector('.minutes').textContent=0;
        document.querySelector('.seconds').textContent=0;
        clearInterval(timerID);
        toytaCome();
        
    }
    
    
    }
    
    let timerID = setInterval(toyotaCountDown,1000);
    
    function toytaCome(){
        const heading=document.querySelector('h1');
        heading.textContent='Toyota! Buy now!'
        heading.classList.add('red');
    }
    

    
    const button=document.querySelector('#myButton');
    const audio=document.querySelector('#myAudio');
    
    button.addEventListener('click', function(){
        if(audio.paused){
            audio.play();
            button.classList.toggle('pause');
        }
    else{
        audio.pause();
        button.classList.toggle('pause');
    }
    })
    
    
      /*
    const audio=document.querySelector('#myAudio');
    const btn=document.querySelector('#myButton');
    const imgSrc=['https://img.icons8.com/ios/344/play--v1.png', 
                    'https://img.icons8.com/ios/344/pause--v1.png'];

    btn.addEventListener('click',()=>{
        if(audio.paused){
            playSound();
        }
        else {
            pauseSound();
        }
    })
function playSound(){
    document.querySelector('.img_src').src=imgSrc[0];
    audio.play();
}
function pauseSound(){
    document.querySelector('.img_src').src=imgSrc[1];
    audio.pause();
}*/
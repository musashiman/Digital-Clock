let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(()=>{
    let day = new Date();
    let gh = day.getHours()*30;
    let gm = day.getMinutes()*6;
    let gs = day.getSeconds()*6;
    
    hr.style.transform = `rotateZ(${gh+(gm/12)}deg)`;
    mn.style.transform = `rotateZ(${gm}deg)`;
    sc.style.transform = `rotateZ(${gs}deg)`;

    let hour = document.querySelector('#hour');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let ampm = document.querySelector('#ampm');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    let am = h >= 12 ? 'PM':'AM'
    
    // convert 24hr clock to 12hr clock
    if (h>12){
        h = h -12;
    }
    
    h = (h <10) ? '0' + h:h
    m = (m <10) ? '0' + m:m
    s = (s < 10) ? "0" + s:s
    
    
    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
    ampm.innerHTML = am;
});



 function currentTime() {
    let date = new Date(); 
    let hrs = date.getHours();
    let min= date.getMinutes();
    let secs= date.getSeconds();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    secs = secs < 10 ? "0" + secs : secs;
   
    let time = hrs + ':'+ min + ':' + secs;
    document.querySelector('.clock-display').innerText = time;

    let pro = (secs/min)*14
    document.querySelector('.clock-progress-bar').style.width = pro + 'rem'
   // console.log(pro)
     
   //  document.querySelector('.clock-progress-bar').style.width = Math.floor(secs/60*100})
    
   //  {Math.floor(secs/60*100}
 }

// function progress(){
//    let date = new Date(); 
//    let min= date.getMinutes();
//    let secs= date.getSeconds();

//    let pro = min/secs
//    console.log(min/secs)
//    document.querySelector('.clock-progress-bar').style.width = pro + 'rem'

   // var + rem

currentTime()

// function callAll(){
 setInterval(currentTime, 1000)
// currentTime();
// progress()
// }
// callAll()
// console.log()

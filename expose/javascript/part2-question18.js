function time(){
    let date = new Date();
    let time = date.toLocaleDateString();
    console.log(time);
}    

setInterval(time,1000)
// ### Asynchronous Callback:
// Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside 'higherOrderAsync', call the callback function asynchronously using setTimeout after a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31).
function getdate(){
    const d = new Date();
    let day = d.getUTCDate();
    return day;
}

function higherOrderAsync(callback){
    setTimeout(callback,getdate()*1000)
}
function display(){
    console.log("done");
}
higherOrderAsync(display);
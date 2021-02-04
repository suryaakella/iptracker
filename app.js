const ip = document.querySelector('.ip');
const loc = document.querySelector('.location');
const btn = document.querySelector('.btn')
const time = document.querySelector('.time')

btn.addEventListener('click', printdetails, false);

function printdetails(){
    const data = axios.get("https://ipapi.co/json").then(response => {
        console.log(response);
        ip.textContent = ` ${response.data.ip} `;
        loc.textContent = `${response.data.region}`;
        var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        time.textContent = `${currentdate}`;
    });
    
}






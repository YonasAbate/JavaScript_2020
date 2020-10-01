// indian watch
let indianWatch = () => {
    let options = { timeZone : 'Asia/Kolkata'};
    let currentDate = new Date ().toLocaleDateString('en-us',options);
    let currentTime = new Date ().toLocaleTimeString('en-us',options);
    document.querySelector('#india-date').innerText = currentDate;
    document.querySelector('#india-time').innerText = currentTime;
};
setInterval(indianWatch, 1000);

// USA Watch
let usaWatch = () => {
    let options = { timeZone : 'America/New_York'};
    let currentDate = new Date ().toLocaleDateString('en-us',options);
    let currentTime = new Date ().toLocaleTimeString('en-us',options);
    document.querySelector('#usa-date').innerText = currentDate;
    document.querySelector('#usa-time').innerText = currentTime;
};
setInterval(usaWatch, 1000);

// China Watch
let chinaWatch = () => {
    let options = { timeZone : 'Asia/Shanghai'};
    let currentDate = new Date ().toLocaleDateString('en-us',options);
    let currentTime = new Date ().toLocaleTimeString('en-us',options);
    document.querySelector('#china-date').innerText = currentDate;
    document.querySelector('#china-time').innerText = currentTime;
};
setInterval(chinaWatch, 1000);
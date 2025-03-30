 
const timer = document.getElementById("timer");
const finalday = new Date("2025-12-22T07:00:00");

function countdown() {
    const now = new Date();
    const timeLeft = finalday - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor( (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
        const minutes = Math.floor( (timeLeft % (1000 * 60 * 60)) / (1000 * 60) );
        const seconds = Math.floor( (timeLeft % (1000 * 60 )) / (1000) );
        let count = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
        timer.innerHTML = `${count} until Annual Day Celebration 2025!<br>Annual Day will be celebrated on 22nd December 2025, 7:00 AM`;
    }
    else
    {
        timer.innerHTML = "It's TIME!!!";
    }
}

setInterval(countdown, 1000);
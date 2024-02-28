function countdown(){
    const finalDate = new Date("march 12, 2024 13:30:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = finalDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //Represent the elements with their Ids
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            // Display a message when the countdown has ended
            docujment.getElementById("countdown").innerHTML = "countdown ended.";
        }
     }, 1000);
}
//countdown begins
countdown();
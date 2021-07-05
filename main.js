function startCounter(){
    let date = new Date(document.getElementById("inputDate").value)
    date.setDate(date.getDate() + 1)

    if(date != "Invalid Date"){
        document.getElementById("menu").style.display = "none"
        document.getElementById("counter").style.display = "inline"
        document.getElementById("error").style.display = "none"
        
        var counter = setInterval(function() {
            var now = new Date().getTime(); 
            var rest = date - now;
            
            var days = Math.floor(rest / (1000 * 60 * 60 * 24))
            var hours = Math.floor((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            var minutes = Math.floor((rest % (1000 * 60 * 60)) / (1000 * 60))
            var seconds = Math.floor((rest % (1000 * 60)) / 1000)
    
            document.getElementById("days").innerHTML = days
            document.getElementById("hours").innerHTML = hours
            document.getElementById("minutes").innerHTML = minutes
            document.getElementById("seconds").innerHTML = seconds
        })
    }else{
        document.getElementById("error").style.display = "inline"
    }
}

function backMenu(){
    document.getElementById("menu").style.display = "flex"
    document.getElementById("counter").style.display = "none"
}
var rect = document.getElementById("box");

rect.addEventListener("mousemove", function(detail) {
    var rectangleLocation = rect.getBoundingClientRect()
    var insideRectVal = detail.clientX - rectangleLocation.left;
    if(insideRectVal < rectangleLocation.width/2){
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectVal)
        rect.style.backgroundColor = `rgb(${redColor}, 0, 0)`
        rect.style.transition = "0.3s"
        
    }else{

        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectVal)
        rect.style.backgroundColor = `rgb(0, 50, ${blueColor})`
        rect.style.transition = "0.3s"
    }
    
    // console.log(rectangleLocation.width)
    console.log()
})
rect.addEventListener("mouseleave", function() {
    rect.style.backgroundColor = "white"
    rect.style.transition = "0.3s"
})
"use strict"
let slides = document.querySelectorAll(".slide")
slides = Array.from(slides)
const prevBtn = document.querySelector("#prev-arrow");
const nextBtn = document.querySelector("#next-arrow")
let dots = document.querySelectorAll(".dot")
dots = Array.from(dots)

// track the index
let indexTracker = 0;

// call slider on load
slider(indexTracker)

// Add event listener to dots and call currentSlide with parameter
for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", (e) =>{
        currentSlide(i,e)
    } )
    
}

function currentSlide(index, event){
    indexTracker = index
    slider(indexTracker, event)
}


// Add event listner to the next and prev button and call function nextSlide
prevBtn.addEventListener("click", (e) =>{
    nextSlide(-1)
})
nextBtn.addEventListener("click", (e) =>{
    nextSlide(1)
})

function nextSlide(index){
    indexTracker += index
    indexTracker = (indexTracker > slides.length - 1) ? 0 :
   (indexTracker < 0) ? slides.length - 1 : indexTracker

    slider(indexTracker)
}


// slider function to show slide
function slider(currentIndex){

    // Loop through slides and hide all slides
    for(let i =0; i < slides.length; i++){
       
        slides[i].style.display ="none";
    }
    // loop through dots and remove active class
    for(let i =0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }

    // show the respective slide
    slides[currentIndex].style.display ="inline-flex";
    dots[currentIndex].classList.add("active")

}

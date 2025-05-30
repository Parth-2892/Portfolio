function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".main-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        { id: "text1", text: "Hello, I'm" },
        { id: "title", text: "Parth Patel" },
        { id: "text2", text: "Full Stack Web Developer" }
    ];
    const typingSpeed = 100; // Speed in milliseconds
    const pauseBetweenLoops = 1000; // Pause before starting over
  
    function typeWriter(element, text, i, callback) {
        if (i < text.length) {
            document.getElementById(element).innerHTML = text.substring(0, i + 1);
            setTimeout(() => typeWriter(element, text, i + 1, callback), typingSpeed);
        } else if (typeof callback === "function") {
            setTimeout(callback, pauseBetweenLoops);
        }
    }
  
    function startTypingEffect(elements) {
        if (elements.length > 0) {
            const { id, text } = elements.shift();
            typeWriter(id, text, 0, () => {
                elements.push({ id, text }); // Add the element back to the end of the array
                startTypingEffect(elements); // Continue with the next element
            });
        }
    }
  
    startTypingEffect([...elements]); // Start the typing effect with a copy of the elements array
  });
  
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  
  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  
  var sidemenu = document.getElementById("sidemenu");
  
  function openmenu(){
    sidemenu.style.right = "0";
  }
  
  function closemenu(){
    sidemenu.style.right = "-200px";
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    const cards = document.querySelectorAll('.single-card');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;
  
    function updateCarousel() {
        wrapper.style.transform = `translateX(${-currentIndex * 320}px)`;
    }
  
    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
  
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
  });
  
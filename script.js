window.onload = function() 
{ 
    alert("Welcome to Shahz's Personal Website!"); 
}; 
// Call the function to display date and time when the page loads 
window.onload = function() { 
    displayDateTime(); 
} 
function changeAboutMeText() 
{

    const aboutMeTexts = ["Tech Enthusiast", "UI/UX Designer", "Full Stack Web Developer"]
    const typingSpeed = 100; // milliseconds per character 
    const eraseSpeed = 50; // milliseconds per character during erasing 
    const pauseTime = 1500; // milliseconds to pause between each text change 
    const aboutMeElement = document.querySelector('.about-me'); 

    let textIndex = 0; 
    let charIndex = 0; 
    let isDeleting = false; 
    
    function type() {
        const currentText = aboutMeTexts[textIndex];
        /*Typing*/
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        /* erasing */
        else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        }
        /*switching the deleting or typing process*/
        else {
            isDeleting = !isDeleting;
            if (!isDeleting){
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}
//call function to add stunning modification
changeAboutMeText();
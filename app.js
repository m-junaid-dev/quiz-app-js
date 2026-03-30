
        let correctAnswers = ["a", "a", "a", "a", "a"];
        let numbered = document.querySelector(".numbers");
        let number = document.querySelector(".numbers h2");
        let span = document.querySelector(".numbers span");
        let box = document.querySelector(".container");
        // let answered = true;


        let form = document.querySelector("form");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
        let answered = true;


            let score = 0;
            for (let i = 0; i < correctAnswers.length; i++) {

                let selected = document.querySelector(`input[name=q${i + 1}]:checked`);

                 if(!selected){
                   answered = false; 
                }

                if (selected && selected.value === correctAnswers[i]) {
                    score++;
                }
               
            }
            // let = percetage = (score / correctAnswers.length) * 100;
            let percetage = Math.round((score / correctAnswers.length) * 100);



            function animateScore(finalScore){
                let start = 0;
                if(finalScore === 0){  
                    number.textContent = start + "%";
                    return;
                }
                let inertval = setInterval(()=>{
                    start++;
                    
                    number.textContent = start + "%";
                    if(start >= finalScore){
                        clearInterval(inertval);
                    }
                },10)
            }
            
            if(!answered){
                alert("Pleas Complete Your Quiz")
                form.reset();
                return;
            }else if(percetage < 40){
                numbered.style.display = "block";
                span.textContent = "Your Score is ";
                animateScore(percetage);

                number.style.color = "red";
            }else{
                numbered.style.display = "block";
                span.textContent = "You are Correct";
                animateScore(percetage);

                number.style.color = "rgb(33, 199, 33)";
            }
            

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            box.classList.add("conta");
            form.reset();
                if(window.innerWidth <= 768){
                   box.style.display = "none";
}

            
        })

        

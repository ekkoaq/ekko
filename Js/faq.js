function showFAQ(id){

    document.getElementById("faqCategories").style.display = "none";

    document.querySelectorAll(".faq-details").forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

function goBack(){

    document.getElementById("faqCategories").style.display = "block";

    document.querySelectorAll(".faq-details").forEach(section => {
        section.style.display = "none";
    });
}


const questions = document.querySelectorAll(".faq-question");

questions.forEach(btn => {

    btn.addEventListener("click", () => {

        const item = btn.parentElement;

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        }else{

            answer.style.maxHeight =
            answer.scrollHeight + "px";

        }

    });

});
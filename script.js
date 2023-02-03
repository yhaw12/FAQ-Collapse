// selecting the question cards

let questions = document.querySelectorAll('.question');

questions.forEach((question)=>{

    const tittle = question.querySelector('.tittle');

    tittle.addEventListener('click', ()=>{
        questions.forEach((item)=>{
            if (item !== question){
                item.classList.remove('show');
            }

        });
        
        question.classList.toggle('show')
    })

});

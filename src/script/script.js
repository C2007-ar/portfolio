document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        '.appz, .appy, .appl, .appr, .appy4, .appy3, .appy6'
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                

                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));

    const Travail = document.querySelectorAll(".trait")
    const form=document.querySelector("form")
    let i=0;
    function aff(){
        i=i+1;
        if(i%2==0){
            form.reset();
            form.style.display='none';
        }
        else{
            form.style.display='grid';
        }
    }
    
        Travail.forEach(el => el.addEventListener('click', aff));

    const croix=document.getElementById("croix");
    croix.addEventListener('click', ()=> {
        form.reset();
        form.style.display='none';
    })
});

emailjs.init("PuFuy6OAqgE-Zo2Tc")
document
.getElementById("contact-form")
.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        "service_y4owsgi",
        "template_jjtos4k",
        this
    )
    .then(function(){
        alert("Message envoyé!");
    })
    .catch(function(){
        alert("Erreur lors de l'envoi..")
    });
});


// first page
document.addEventListener("DOMContentLoaded",()=>{

    // taking content upwards
    const swipe=document.querySelector('.next_page');

    swipe.onclick=()=>{
        // classes first & second appearence
        const firstAppearence=document.querySelector(".first_appearence");
        const secondAppearence=document.querySelector(".second_appearence");

        // using first & second appearence
        firstAppearence.style.animation="new_page 1s 1 forwards ease";
        secondAppearence.style.animation="new_page 1s 1 forwards ease";

        // next-page
        const aboutMe=document.querySelector('.About_me');
        const secondPageHeading=document.querySelector('.second_page_heading');
        const secondPageContent=document.querySelector('.second_page_content');

        // using about_me

        aboutMe.style.display="block";
        secondPageHeading.style.animation="opaque 3s 1 forwards";
        secondPageContent.style.display="block";   
        secondPageContent.style.animation="opaque 3s 1 forwards";
    }
});
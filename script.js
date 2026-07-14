const cards = document.querySelectorAll(".card");


// Search system

const searchBox = document.getElementById("search");

if(searchBox){

    searchBox.addEventListener("keyup", function(){

        let searchText = searchBox.value.toLowerCase();

        cards.forEach(card => {

            let gameName = card.querySelector("h3").textContent.toLowerCase();

            if(gameName.includes(searchText)){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

}



// Start Playing button

const button = document.querySelector(".hero button");

if(button){

    button.addEventListener("click", ()=>{

        document.querySelector(".games").scrollIntoView({
            behavior:"smooth"
        });

    });

}



// Category filtering

const categoryButtons = document.querySelectorAll(".category");


categoryButtons.forEach(button => {

    button.addEventListener("click", ()=>{

        let filter = button.dataset.filter;


        cards.forEach(card => {

            let category = card.dataset.category;


            if(filter === "all" || category === filter){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }


        });


    });


});
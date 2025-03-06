/*-------------------theme------------------------*/
const changmood = document.getElementById('change-mood');
const Theme = document.getElementById('theme');
function changemood() 
{
    switch (changmood.checked) 
    {
        case true:
            document.body.style.backgroundColor=  "#212529";
            Theme.textContent='Light';
        break;
        case false:
            document.body.style.backgroundColor= "white";
            Theme.textContent='Dark';
        break;
    }
};
/*-----------------------------change-background-------------------------------*/
// let landing=document.querySelector('.landing');
// let img=['1.png','3.png','2.png'];
// setInterval(function(){
//     let randomNumber=Math.floor(Math.random() *img.length);
//     landing.style.backgroundImage='url("image/' + img[randomNumber] +'")';
// },1000);
/*---------------------------------card--------------------------------*/
const card= {
    title: "Earrings",
    text: "Price: 200$",
    Content: function () {
        let header = document.getElementById("header");
        let Price  = document.getElementById("paragra-ph");
        header.textContent = card.title;
        Price.textContent = card.text;
    }
};
card.Content();
/*---------------------------view-paragraph--------------------------------*/
let p = document.getElementById('paragraph');
let button=document.getElementById('button')
function toggleText() {
    if (p.textContent === "") {
        p.textContent = "Discover the splendor of luxurious designs on our jewelry website, where creativity and beauty are embodied in every carefully crafted piece to suit your refined taste.";
        p.style.marginTop = '-50px';
        p.style.marginBottom = '50px';
        button.textContent="Less view"
    } else {
        p.textContent = "";
        p.style.marginTop = '0';
        p.style.marginBottom = '0';
        button.textContent="See more"
    }
};
/*---------------------------color-heart--------------------------------------*/
const icons = document.getElementsByClassName('heart-icon');
for (let i = 0; i < icons.length; i++) {
    icons[i].onclick = function () {
        if (icons[i].style.color === 'red') {
            icons[i].style.color = '';
            // icons[i].style.color = 'gray';
        } else {
            icons[i].style.color = 'red';
        }
    };
}
/*--------------------------------star-rate--------------------------------*/
const starRatings = document.getElementsByClassName('star-rating');
for (let i = 0; i < starRatings.length; i++) {
    const stars = starRatings[i].querySelectorAll('.rate-product');
    const rating = starRatings[i].querySelector('.rating-number');
    let count_rate = 0;
    for (let j = 0; j < stars.length; j++) {
        stars[j].setAttribute("data-selected", "false");
        stars[j].style.color = ""; 
    }
    for (let j = 0; j < stars.length; j++) {
        stars[j].addEventListener("mouseover", function() {
            for (let k = 0; k <= j; k++) {
                stars[k].style.color = "#fc6711";
            }
        });
        stars[j].addEventListener("mouseout", function() {
            for (let k = 0; k < stars.length; k++) {
                if (stars[k].getAttribute("data-selected") === "false") {
                    stars[k].style.color = "";
                }
            }
        });
        stars[j].addEventListener("click", function() {
            if (stars[j].getAttribute("data-selected") === "true") {
                for (let k = 0; k < stars.length; k++) {
                    stars[k].style.color = ""; 
                    stars[k].setAttribute("data-selected", "false");
                }
                count_rate = 0;
            } else {
                for (let k = 0; k < stars.length; k++) {
                    stars[k].style.color = "";
                    stars[k].setAttribute("data-selected", "false");
                }
                for (let k = 0; k <= j; k++) {
                    stars[k].style.color = "#fc6711";
                    stars[k].setAttribute("data-selected", "true");
                }
                count_rate = j + 1;
            }
            rating.textContent = `${count_rate}/5`;
        });
    }
}
/*---------------------------------------------------------------*/
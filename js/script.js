const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1

const cat = {
    complain: function(){
        console.log("Meow!")
    }
}
cat.complain();




// Question 2

const heading = document.querySelector("h3")

heading.innerHTML = "Update heading";



// question 3

heading.style.fontSize = "2rem";



// question 4

heading.classList.add("subheading");




// Question 5

const paragraphs = document.querySelectorAll("p")

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}



// question 6  tok me 15mins to figure out what i did wrong. that i had to type background-color not backgroundColor

const resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML =`<p style="background-color: yellow"> New paragraph</p>`;


// 7 Question 7

function someList(list){

    for(let i = 0; i < list.length; i++){
        console.log(list[i].name)
    }
}
someList(cats);


// question 8 Does the Div looks right? it so many. it cos of the loop right?

function createCats(cats){

    let html = "";

    for(let i = 0; i < cats.length; i++){

        let petAge = "Age Unknow"

        if(cats[i].age){
            petAge = cats[i].age
        }
        html +=`<div>
                <h5> ${cats[i].name}</h5>
                <p>Age ${cats[i].age} </p>
            </di>`;
    }
    return html
}

const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;
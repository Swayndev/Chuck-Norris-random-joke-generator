"use strict";

const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const button = document.querySelector('.button');
const quote = document.querySelector('.quote');

// create a fetchJoke function to retrieve the data from the Check Norris API
const fetchJoke = async (HTMLelement) => {
    try {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => {
        quote.innerHTML = `<img src="${json.icon_url}" alt="chuck-norris-joke" />`
        quote.innerHTML += json.value;
    });
    
    } catch (error) {
        console.log(error);
    }
};



button.addEventListener('click', fetchJoke );



    
    














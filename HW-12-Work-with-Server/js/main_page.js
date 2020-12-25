const filmList = document.querySelector('.films-list');
const personList = document.querySelector('.personage-list');
const filmSearch = document.querySelector('.search');
const filmShow = document.querySelector('.film-search');
const goPagePlanets = document.querySelector('.to-planets');

console.log(`https://swapi.dev/api/films/`);

fetch(`https://swapi.dev/api/films/`)
    .then((response) => {
        return response.json()
    })
    .then((data) => data.results.map((film, title, episode_id) =>
        filmList.innerHTML = `<li>Episode ${film?.episode_id} - "${film?.title}"</li>` + filmList.innerHTML));

const getPersonages = (number) => fetch(`https://swapi.dev/api/people`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {

        const persons = data.results.filter((person, films) =>
            person.films.includes(`http://swapi.dev/api/films/${number}/`));
        console.log(persons);

        persons.map((person, name, gender, birth_year) =>
            personList.innerHTML = `<li>Name : ${person?.name} <br>
            date of birth :  ${person?.birth_year};   
            gender :  ${person?.gender} </li>` +
            personList.innerHTML
        )

    });

let filmNumber;

filmSearch.addEventListener('input', function() {
    filmNumber = filmSearch.value;
    localStorage.setItem('number', JSON.stringify(filmNumber));
});

function showPeson() {
    getPersonages(JSON.parse(localStorage.getItem('number')));
    localStorage.removeItem('number');
}

filmShow.addEventListener('click', showPeson);

goPagePlanets.addEventListener('click', function() {
    window.location.href = 'planet.html';
});
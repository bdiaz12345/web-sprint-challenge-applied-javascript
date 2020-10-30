// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.




function articleCards({headline, authorPhoto, authorName}){
    const card = document.createElement('div');
    card.classList.add('card');
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = headline;
    card.appendChild(headlineDiv);
    const author = document.createElement('div');
    author.classList.add('author');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('img-container');
    const image = document.createElement('img');
    image.src = authorPhoto;
    imageDiv.appendChild(image);
    const span = document.createElement('span');
    span.textContent = `By ${authorName}`;
    author.appendChild(imageDiv);
    author.appendChild(span);
    card.appendChild(author);

    card.addEventListener('click', (event) => {
        console.log(headlineDiv);
    })
    return card;
}



let specificArticles = [];
axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        for (let i in res.data.articles){
            for (let x in res.data.articles[i]){
                specificArticles.push(res.data.articles[i][x])
                cardscontainer.appendChild(articleCards(res.data.articles[i][x]))
            }
        }
        
    })

const cardscontainer = document.querySelector('.cards-container');
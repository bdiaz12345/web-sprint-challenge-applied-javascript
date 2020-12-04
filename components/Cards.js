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

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        console.log(res.data.articles);
    })

const cardMaker = ({ headline, authorImg, authorName }) => {
    const card = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    imgContainer.appendChild(img);
    author.appendChild(imgContainer);
    author.appendChild(span);
    card.appendChild(headlineDiv);
    card.appendChild(author);

    card.classList.add('card');
    headlineDiv.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headlineDiv.textContent = headline;
    img.src = authorImg;
    span.textContent = `By ${authorName}`;

    card.addEventListener('click', (event) => {
        console.log(headlineDiv);
    })

    return card;
}

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        for (let i in res.data.articles) {
            const article = res.data.articles[i];
            for (let x in article) {
                const innerArticle = article[x];
                const cardsContainer = document.querySelector('.cards-container');
                const headline = innerArticle.headline;
                const authorImg = innerArticle.authorPhoto;
                const authorName = innerArticle.authorName;
                cardsContainer.appendChild(cardMaker({ headline, authorImg, authorName }))
                console.log(innerArticle);
            }
        }
    })
/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const dacarousel = () => {
  const carousel = document.createElement('div');
  const carouselImages = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountainImage = document.createElement('img');
  const computerImage = document.createElement('img');
  const treesImage = document.createElement('img');
  const turntable = document.createElement('img');
  const rightButton = document.createElement('div');
  mountainImage.src = 'https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg';
  computerImage.src = 'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg';
  treesImage.src = 'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg';
  turntable.src = 'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg';

  carousel.appendChild(carouselImages);
  carouselImages.appendChild(mountainImage);
  carouselImages.appendChild(computerImage);
  carouselImages.appendChild(treesImage);
  carouselImages.appendChild(turntable);
  carousel.appendChild(leftButton);
  carousel.appendChild(rightButton);

  carousel.classList.add('carousel');
  carouselImages.classList.add('carousel-images');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = ' < ';
  rightButton.textContent = ' > ';

  const carouselFunction = () => {
    var index = 0;
    rightButton.addEventListener('click', (event) => {
      if (index < 2){
        console.log('index before', index)
        index += 1;

        document.querySelector('.carousel-images').style.left = (-50*index) + "%";
      }
    })
    leftButton.addEventListener('click', (event) => {
      console.log('left button clicked')
      if (index > 0){
        console.log('index before', index)
        index -= 1;
        console.log('index after', index)
        carouselImages.style.left = (-50*index) + '%';
      }
    })
  }
  return (carouselFunction(), carousel);
}

const carouselDom = document.querySelector('.carousel-container');

carouselDom.appendChild(dacarousel());
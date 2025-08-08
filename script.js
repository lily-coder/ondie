const projects = [
  {
    name: 'Awesome Books App',
    shortDescription: 'Awesome books app that allows users to users to add their favorite books, and remove any and the data is stored in Local Storage.',
    description: 'This is a user friendly and efficient app that allows the user to add and delete books. it has three pages, the first one that displays books, the second where a user can add books, and the third with contact information',
    image: {
      imageUrl: './assets/awesome-books.PNG',
      imageAlt: 'screenshot of awesome books app',
    },
    technologies: ['HTML', 'JavaScript', 'CSS', 'Github'],
    liveUrl: 'https://lily-coder.github.io/Awesome-books/',
    sourceUrl: 'https://github.com/lily-coder/Awesome-books',
  },

  {
    name: 'To-do-list App',
    shortDescription: 'A to-do-list app that allows the user to add new tasks, mark completed tasks, remove completed tasks and the data stored in Local Storage.',
    description: 'This is a great user-friendly and efficient app that saves the users to-do items, and the user can check complete, delete a given task and clear completed task. They could also edit a given task',
    image: {
      imageUrl: './assets/to-do-list.PNG',
      imageAlt: 'screenshot of the to do list app',
    },
    technologies: ['Webpack', 'HTML', 'JavaScript', 'CSS', 'Github'],
    liveUrl: 'https://lily-coder.github.io/to-do-list-app/',
    sourceUrl: 'https://github.com/lily-coder/to-do-list-app',
  },

  {
    name: 'Conference Site',
    shortDescription: 'A Conference App that contains the Conference information such as details about the program line-up and the speakers',
    description: 'This site is for a conference page, showing the lined-up program, the main speakers, the contact information and more about the conference',
    image: {
      imageUrl: './assets/conference-site.PNG',
      imageAlt: 'screenshot of conference site project',
    },
    technologies: ['HTML', 'JavaScript', 'CSS', 'Github'],
    liveUrl: 'https://lily-coder.github.io/conference-site/',
    sourceUrl: 'https://github.com/lily-coder/conference-site',
  },

  {
    name: 'The Next Week Clone',
    shortDescription: 'This is a clone of The Next Week Website, which is responsive.',
    description: 'This is a responsive website of the Next Week Clone, a news website',
    image: {
      imageUrl: './assets/tnw.PNG',
      imageAlt: 'screenshot of the next week website',
    },
    technologies: ['BootStrap', 'HTML', 'CSS', 'Github'],
    liveUrl: 'https://lily-coder.github.io/the-next-web-clone/',
    sourceUrl: 'https://github.com/lily-coder/the-next-web-clone',
  },
];

function createCards(works) {
  let cardMenu = `<div class="third-section cardn">
  <img class="work1" src="${works.image.imageUrl}" alt="${works.image.imageAlt}"/>
        <div class="edits">
          <div class="multi-stories1">
            <div>${works.name}</div>
          </div>
          <div class="story-p1">
            <div>
              ${works.shortDescription}
            </div>
          </div>
          <div class="story-lang1">
      `;
  for (let i = 0; i < works.technologies.length; i += 1) {
    cardMenu += `<p class="btn tag_btn white">${works.technologies[i]}</p>`;
  }
  cardMenu += `     
      </div>
          <button class="popup-button" type="button">See Project</button>
        </div>
        <div class="ellipse-4"></div>
      </div>`;

  return cardMenu;
}

function popupModal(works) {
  let popupMenu = `<div class="popup-menu">
                  <i class="fa fa-close fa-2x" id="popup-close"></i>
                  <h4>${works.name}</h4>
                  <div class="popup-img">
                  <img src="${works.image.imageUrl}" alt="${works.image.imageAlt}"/>
                  </div>
                  <div class="popup-body white">${works.description}</div>
                  <div class="story-lang1">
                    `;
  for (let i = 0; i < works.technologies.length; i += 1) {
    popupMenu += `<p class="btn tag_btn">${works.technologies[i]}</p>`;
  }
  popupMenu += `     
                    </div>
                  <div class="popup-btn">
                  <button type="button"><a href="${works.liveUrl}" class="white"> See Live</a>
                  <img src="./assets/new.png" alt="See Live Icon" />
                  </button>
                  <button type="button" class="sourceBtn"><a href="${works.sourceUrl}"class="white" > See Source</a>
                  <img src="./assets/new-2.png" alt="See Source Icon" />
                  </button>
                  </div>
                  </div>`;

  return popupMenu;
}

const projectCard = document.querySelector('#portfolio .cards');
const modalCard = document.querySelector('#my-popup');
function insertHtml() {
  const myWorks = Object.keys(projects);
  const myWorksLength = Object.keys(projects).length;

  for (let i = 0; i < myWorksLength; i += 1) {
    projectCard.innerHTML += createCards(projects[myWorks[i]], i);
  }

  for (let j = 0; j < myWorksLength; j += 1) {
    modalCard.innerHTML += popupModal(projects[myWorks[j]], j);
  }
}

projectCard.onload = insertHtml();

const main = document.querySelector('#main');
const header = document.querySelector('.topnav');
const footer = document.querySelector('.footer');

document.querySelectorAll('.popup-button').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.popup-menu').style.display = 'flex';
    main.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';
  });
});

document.querySelectorAll('#popup-close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelector('.popup-menu').style.display = 'none';
    main.style.display = 'block';
    header.style.display = 'block';
    footer.style.display = 'block';
  });
});
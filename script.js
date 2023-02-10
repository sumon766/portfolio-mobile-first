const nav = document.querySelector('.nav');
const bars = document.querySelector('#bars');
const cross = document.querySelector('#cross');
const headerContainer = document.querySelector('.header-container');

if (window.screen.width < 769) {
  bars.addEventListener('click', () => {
    nav.style.display = 'block';
    bars.style.display = 'none';
    cross.style.display = 'block';
    headerContainer.style.position = 'fixed';
  });

  cross.addEventListener('click', () => {
    nav.style.display = 'none';
    bars.style.display = 'block';
    cross.style.display = 'none';
    headerContainer.style.position = 'static';
  });

  nav.addEventListener('click', () => {
    nav.style.display = 'none';
    bars.style.display = 'block';
    cross.style.display = 'none';
    headerContainer.style.position = 'static';
  });
}

const multiPostStories = {
  postImage: 'images/stories-image.png',
  postTitle: 'Multi-Post Stories',
  postbrief: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  tags: ['html', 'css', 'bootstrap', 'Ruby'],
  button: 'See Project',
};

const recentWorks = document.querySelector('.recent-works');

const multiPostStoriesDiv = document.createElement('div');
multiPostStoriesDiv.className = 'multi-post-stories';
recentWorks.appendChild(multiPostStoriesDiv);

const storiesImageDiv = document.createElement('div');
storiesImageDiv.className = 'stories-image';
multiPostStoriesDiv.appendChild(storiesImageDiv);

const storiesImg = document.createElement('img');
storiesImg.src = multiPostStories.postImage;
storiesImg.alt = 'multi-post stories image';
storiesImageDiv.appendChild(storiesImg);

const storiesDiv = document.createElement('div');
storiesDiv.className = 'stories';
multiPostStoriesDiv.appendChild(storiesDiv);

const postTitle = document.createElement('h5');
const postbrief = document.createElement('p');
storiesDiv.appendChild(postTitle);
storiesDiv.appendChild(postbrief);
postTitle.innerHTML = multiPostStories.postTitle;
postbrief.innerHTML = multiPostStories.postbrief;

const tagsDiv = document.createElement('div');
tagsDiv.className = 'tags';
const tagsUnorderedList = document.createElement('ul');
storiesDiv.appendChild(tagsDiv);
tagsDiv.appendChild(tagsUnorderedList);
const { tags } = multiPostStories;
/* eslint-disable-next-line no-plusplus */
for (let i = 0; i < tags.length; i++) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = '#';
  link.innerHTML = tags[i];
  tagsUnorderedList.appendChild(listItem);
  listItem.appendChild(link);
}

const detailsButton = document.createElement('a');
detailsButton.href = '#';
detailsButton.className = 'details-button';
detailsButton.id = 'multiPostDetails';
detailsButton.innerHTML = 'See Project';
storiesDiv.appendChild(detailsButton);

// Multi Post Modal creation
const multiPostModal = document.createElement('div');
multiPostModal.className = 'multiPostModal';
multiPostModal.id = 'storiesModal';
multiPostStoriesDiv.appendChild(multiPostModal);

const multiPostModalContent = document.createElement('div');
multiPostModalContent.className = 'modal-content';
multiPostModal.appendChild(multiPostModalContent);

const multiPostModalClose = document.createElement('i');
multiPostModalClose.classList = ['multi-post-modal-close'];
multiPostModalClose.innerHTML = '&times';
multiPostModalClose.id = 'multiPostModalClose';
multiPostModalContent.appendChild(multiPostModalClose);

const multiPostModalTitle = document.createElement('h2');
multiPostModalTitle.innerHTML = multiPostStories.postTitle;
multiPostModalContent.appendChild(multiPostModalTitle);

const multiPostModalTagsDiv = document.createElement('div');
multiPostModalTagsDiv.className = 'multiPostModalTags';
multiPostModalContent.appendChild(multiPostModalTagsDiv);

const multiPostModalUnorderedList = document.createElement('ul');
multiPostModalTagsDiv.appendChild(multiPostModalUnorderedList);

const modalTags = multiPostStories.tags;
/* eslint-disable-next-line no-plusplus */
for (let i = 0; i < modalTags.length; i++) {
  const modalListItem = document.createElement('li');
  const modalLink = document.createElement('a');
  modalLink.href = '#';
  modalLink.innerHTML = tags[i];
  multiPostModalUnorderedList.appendChild(modalListItem);
  modalListItem.appendChild(modalLink);
}

const multiPostModalImageContainer = document.createElement('div');
multiPostModalImageContainer.className = 'multi-post-modal-image-container';
multiPostModalContent.appendChild(multiPostModalImageContainer);
const multiPostModalImage = document.createElement('img');
multiPostModalImage.src = multiPostStories.postImage;
multiPostModalImageContainer.appendChild(multiPostModalImage);
const multiPostModalText = document.createElement('p');
multiPostModalText.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
multiPostModalImageContainer.appendChild(multiPostModalText);
const multiPostModalSeeLive = document.createElement('a');
multiPostModalSeeLive.href = window.location.href;
multiPostModalSeeLive.className = 'see-live-button';
multiPostModalSeeLive.innerHTML = "See Live <i class = 'fa fa-external-link'></i>";
multiPostModalImageContainer.appendChild(multiPostModalSeeLive);
const multiPostModalSeeSource = document.createElement('a');
multiPostModalSeeSource.className = 'see-source-button';
multiPostModalSeeSource.href = 'https://github.com/sumon766/portfolio-mobile-first';
multiPostModalSeeSource.innerHTML = "See Source <i class = 'fa fa-github'></i>";
multiPostModalImageContainer.appendChild(multiPostModalSeeSource);

// Multi Post Modal open
const modalButton = document.getElementById('multiPostDetails');
const multiPostModalForButton = document.getElementById('storiesModal');
const bodyTag = document.getElementsByTagName('BODY')[0];
modalButton.onclick = function () {
  multiPostModalForButton.style.display = 'block';
  bodyTag.style.overflow = 'hidden';
  bodyTag.style.background = 'rgba(0,0,0,0.7)';

  const overLay = document.createElement('div');
  overLay.id = 'overlay';
  bodyTag.appendChild(overLay);
};

// Multi Post Modal Close
const closeButton = document.getElementById('multiPostModalClose');
closeButton.onclick = function () {
  multiPostModalForButton.style.display = 'none';
  bodyTag.style.overflow = 'scroll';
  bodyTag.style.background = '#fff';

  bodyTag.removeChild(document.getElementById('overlay'));
};

const cardsContainer = document.createElement('div');
cardsContainer.className = 'cards-container';
recentWorks.appendChild(cardsContainer);

/* eslint-disable-next-line no-plusplus */
for (let i = 0; i < 6; i++) {
  const project1 = {
    postTitle: 'Professional Art Printing Data',
    postBrief: "A daily selection of privately personalized reads; no accounts of sign-ups required. has been the industry's standard",
    tags: ['html', 'bootstrap', 'Ruby'],
    button: 'See Project',
  };
  const cardArea = document.createElement('div');
  cardArea.className = 'card-area';
  cardsContainer.appendChild(cardArea);
  const card = document.createElement('div');
  card.classList = ['card card1'];
  cardArea.appendChild(card);
  const project1Title = document.createElement('h6');
  const project1Brief = document.createElement('p');
  project1Title.innerHTML = project1.postTitle;
  project1Brief.innerHTML = project1.postBrief;
  card.appendChild(project1Title);
  card.appendChild(project1Brief);
  const cardTagsDiv = document.createElement('div');
  cardTagsDiv.className = 'card-tags';
  card.appendChild(cardTagsDiv);
  const cardTagsUnorderedList = document.createElement('ul');
  cardTagsDiv.appendChild(cardTagsUnorderedList);
  const project1Tags = project1.tags;
  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < project1Tags.length; i++) {
    const project1TagsList = document.createElement('li');
    const project1link = document.createElement('a');
    project1link.href = '#';
    project1link.innerHTML = project1Tags[i];
    project1TagsList.appendChild(project1link);
    cardTagsUnorderedList.appendChild(project1TagsList);
  }
  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'details';
  const detailsID = `projectDetails${i}`;
  detailsDiv.innerHTML = `<a href='#' id='${detailsID}'>See Project</a>`;
  cardArea.appendChild(detailsDiv);
  // Project Modal Creation
  const projectModal = document.createElement('div');
  projectModal.className = 'project-modal';
  const id = `projectModal${i}`;
  projectModal.id = id;
  cardArea.appendChild(projectModal);
  const projectModalContent = document.createElement('div');
  projectModalContent.className = 'project-modal-content';
  projectModal.appendChild(projectModalContent);
  const projectModalTitleCloseDiv = document.createElement('div');
  projectModalTitleCloseDiv.className = 'title-and-close';
  projectModalContent.appendChild(projectModalTitleCloseDiv);
  const projectModalTitle = document.createElement('h2');
  projectModalTitle.innerHTML = project1.postTitle;
  projectModalTitleCloseDiv.appendChild(projectModalTitle);
  const projectModalClose = document.createElement('i');
  projectModalClose.classList = ['project-modal-close'];
  projectModalClose.innerHTML = '&times';
  const closeID = `projectModalClose${i}`;
  projectModalClose.id = closeID;
  projectModalTitleCloseDiv.appendChild(projectModalClose);
  const projectModalTagsDiv = document.createElement('div');
  projectModalTagsDiv.className = 'projectModalTags';
  projectModalContent.appendChild(projectModalTagsDiv);
  const projectModalUnorderedList = document.createElement('ul');
  projectModalTagsDiv.appendChild(projectModalUnorderedList);
  const projectModalTags = project1.tags;
  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < projectModalTags.length; i++) {
    const projectModalListItem = document.createElement('li');
    const projectModalLink = document.createElement('a');
    projectModalLink.href = '#';
    projectModalLink.innerHTML = projectModalTags[i];
    projectModalUnorderedList.appendChild(projectModalListItem);
    projectModalListItem.appendChild(projectModalLink);
  }
  const projectModalImageContainer = document.createElement('div');
  projectModalContent.appendChild(projectModalImageContainer);
  projectModalImageContainer.className = 'project-modal-image-container';
  const projectModalImage = document.createElement('img');
  projectModalImage.src = 'images/snapshot-portfolio.png';
  projectModalImageContainer.appendChild(projectModalImage);
  const projectModalTextcontainer = document.createElement('div');
  projectModalImageContainer.appendChild(projectModalTextcontainer);
  const projectModalText = document.createElement('p');
  projectModalText.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  projectModalTextcontainer.appendChild(projectModalText);
  const projectModalSeeLive = document.createElement('a');
  projectModalSeeLive.href = window.location.href;
  projectModalSeeLive.className = 'see-live-button';
  projectModalSeeLive.innerHTML = "See Live <i class = 'fa fa-external-link'></i>";
  projectModalTextcontainer.appendChild(projectModalSeeLive);
  const projectModalSeeSource = document.createElement('a');
  projectModalSeeSource.className = 'see-source-button';
  projectModalSeeSource.href = 'https://github.com/sumon766/portfolio-mobile-first';
  projectModalSeeSource.innerHTML = "See Source <i class = 'fa fa-github'></i>";
  projectModalTextcontainer.appendChild(projectModalSeeSource);
  // Project Modal open
  const projectModalButton = document.getElementById(`projectDetails${i}`);
  const projectModalForButton = document.getElementById(`projectModal${i}`);
  const bodyTag = document.getElementsByTagName('BODY')[0];
  projectModalButton.onclick = function () {
    projectModalForButton.style.display = 'block';
    bodyTag.style.overflow = 'hidden';
    bodyTag.style.background = 'rgba(0,0,0,0.7)';

    const overLay = document.createElement('div');
    overLay.id = 'overlay';
    bodyTag.appendChild(overLay);
  };
  // Project Modal Close
  const projectCloseButton = document.getElementById(`projectModalClose${i}`);
  projectCloseButton.onclick = function () {
    projectModalForButton.style.display = 'none';
    bodyTag.style.overflow = 'scroll';
    bodyTag.style.background = '#fff';

    bodyTag.removeChild(document.getElementById('overlay'));
  };
}

// Form Validation
const form = document.getElementById('form');
const email = document.getElementById('emailAddress');

form.addEventListener('submit', (event) => {
  const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (emailRegex.test(email.value)) {
    form.submit();
  } else {
    event.preventDefault();
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = 'Please enter email in lowercase letters';
  }
});

// Save form data
/* eslint-disable no-unused-vars */
form.addEventListener('submit', (event) => {
  const saveFormData = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('emailAddress').value,
    desktopMessage: document.getElementById('large').value,
    mobileMessage: document.getElementById('small').value,
  };

  localStorage.setItem('saveFormData', JSON.stringify(saveFormData));
});

// Retrieve form data
const retrievedFormData = localStorage.getItem('saveFormData');
const parsedFormData = JSON.parse(retrievedFormData);

// Pre-fill form data
if (parsedFormData) {
  const fullName = document.getElementById('fullName');
  fullName.value = parsedFormData.fullName;
  const email = document.getElementById('emailAddress');
  email.value = parsedFormData.email;
  const desktopMessage = document.getElementById('large');
  desktopMessage.value = parsedFormData.desktopMessage;
  const mobileMessage = document.getElementById('small');
  mobileMessage.value = parsedFormData.mobileMessage;
}
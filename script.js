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
multiPostModalClose.classList = ['fa fa-times multi-post-modal-close'];
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
};

// Multi Post Modal Close
const closeButton = document.getElementById('multiPostModalClose');
closeButton.onclick = function () {
  multiPostModalForButton.style.display = 'none';
  bodyTag.style.overflow = 'scroll';
  bodyTag.style.background = '#fff';
};

const cardsContainer = document.createElement('div');
cardsContainer.className = 'cards-container';
recentWorks.appendChild(cardsContainer);

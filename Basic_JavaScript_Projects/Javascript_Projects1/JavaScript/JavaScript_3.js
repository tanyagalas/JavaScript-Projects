// get the h1 element
const title = document.getElementById('title');

// get the value of the data-custom attribute
const customValue = title.getAttribute('data-custom');

// change the content of the h1 element based on the value of the data-custom attribute
if (customValue === 'original') {
  title.innerHTML = 'Welcome to my <em>amazing</em> website';
} else if (customValue === 'new') {
  title.innerHTML = 'Check out my <em>new</em> website';
}
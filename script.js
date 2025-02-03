document.getElementById('clickBtn').addEventListener('click', function() {
    document.querySelector('#mouseoverImage img').src = 'https://unsplash.com/photos/brown-tabby-cat-on-white-stairs-mJaD10XeD7w';
    customFunction();
});

document.getElementById('mouseoverImage').addEventListener('mouseover', function() {
    alert('You are hovering over the image titled: "Pet"');
});

function customFunction() {
    console.log('Changed the picture');
}
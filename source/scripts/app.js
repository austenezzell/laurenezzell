/**
  app.js

  This is the main point of entry for your app's scripts.
  Uno comes with Babel, so you can start using ES2015 features.

  It is recommended that you install "eslint" and "prettier" extensions
  in your favorite text editor to maintain code style and consistancy.

  You can add dependencies from npm:
    $ yarn add jquery

  Then, at the top of this file, import it:
    import $ from 'jquery'

  Now you can use $(). Import any module from npm, or import your own (try it below).
**/

const textBubble = document.querySelectorAll('.text-bubble');
const title = document.querySelectorAll('.title');

// accordions
for (var i = 0; i < title.length; i++) {
  title[i].addEventListener('click', (e) => {
    e.preventDefault();
    e.target.parentNode.classList.contains('active') ?
    e.target.parentNode.classList.remove('active') : e.target.parentNode.classList.add('active');
  });
}

// text message intro
setTimeout( () => {
  document.querySelector('.first-text').classList.add('sent');
}, 1000);

setTimeout( () => {
  document.querySelector('.second-text').classList.add('sent');
}, 3000);


// URL Parameter to variable
const getParameterByName = (name, url) => {
  if (!url) {
    const currentURL = window.location.href;
    const target = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${target}(=([^&#]*)|&|#|$)`),
      results = regex.exec(currentURL);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  return null;
};

const customIntro = document.querySelector('.custom-intro');
const target = getParameterByName('to');
if (target) {
  customIntro.innerHTML = `Hi, ${target}`;
}

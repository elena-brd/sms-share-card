const phoneField = document.getElementById('phone');
const formInput = document.getElementById('form-input');


const phoneInput = window.intlTelInput(phoneField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


const cardClose = document.querySelector('.card-close');
const copyLinkField = document.querySelector('.copy-link')


function closeCardContainer() {
    const container = document.querySelector('.container');
    container.textContent = 'See you later!';
}

function copyText() {
    const linkText = document.querySelector('.link-text');
    linkText.textContent = 'Link Copied';
}


cardClose.addEventListener('click', closeCardContainer);
copyLinkField.addEventListener('click', copyText);









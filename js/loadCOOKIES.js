//SET CONSTANTS

const HTML = document.querySelector("html")

// LOAD WEB THEME

const cookieValue = document.cookie.split('; ').find(row => row.startsWith('theme='))?.split('=')[1] || null;

if (cookieValue) {
    HTML.setAttribute('theme', cookieValue);
}

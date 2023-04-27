//SET CONSTANTS

const HTML = document.querySelector("html")

// LOAD WEB THEME

const themeCOOKIE = document.cookie.split('; ').find(row => row.startsWith('theme='))?.split('=')[1] || null;

if (themeCOOKIE) {
    HTML.setAttribute('theme', themeCOOKIE);
} else {
    HTML.setAttribute("theme", dark)
}

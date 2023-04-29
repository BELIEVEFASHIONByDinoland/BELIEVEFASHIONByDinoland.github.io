function switchtheme() {
    const HTML = document.querySelector("html");
    var themeValue = HTML.getAttribute("theme");
    
    if (themeValue == "dark") {
        HTML.setAttribute("theme", "light");
        document.cookie = "theme=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    } else if (themeValue == "light") {
        HTML.setAttribute("theme", "dark");
        document.cookie = "theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }
}
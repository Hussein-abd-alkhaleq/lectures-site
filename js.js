async function load_HTML_item(id, file) {
    document.getElementById(id).innerHTML = await (await fetch(file)).text();
}




function show_menu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("show");
};

window.onclick = function (event) {
    let menu = document.getElementById("menu");
    let btn = document.getElementById("menuBtn");
    if (event.target !== btn && !menu.contains(event.target)) {
        menu.classList.remove("show")
    }
}


let click = document.getElementById("menuBox");

function show_hide() {
    click = document.getElementById("menuBox");
    
    if(click.style.display === "") {
        click.style.display = "none";
        console.log(click.style.display);
    }

    if (click.style.display === "none") {
        click.style.display = "flex";
    } else {      
        click.style.display = "none";
    }

    console.log(click.style.display);
 }

function show(x) {
    if (x.matches) {
        click.style.display = "flex";
        console.log("grande");
    } else {
        console.log("pequeño");
        click.style.display = "none";
    }
}

var x = window.matchMedia("(min-width: 480px)")

show(x);

x.addEventListener("change", function() {   show(x);    });
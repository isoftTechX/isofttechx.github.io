// var script = document.createElement('script');
// script.src = 'https://raw.githubusercontent.com/buzzfeed/libgif-js/master/libgif.js';
// document.getElementsByTagName('head')[0].appendChild(script);
function redirect() {
    window.setTimeout(function() {
        var dialog = document.getElementById("dialog-text")
        dialog.innerHTML = "Hooray! I'm back online! Thank you for fixing me. Let's explore the right path together now."
    }, 6700)
    window.setTimeout(function () {
        window.location = "../index.html";
    }, 12000);
}

function animateGif() {
    var gif = document.getElementById("gif")
    gif.src = "./static/img/robot/reboot_robot.gif"
    gif.setAttribute('onload', 'redirect();');
}

window.addEventListener('load', function () {

    const searchIcon = document.querySelector('.search-icon');
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search-bar');
    var search = "False";

    searchIcon.addEventListener('click', function () {
        searchBar.focus();
        searchIcon.style.visibility = "hidden";
        searchButton.style.visibility = "visible";
        search = "True";
    });

    searchButton.addEventListener('click', function () {
        if (searchBar.value !== "" && search === "True") {
            console.log("Searching...", searchBar.value);
            // searchBar.focus();
            searchBar.style.width = "200px"
        }
        else {
            searchIcon.style.visibility = "visible";
            searchButton.style.visibility = "hidden";
            searchBar.blur();
            // searchBar.style.width = "0px"
            search = "False";
        }
    });


    const btnEl = document.querySelector('.btn')
    const toggleOptions = () => {
        const wrapperEl = document.querySelector('.wrapper')
        const iconEl = btnEl.querySelector('i')

        wrapperEl.classList.toggle('active')

        if (iconEl.classList.contains('ri-share-line')) {
            iconEl.classList.replace('ri-share-line', 'ri-close-line')
        } else {
            iconEl.classList.replace('ri-close-line', 'ri-share-line')
        }
    }
    btnEl.addEventListener('click', toggleOptions)


    const sections = document.querySelectorAll('.animate');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate--active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });


    // var element = document.getElementById("gif");
    // var supergif = new SuperGif({
    //     gif: element,
    //     progressbar_height: 0,
    //     auto_play: false,
    // });


    const myGIF = document.getElementById("gif");

    myGIF.addEventListener("load", function () {
        console.log("GIF animation completed.");
    });

})


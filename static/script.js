var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function changeText(element, num) {
    var span = element.querySelector('span');
    var text = span.innerHTML;
    let timeoutId;

    if (num === 1) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br>Developing customized software applications tailored to meet the unique needs of your clients."
        }, 400);
    }
    if (num === 2) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br>Designing and building web-based applications to provide clients with the ability to manage their businesses online."
        }, 400);
    }
    if (num === 3) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br>Integrating software systems and applications to enhance the overall efficiency of your client's business operations."
        }, 400);
    }
    if (num === 4) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br>Offering ongoing maintenance and support services to ensure the continued optimal performance of the software you develop."
        }, 400);
    }
    if (num === 5) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br>Designing intuitive and visually appealing user interfaces that enhance the user experience and increase engagement."
        }, 400);
    }
    element.onmouseout = function () {
        clearTimeout(timeoutId);
        span.innerHTML = text;
    }
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


    var text = "Code Your Vision";
    var i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

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

})


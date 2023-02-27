// var script = document.createElement('script');
// script.src = '//code.jquery.com/jquery-1.11.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);
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
})


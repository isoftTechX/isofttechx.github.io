// var script = document.createElement('script');
// script.src = '//code.jquery.com/jquery-1.11.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);

function toggleDetails(elm) {
    var element = document.getElementById(elm);
    var hidden_text = element.querySelector(".hidden-text-body");
    var element_text = element.querySelector(".text-body");
    var button = element.querySelector(".toggleDetails-button");
    var button_text = button.querySelector(".text");
    var button_svg = button.querySelector(".arrow");
    
    if (button_text.textContent.trim() === "Show the details") {
        // globalText(element_text.textContent);
        // element_text.innerHTML = hidden_text.innerHTML;
        hidden_text.style.display = "block";
        element_text.style.display = "none"
        element.style.height = "auto";
        element.style.alignItems = "initial"
        button_text.innerText = "Hide the details";
        button_svg.style.transform = "translateY(-50%) rotate(-90deg)";
    }
    
    else {
        // element_text.innerHTML = text;
        hidden_text.style.display = "none";
        element_text.style.display = "block";
        element.style.height = "auto";
        element.style.alignItems = "center"
        button_text.innerText = "Show the details";
        button_svg.style.transform = "translateY(-50%) rotate(-270deg)";
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


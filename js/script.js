let scrollButton = document.getElementById("scrollButton");

window.onscroll = function() {showButton()};

function showButton() {
    if (document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

const allPages = [document.getElementById("pageOne"), document.getElementById("pageTwo"), document.getElementById("pageThree"), document.getElementById("pageFour")];

function changePages(pageNumber) {
    if (window.getComputedStyle(allPages[pageNumber]).display === "none") {
        for (let i = 0; i < allPages.length; i++) {
            allPages[i].style.display = "none";          
        }
        allPages[pageNumber].style.display = "block";
    }
}




let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("hobbies__details");

function opentab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

//side menu for tablet view
let sideMenu = document.getElementById("side-menu")

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}


// hiding and displaying project links


const buttons = document.querySelectorAll('.btn');
const removeIcons = document.querySelectorAll('.fa-circle-xmark');
const links = document.querySelectorAll('.project__link ');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        links[index].style.display = 'block';
        removeIcons[index].style.display = 'block';
    });
});

removeIcons.forEach((remove, index) => {
    remove.addEventListener('click', () => {
        links[index].style.display = 'none';
        remove.style.display = 'none';
    });
});


//hiding projects
const moreButtons = document.querySelectorAll('.more');
const lessButtons = document.querySelectorAll('.less');
const hiddenProjects = document.querySelectorAll('.hide');

moreButtons.forEach((more, index) => {
    more.addEventListener('click', () => {
        hiddenProjects.forEach((project) => {
            project.style.display = 'block';
        });
        lessButtons.forEach((less) => {
            less.style.display = 'block';
        });
        more.style.display = 'none';
    });
});

lessButtons.forEach((less, index) => {
    less.addEventListener('click', () => {
        hiddenProjects.forEach((project) => {
            project.style.display = 'none';
        });
        lessButtons.forEach((less) => {
            less.style.display = 'none';
        });
        moreButtons.forEach((more) => {
            more.style.display = 'block';
        });
    });
});



const moreButtons2 = document.querySelectorAll('.more2');
const lessButtons2 = document.querySelectorAll('.less2');
const hiddenProjects2 = document.querySelectorAll('.hide2');

moreButtons2.forEach((more, index) => {
    more.addEventListener('click', () => {
        hiddenProjects2.forEach((project) => {
            project.style.display = 'block';
        });
        lessButtons2.forEach((less) => {
            less.style.display = 'block';
        });
        more.style.display = 'none';
    });
});

lessButtons2.forEach((less, index) => {
    less.addEventListener('click', () => {
        hiddenProjects2.forEach((project) => {
            project.style.display = 'none';
        });
        lessButtons2.forEach((less) => {
            less.style.display = 'none';
        });
        moreButtons2.forEach((more) => {
            more.style.display = 'block';
        });
    });
});

const moreButtons3 = document.querySelectorAll('.more3');
const lessButtons3 = document.querySelectorAll('.less3');
const hiddenProjects3 = document.querySelectorAll('.hide3');

moreButtons3.forEach((more, index) => {
    more.addEventListener('click', () => {
        hiddenProjects3.forEach((project) => {
            project.style.display = 'block';
        });
        lessButtons3.forEach((less) => {
            less.style.display = 'block';
        });
        more.style.display = 'none';
    });
});

lessButtons3.forEach((less, index) => {
    less.addEventListener('click', () => {
        hiddenProjects3.forEach((project) => {
            project.style.display = 'none';
        });
        lessButtons3.forEach((less) => {
            less.style.display = 'none';
        });
        moreButtons3.forEach((more) => {
            more.style.display = 'block';
        });
    });
});

const moreButtons4 = document.querySelectorAll('.more4');
const lessButtons4 = document.querySelectorAll('.less4');
const hiddenProjects4 = document.querySelectorAll('.hide4');

moreButtons4.forEach((more, index) => {
    more.addEventListener('click', () => {
        hiddenProjects4.forEach((project) => {
            project.style.display = 'block';
        });
        lessButtons4.forEach((less) => {
            less.style.display = 'block';
        });
        more.style.display = 'none';
    });
});

lessButtons4.forEach((less, index) => {
    less.addEventListener('click', () => {
        hiddenProjects4.forEach((project) => {
            project.style.display = 'none';
        });
        lessButtons4.forEach((less) => {
            less.style.display = 'none';
        });
        moreButtons4.forEach((more) => {
            more.style.display = 'block';
        });
    });
});
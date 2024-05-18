let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
    // wrap back around to first project if clicking forward from the last project
    if (num > project.length) {
        slideIndex = 1;
    }

    // wrap back around to the last project if clicking backward from the first project
    if (num < 1) {
        slideIndex = project.length;
    }

    // only display the current project (hide the others)
    for (let i = 0; i < project.length; i++) {
        project[i].style.display = "none";
    }
    project[slideIndex-1].style.display = "flex";
}

function navigateProject(num) {
    // change the slide index based on back or forward arrow
    slideIndex += num;
    showProject(slideIndex);
}
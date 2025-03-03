function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Close the side-nav when clicking outside of it
window.addEventListener('click', function (event) {
    const sideNav = document.getElementById('sideNav');
    const main = document.getElementById('main');
    if (event.target !== sideNav && !sideNav.contains(event.target) && event.target.className !== 'navbar-toggler-icon') {
        sideNav.style.width = '0';
        main.style.marginLeft = '0';
    }
});
function toggle(btn) {
    btn.classList.toggle("change");

    var wrapperClasses = document
        .getElementById("wrapper")
        .classList;

    wrapperClasses.toggle('move-left');

    document.getElementsById('right-menu')
        .classList.add('fixed');
}
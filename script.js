document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const colors = ['#1e6759', '#2a796c', '#154f40', '#1e6f5d', '#2a9d8f', '#4a9d8f']; 
    const background = document.querySelector('.background');

    function changeBackgroundColor() {
        let scrollY = window.pageYOffset;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                background.style.backgroundColor = colors[index];
            }
        });
    }

    window.addEventListener('scroll', changeBackgroundColor);
    changeBackgroundColor(); 
});

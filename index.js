document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM is ready!')
    const progressBar = document.getElementById('progress-bar')
    const content = document.getElementById('content')


    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = content.clientHeight;


        //calculate the scroll progress percentage
        const scrollProgress = (scrollPosition / (fullHeight - windowHeight)) * 100;

        //update the scroll progress percentage
        progressBar.style.width = `${scrollProgress}%`

    });
})

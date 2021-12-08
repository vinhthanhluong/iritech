export default function ParallaxModule() {
    //parallax 2
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        var width = $(window).width();
        if (width >= 1200) {
            this.querySelectorAll('.parallax').forEach(layer => {
                const speed = layer.getAttribute('data-speed')

                const x = (window.innerWidth - e.pageX * speed) / 100
                const y = (window.innerHeight - e.pageY * speed) / 100

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
    }

}
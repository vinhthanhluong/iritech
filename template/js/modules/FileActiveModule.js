export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    if ($('.support-detail').length) {
        $('.support-tt').on('click', function () {
            $(this).parent().toggleClass('active');
            $(this).next().slideToggle();
        });
        
    }
}
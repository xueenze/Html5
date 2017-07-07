$(".num").each(function(index) {
    var _num = $(this);
    var num_arr = [9, 8, 7];
    setTimeout(function() {
        _num.animate({
            backgroundPositionY: (2.27 * 40 - (2.27 * num_arr[index])) + 'rem'
        }, {
            duration: 2000 + index * 3000,
            easing: "easeOutCubic"
        });
    }, index * 300);
});
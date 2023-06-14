
function refreshAds(type) {
    if(type == 'init') {
        refreshAds('recommend');
        setTimeout(function() {
            refreshAds('sidebar');
        },200);
    } else {
        setTimeout(function() {
            if(type == 'recommend') {
                if($('#recommend-ads > ins').children().length > 0) {
                    $('#recommend-ads > ins').children().remove();
                    $('#recommend-ads > ins').removeAttr('data-adsbygoogle-status');
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    refreshAds('recommend');
                }
            } else if(type == 'sidebar') {
                if($('.sidebar .revenue_unit_wrap .adsbygoogle').length > 0) {
                    $('.sidebar .revenue_unit_wrap .adsbygoogle').children().remove();
                    $('.sidebar .revenue_unit_wrap .adsbygoogle').removeAttr('data-adsbygoogle-status');
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    refreshAds('sidebar');
                }
            }
        }, 30000*(Math.random()*2+1));
    }
}

$(document).ready(function() {
    refreshAds('init');
});


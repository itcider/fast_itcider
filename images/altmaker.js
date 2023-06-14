function updateTagsAttr() {
    var $titleList = $('.inner_header h1, .article_view h2, h3, h4');
    var titleListLength = $titleList.length; 
    var $h1title = $('.inner_header h1');
    var $images = $('.article_view').find('img');
    var cnt = 0;
    var limitCnt = 0;
    var title, title1, title2, title3, title4;
    title1 = $h1title.text();
    $images.each(function(idx, img) {
        var $img = $(img);
        if(!$img.attr('alt') || !$img.attr('title')) {
            var checkFlag = false;
            while(!checkFlag){
                if(cnt <= titleListLength) {
                    if(cnt === titleListLength || ($titleList.eq(cnt).offset().top < $img.offset().top && $titleList.eq(cnt+1).offset().top > $img.offset().top)) {
                        if($titleList.eq(cnt).prop('tagName') === 'H1') {
                            title = title1;
                        } else if($titleList.eq(cnt).prop('tagName') === 'H2') {
                            title = title1 + ' - ' + title2;
                        } else if($titleList.eq(cnt).prop('tagName') === 'H3') {
                            title = title1 + ' - ' + title2 + ' - ' + title3;
                        } else if($titleList.eq(cnt).prop('tagName') === 'H4') {
                            title = title1 + ' - ' + title2 + ' - ' + title3 + ' - ' + title4;
                        }
                        
                        if(!$img.attr('alt')) {
                            $img.attr('alt', title);
                        }
                        if(!$img.attr('title')) {
                            $img.attr('title', title);
                        }
                        checkFlag = true;
                    } else {
                        cnt++;
                        if($titleList.eq(cnt).prop('tagName') === 'H2') {
                            title2 = $titleList.eq(cnt).text();
                        } else if($titleList.eq(cnt).prop('tagName') === 'H3') {
                            title3 = $titleList.eq(cnt).text();
                        } else if($titleList.eq(cnt).prop('tagName') === 'H4') {
                            title4 = $titleList.eq(cnt).text();
                        }
                        checkFlag = false;
                    }
                }
                limitCnt++;
                if(limitCnt > 100) {
                    break;
                }
            }
        }
    });
}

$(document).ready(function() {
    updateTagsAttr();
});
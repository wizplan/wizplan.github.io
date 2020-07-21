/* jshint asi:true */
// 사진이 로드될 때까지 기다립니다
// 레이아웃 기능을 다시 실행

/**
 * 메인 기능 실행
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

    /**
     * 콘텐츠 JSON
     */
    var demoContent = [{
        demo_link: 'https://github.com/wizplan/blockchain_book',
        img_link: 'https://raw.githubusercontent.com/wizplan/blockchain_book/master/cover.jpg',
        code_link: 'https://github.com/wizplan/blockchain_book',
        title: '한빛미디어 『처음 배우는 블록체인』',
        core_tech: 'Solidity',
        description: '한빛미디어 『처음 배우는 블록체인』의 깃허브 저장소.  '
    },{
        demo_link: 'https://github.com/wizplan/dl_math_book',
        img_link: 'https://raw.githubusercontent.com/wizplan/dl_math_book/master/readme/img/cover.jpg',
        code_link: 'https://github.com/wizplan/dl_math_book',
        title: '루비페이퍼 『이토록 쉬운 딥러닝을 위한 기초 수학 with 파이썬』',
        core_tech: 'Python',
        description: '루비페이퍼 『이토록 쉬운 딥러닝을 위한 기초 수학 with 파이썬』의 지원 페이지입니다.   '
    }];

    contentInit(demoContent) // 콘텐츠 초기화
    waitImgsLoad() // 이미지가 로드될 때까지 기다렸다가 레이아웃 초기화를 수행하십시오
}());



/**
 * 콘텐츠 초기화
 * @return {[type]} [description]
 */
function contentInit(content) {
    var htmlArr = [];
    for (var i = 0; i < content.length; i++) {
        htmlArr.push('<div class="grid-item">')
        htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
        htmlArr.push('<img src="'+content[i].img_link+'">')
        htmlArr.push('</a>')
        htmlArr.push('<h3 class="demo-title">')
        htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
        htmlArr.push('</h3>')
        htmlArr.push('<p>주요 기술: '+content[i].core_tech+'</p>')
        htmlArr.push('<p>'+content[i].description)
        htmlArr.push('<br><a href="'+content[i].code_link+'"> 소스 코드 <i class="fa fa-code" aria-hidden="true"></i></a>')
        htmlArr.push('</p>')
        htmlArr.push('</div>')
    }
    var htmlStr = htmlArr.join('')
    var grid = document.querySelector('.grid')
    grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 이미지가 로드될 때까지 기다립니다
 * @return {[type]} [description]
 */
function waitImgsLoad() {
    var imgs = document.querySelectorAll('.grid img')
    var totalImgs = imgs.length
    var count = 0
    //console.log(imgs)
    for (var i = 0; i < totalImgs; i++) {
        if (imgs[i].complete) {
            //console.log('complete');
            count++
        } else {
            imgs[i].onload = function() {
                // alert('onload')
                count++
                //console.log('onload' + count)
                if (count == totalImgs) {
                    //console.log('onload---bbbbbbbb')
                    initGrid()
                }
            }
        }
    }
    if (count == totalImgs) {
        //console.log('---bbbbbbbb')
        initGrid()
    }
}

/**
 * 그리드 레이아웃 초기화
 * @return {[type]} [description]
 */
function initGrid() {
    var msnry = new Masonry('.grid', {
        // options
        itemSelector: '.grid-item',
        columnWidth: 250,
        isFitWidth: true,
        gutter: 20,
    })
}

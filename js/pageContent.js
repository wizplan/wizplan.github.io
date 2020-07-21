/* jshint asi:true */

/**
 * [fixSidebar description]
 * 휠이 특정 위치로 움직이면 sidebar-Wrap에 fixed 스타일을 추가하십시오
 * 그렇지 않으면 스타일을 주석처리하세요
 */
(function() {
    if (window.innerWidth > 770) {

        var sidebarWrap = document.querySelector('.right>.wrap')

        // fix 백분율 너비는 유효하지 않습니다. 여기서 js를 사용하여 너비를 지정합니다.
        sidebarWrap.style.width = sidebarWrap.offsetWidth + "px"
        window.onscroll = function() {

            // 페이지 상단으로 스크롤
            var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)


            // 페이지 하단으로 스크롤
            var htmlHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
                // console.log(htmlHeight);
            var scrollBottom = htmlHeight - window.innerHeight - scrollTop

            if (scrollTop < 53) {
                sidebarWrap.classList.remove('fixed')
                sidebarWrap.classList.remove('scroll-bottom')
            } else if (scrollBottom >= (190 - 38)) {
                sidebarWrap.classList.remove('scroll-bottom')
                sidebarWrap.classList.add('fixed')
            } else if (isMaxHeight()) { // content가 maxHeight에 도달
                sidebarWrap.classList.remove('fixed')
                sidebarWrap.classList.add('scroll-bottom')
            }
        }
        setContentMaxHeightInPC() // 디렉터리의 최대 높이 설정(PC쪽)
    }
    moveTOC() // Content 전송
}());

/**
 * 디렉터리의 최대 높이 설정
 */
function setContentMaxHeightInPC() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 77 - 60
    contentUl.style.maxHeight = contentMaxHeight + 'px'
}

/**
 * 최대 높이에 도달
 * @return {Boolean} [description]
 */
function isMaxHeight() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 77 - 60
    var contentHeight = contentUl.offsetHeight
    return contentMaxHeight === contentHeight
        // console.log(contentMaxHeight);
        // console.log(contentHeight);
}


//-------------mobile--------------
/**
 * 화면 너비가 770px보다 작 으면 앵커 버튼을 클릭하여 디렉터리 상자를 팝업
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {
    if (window.innerWidth <= 770) {
        var anchorBtn = document.querySelector('.anchor')
        var rightDiv = document.querySelector('.right')

        /**
         * 앵커 버튼 모니터
         */
        anchorBtn.onclick = function(e) {
            e.stopPropagation()
            rightDiv.classList.add('right-show')
            anchorBtn.classList.add('anchor-hide')
        }

        // body 모니터링，body 클릭，Content 숨기기
        document.querySelector('body').addEventListener('click', function() {
            rightDiv.classList.remove('right-show')
            anchorBtn.classList.remove('anchor-hide')
        })

        ancherPostion(anchorBtn, rightDiv) // 디렉토리 앵커의 고정 위치
        setContentMaxHeight() // 디렉토리의 최대 높이 설정
    }
}());

/**
 * 디렉토리 앵커의 고정 위치
 */
function ancherPostion(anchorBtn, rightDiv) {
    window.addEventListener('scroll', function() {
        // console.log('scroll');
        var top = anchorBtn.getBoundingClientRect().top
            // console.log(top);
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        if (scrollTop > 50) {
            anchorBtn.style.top = '20px'
            rightDiv.style.top = '20px'
        } else {
            anchorBtn.style.top = '76px'
            rightDiv.style.top = '76px'
        }
    })
}

/**
 * 디렉토리의 최대 높이 설정
 */
function setContentMaxHeight() {
    var windowHeight = window.innerHeight
    var contentUl = document.querySelector('.content-ul')
    var contentMaxHeight = windowHeight - 180
    contentUl.style.maxHeight = contentMaxHeight + 'px'
}

//-------------post Content----------------------
// Content 전송
function moveTOC() {
    if (document.querySelector('#markdown-toc') !== null) {
        var TOCString = document.querySelector('#markdown-toc').innerHTML
        var contentUl = document.querySelector('#content-side')
        contentUl.insertAdjacentHTML('afterbegin', TOCString) // 문자열 삽입

        // scroll 스타일 추가(부드러운 스크롤을 위한 것)
        // add class "scroll", for smooth scroll
        var aTags = document.querySelectorAll('#content-side a')

        // add class for everyone
        // aTags.forEach(function () {
        //     console.log(this);
        // })
        for (var i = 0; i < aTags.length; i++) {
            if (!aTags[i].classList.contains('scroll')) {
                aTags[i].classList.add('scroll')
            }
        }
    }
}

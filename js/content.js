/* jshint asi:true */
/////////////////////////content////////////////////////////
generateContent()

/**
 * [generateContent description]
 */
function generateContent() {
    var contentToc = document.querySelector('#markdown-toc')


    if (contentToc === null) {
        document.querySelector('#content').style.display = 'none'
    } else {
        // 부드러운 스크롤을 위해 타사 라이브러리 scroll.js가 사용됩니다.
        // 각 태그에 class = scroll을 추가하기
        var aTags = contentToc.querySelectorAll('a')
        for (var i = 0; i < aTags.length; i++) {
            aTags[i].setAttribute('class', 'scroll')
        }

        // 콘텐츠 전송
        var contentHtml = contentToc.innerHTML
        var sideContentUl = document.querySelector('#content-side')
        sideContentUl.innerHTML = contentHtml
    }

    // 유사한 포스트가 없으면 이 부분을 숨기십시오
    var relatedPost = document.querySelector('.related-post');
    if (relatedPost.innerHTML.trim() === '') {
        relatedPost.style.display = 'none'
    }
}

fixSidebar()

/**
 * [fixSidebar description]
 * 휠이 특정 위치로 움직이면 sidebar-Wrap에 fixed 스타일을 추가하십시오
 * 그렇지 않으면 스타일을 주석처리하세요
 */
function fixSidebar() {
    var sidebarWrap = document.querySelector('.sidebar-wrap')
    window.onscroll = function() {
        var sidebarWrapTop = sidebarWrap.getBoundingClientRect().top
        if (sidebarWrapTop < 21) {
            sidebarWrap.classList.add('fixed')
        }
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        if (scrollTop < 78) {
            sidebarWrap.classList.remove('fixed')
        }
    }
}

controlHeight()

/**
 * [controlHeight description]
 * sidebar의 높이 조절
 */
function controlHeight() {
    // similar posts의 높이 얻기
    // 사용자 브라우저 창의 높이
    // content의 최대 높이 설정
    var similarDiv = document.querySelector('.related-post')
    var contentUl = document.querySelector('.content-ul')
    var similarDivHeight = similarDiv.offsetHeight
    var windowHeight = window.innerHeight
    var contentMaxHeight = windowHeight - similarDivHeight - 77 - 60

    contentUl.style.maxHeight = contentMaxHeight + 'px'
}

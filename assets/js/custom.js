$(document).on('ready', function() {
  //-----------------------------------------------------
  // 꾸미기 슬라이드
  const itemSwiper = new Swiper(".item-slider-inner .swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesOffsetBefore : 0,
    slidesOffsetAfter : 10,
    slidesPerGroup: 4,
  });
  var itemSlider = $('.item-slider');
  itemSwiper.on('slideChange', function() {
    var activeIdx = itemSwiper.activeIndex;
    // console.log(activeIdx)
    if (activeIdx > 1){
      itemSlider.addClass('on');
      itemSwiper.on('reachEnd', function() {
        itemSlider.addClass('end');
      });
    }else {
      itemSlider.removeClass('on');
      itemSlider.removeClass('end');
    }
  });

  //--------------------------------------------------
  //--------------------------------------------------
  // 이용안내 슬라이드
  const popSwiper = new Swiper('.pop-swiper .swiper', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  popSwiper.on('transitionEnd', function() {
    var title = $(".slide-box-title");
    var num = $(".slide-box-num");
    var index = popSwiper.realIndex
    var i = (index ? index : 0) + 1;
    if ( i === 1){
      title.text('내 캐릭터 리스트');
      num.text('1');
    }else{
      title.text('캐릭터 꾸미기 화면');
      num.text('2');
    }
    // console.log(index);
  });

  //--------------------------------------------------
  //--------------------------------------------------
  // 리스트 슬라이드
  const characterSlider = new Swiper(".character-slider-inner .swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    slidesOffsetBefore : 30,
    slidesOffsetAfter : 30,
    slidesPerGroup: 3,
    init: false,
  });

  characterSlider.on('init', function() {
    var nSlides = $('.swiper-slide').length;
    var slideWrap = $('.swiper-wrapper');
    // console.log(nSlides);
    if(nSlides < 4) {
      slideWrap.addClass('mode-center');
    }else {
      slideWrap.removeClass('mode-center');
    }
  });
  characterSlider.init();

  //--------------------------------------------------
  //--------------------------------------------------
  // 탭
  function findParent(el, className){
    let check = el.parentNode.classList.contains(className);
    if(check === true){
       return el.parentNode;
    }else{
      return findParent(el.parentNode, className);
    }
  }
  //--------------------------------------------------
  function findParent(el, className){
    let check = el.parentNode.classList.contains(className);

    if(check === true){
       return el.parentNode;
    }else{
      return findParent(el.parentNode, className);
    }
  }
  function bindingTabEvent(wrap){
    let wrapEl = document.querySelectorAll(wrap);

    wrapEl.forEach(function(tabArea){
      let btn = tabArea.querySelectorAll('.btn-tab');
      let mainBtn = tabArea.querySelectorAll('.btn-tab.btn-main');
      let subBtn = tabArea.querySelectorAll('.btn-tab.btn-sub');

      mainBtn.forEach(function(item){
        let contentArea = tabArea.querySelectorAll('.content-area');
        for(var i=0; i < contentArea.length; i++){
          let contentAreaAll = contentArea[i];
          let btnSub = contentAreaAll.querySelector('.btn-tab.btn-sub');
          btnSub.classList.add('act')
        }
      })
      mainBtn.forEach(function(item){
        item.addEventListener('click', function(){
          let parent = findParent(this, 'parent-box');
          let idx = this.dataset['idx'];
          let depth = this.dataset['depth'];
          let btnArr = parent.querySelectorAll('.btn-tab[data-depth="'+ depth +'"]');
          let contentArr = parent.querySelectorAll('.content-area[data-depth="'+ depth +'"]');

          btnArr.forEach(function(btn){ btn.classList.remove('act'); });
          this.classList.add('act');
          contentArr.forEach(function(content){
            content.classList.remove('act');
          });
          parent.querySelector('.content-area[data-idx="'+ idx +'"][data-depth="'+ depth +'"]').classList.add('act');
        });
      });
      subBtn.forEach(function(item){
        item.addEventListener('click', function(){
          let parent = findParent(this, 'parent-box');
          let idx = this.dataset['idx'];
          let depth = this.dataset['depth'];
          let btnArr = parent.querySelectorAll('.btn-tab[data-depth="'+ depth +'"]');
          btnArr.forEach(function(btn){ btn.classList.remove('act'); });
          this.classList.add('act');
        });
      });

    });
  }

  bindingTabEvent('.select-tab-box');
  //--------------------------------------------------
  // 탭 no-sub
  var btnTab = document.querySelectorAll('.btn-tab');
  var btnTabLength = btnTab.length;
  var scBox = document.querySelector('.select-content-box')

  for(var i=0; i < btnTabLength; i++){
     btnTab[i].addEventListener("click",function(){
       if (this.classList.contains('no-sub')) {
          scBox.classList.add('off')
       }else{
          scBox.classList.remove('off')
       }
    });
  }
  //--------------------------------------------------
  //--------------------------------------------------
  // 터치 스크롤 카테고리 제어
  var tabBox = $(".select-tab-box");
  tabBox.removeClass('nav-down');
  function touchAction(){
    var startX, startY, endX, endY;
    tabBox.removeClass('nav-down');
    $(".select-content-box").on('touchstart', function(event) {
      startX = event.originalEvent.changedTouches[0].screenX;
      startY = event.originalEvent.changedTouches[0].screenY;
    });
    $(".select-content-box").on('touchend', function(event) {
      endX=event.originalEvent.changedTouches[0].screenX;
      endY=event.originalEvent.changedTouches[0].screenY;
      if(tabBox.hasClass("nav-down") === true){
        if(startY-endY>50){
          // console.log(1)
          tabBox.removeClass('nav-down')
        }else if(endY-startY>50){
          // console.log(2)
          tabBox.removeClass('nav-down')
        }
      }
      if(startY-endY>50){
        // console.log(1001)
      }else if(endY-startY>50){
        // console.log(1002)
        tabBox.addClass('nav-down')
      }
    });
  }
  touchAction();
  //--------------------------------------------------
});

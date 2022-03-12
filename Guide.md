[홈바타/홈런 캐릭터 꾸미기] 마크업 개발
# 1. 히스토리

## 211201
0. 수정 및 추가사항
```
 - QA 수정 건
#149 - 수정완료
```
1. scss/css
```
assets\scss\custom\page\_3-list.scss
assets\css\style.css
assets\css\maps\style.css.map
```

## 211129
0. 수정 및 추가사항
```
 - QA 수정 건
#31 - 수정완료
#34 - 수정완료
#120 - 수정완료
#125 - 수정완료
```
1. scss/css
```
assets\scss\custom\page\_4-content-makeup.scss
assets\scss\custom\page\_4-content-select.scss
assets\css\style.css
assets\css\maps\style.css.map
```
3. js
```
assets\js\custom.js
assets\js\jquery.easydropdown.js
```

## 211124
0. 수정 및 추가사항
```
 - 튜토리얼
 https://jira.i-screamedu.com/browse/HL-34406
 - QA 수정 건
#37 - 수정완료
#44 - 수정완료
```
1. html
```
2-1-꾸미기.html
<!-- 211124 t-character 클래스명 삭제 -->
<!-- 211124 t-emotion 클래스명 삭제 -->
<!-- 211124 t-chum 클래스명 삭제 -->
<!-- 211124 t-background 클래스명 삭제 -->
```
2. scss/css
```
assets\scss\custom\page
assets\scss\style.scss
assets\css\style.css
assets\css\maps\style.css.map
```
3. js
```
assets\js\custom.js
```
4. images
```
assets\images\popup\img-pop-slide-1@2x.png
assets\images\popup\img-pop-slide-2@2x.png
```

## 211122
0. 수정 및 추가사항
```
 - 스플래시 이미지 교체
 - QA 수정 건
https://docs.google.com/spreadsheets/d/1e2aJUsQDVvvR7iq-YbvVbrir2TPO2P2184-0pJcTYO8/edit#gid=1205252392
#18 - 수정완료
#19 - 수정완료
#24 - 피드백 완료
#31 - 피드백 완료
#33 - 피드백 완료
#36 - 수정완료
#41 - 수정완료
#58 - 피드백 완료
#69 - 피드백 완료
```
1. html
```
0-스플래시.html
<!-- 211122 | 스플래시 이미지명/포맷 수정되었습니다.  -->
1-1-리스트-중앙정렬.html
1-2-리스트-스크롤.html
<!-- 211122 | slick 슬라이더 js 삭제 -->
<!-- 211122 | 슬라이더 js 추가 -->
<!-- 211122 swiper 클래스 추가해주세요 -->
<!-- 211122 swiper-wrapper 엘리먼트 추가해주세요 -->
<!-- 211122 각 슬라이드 아이템 마다 swiper-slide 추가해주세요 -->
2-1-꾸미기.html
2-2-꾸미기-선택아이템없음.html
<!-- 211122 | slick 슬라이더 js 삭제 -->
<!-- 211122 | 슬라이더 js 추가 -->
<!-- 211122 swiper 클래스 추가해주세요 -->
<!-- 211122 swiper-wrapper 엘리먼트 추가해주세요 -->
<!-- 211122 각 슬라이드 아이템 마다 swiper-slide 추가해주세요 -->
3-이용안내.html
<!-- 211122 | slick 슬라이더 js 삭제 -->
<!-- 211122 | 슬라이더 js 추가 -->
```
2. scss/css
```
assets\scss\custom\page
assets\scss\style.scss
assets\css\style.css
assets\css\maps\style.css.map
```
3. js
```
assets\js\swiper.js
assets\js\custom.js
```
4. images
```
assets\images\splash\img-splash@1x.png
```


## 211105
0. 수정 및 추가사항
```
 - 슬라이더 터치액션값 수정
```
1. scss/css
```
assets\scss\custom\page\_1-slick.scss
assets\css\style.css
assets\css\maps\style.css.map
```


## 211027
0. 수정 및 추가사항
```
 - .item--center 클래스 삭제
 - custom.js 파일 수정
```
1. scss/css
```
assets\scss\custom\page\_1-slick.scss
assets\css\style.css
assets\css\maps\style.css.map
```
2. js
```
assets\js\custom.js
```

## 211019
0. 수정 및 추가사항
```
.item--center → .item-center 수정 필요 요청에 따른 클래스 추가
```
1. scss/css
```
assets\scss\custom\page\_1-slick.scss
assets\css\
```

## 210913
0. 수정 및 추가사항
```
 - 아이템 뎁스 클래스명 추가
 - 아이템 디폴트 이미지 추가
 - 리스트 수직 스크롤바 디자인 추가
 - 카테고리 상단 나타났다 사라지는 기능 구현
```
```
 - 이전에 문의드렸던 기존 캐릭터는 사용하지 않기로 협의되었습니다.
(1. 전달주신 기존 캐릭터 이미지만 80% 줄여서 적용하려고 합니다. 클래스를 추가하여 기존 캐릭터만 적용 가능한지 확인 부탁드립니다.
→ 기본 캐릭터 여부가 DB에 포함되어 있어 클래스 별도 적용이 가능합니다.)
```
1. html
```
1-1-리스트-중앙정렬.html
1-2-리스트-스크롤
<!-- 210913 depth1 ~ depth11  클래스명 추가 / 클래스명으로 사용하지 않고 개발단에서 z-index 추가 해도 됩니다. -->
<!-- 210913 아이템 디폴트 이미지 추가 -->
```
```
2-1-꾸미기.html
<!-- 210913 depth1 ~ depth11  클래스명 추가 / 클래스명으로 사용하지 않고 개발단에서 z-index 추가 해도 됩니다. -->
<!-- 210913 fixed-box 추가 -->
```
```
2-2-꾸미기-선택아이템없음.html
<!-- 210913 아이템 디폴트 이미지 추가 -->
```
2. scss/css
```
assets\scss\custom\page\
assets\css\
```
3. images
```
assets\images\item\wear\
character-bottom-default.png
character-hair-default.png
character-skin-default.png
character-top-default.png
emotion-expression-default.png
```


## 210825
0. 수정 및 추가사항
```
스플래시 화면 추가(스플래시 이미지는 최종 버전이 아니라서 추 후 재전달 예정)
```

1. html
```
0-스플래시.html  
```

2. scss/css
```
assets\scss\custom\page\_0-common.scss
```

3. images
```
assets\images\splash\img-splash@2x.jpg
```

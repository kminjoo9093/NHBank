# NH기업뱅킹 클론코딩

메인페이지 PC 적응형 웹사이트

link : https://kminjoo9093.github.io/NHBank/
<br>
<br>
<img src="https://github.com/user-attachments/assets/88230422-fe21-40f9-887d-854b25a72412" height="250px">

<br>

## 목표
1. 웹 접근성 준수?강화?고려?한 웹사이트 제작
   키보트 탭 포커스 순서, 스킵 네이게이션, ARIA속성 사용으로 웹 접근성 강화 경험        aria-labelledby 쓸만한데는 쓰는걸로 수정하기 <br><br>
2. 복잡한 메뉴 구조? gnb, service 중첩 탭 구성 <br><br>
3. 데이터 바인딩으로 ui 동적 업데이트 <br>
객체배열 형태로 데이터를 저장 후 활용

<br><br>
## 사용 스킬
- HTML
- SCSS
- JAVASCRIPT
- SWIPER

  <br><br>

## 주요 기능
<br>

### 1. gnb 하위 메뉴, 메가메뉴 하위 메뉴와 모두 닫기 버튼 ARIA 속성 활용하여 컨트롤 <br><br>

<img width="500" alt="image" src="https://github.com/user-attachments/assets/cd4fb167-011b-49c0-8900-bb4ba8458ee8" />
<img width="500" alt="image" src="https://github.com/user-attachments/assets/fb450761-31bf-441f-bfdd-eefefe7f1a1c" /> 
<img width="500" alt="image" src="https://github.com/user-attachments/assets/99149bc8-1975-4127-acef-7cfced21d558" />

<br><br>
1️⃣  aria-expanded로 활성화 상태를 지정, aria-controls와 id로 제어하는 대상을 연결<br><br>
2️⃣  isExpanded 변수를 활용하여 버튼의 aria-expanded속성과 하위메뉴의 hidden속성을 제어<br><br>
3️⃣  gnb의 경우 초기화 단계를 넣어 하나의 하위메뉴만 열릴 수 있도록, 메가메뉴의 모두 열기 버튼인 경우 모든 nav-wrap을 제어하도록 추가 기능을 설정함<br><br>
     ❗️추가기능은 options 인수를 구조분해할당하여 isGnb, isMegaOpenAll가 true일 때 실행하도록 함.<br>
       이때 {}, false로 기본값을 설정하여 추가기능이 없는 경우 에러에 대비
<br><br>
[ 관련 코드 : HTML ]

 ```html
<!-- GNB -->
<div class="nav--more">
  <a href="#">계좌조회</a>
  <button class="btn--more" aria-label="더보기" aria-expanded="false" aria-controls="dept1" title="더보기"></button>
</div>
<div class="nav__dept" id="dept1" hidden>
  <ul>
    <li><a href="#">출금계좌조회</a></li>
    <li><a href="#">예금/신탁계좌조회</a></li>
    <li><a href="#">펀드계좌조회</a></li>
    <li><a href="#">외화예금계좌조회</a></li>
    <li><a href="#">휴면예금조회</a></li>
    <li><a href="#">해지계좌조회</a></li>
    <li><a href="#">만기도래현황조회</a></li>
  </ul>
</div>

<!-- megaMenu -->
<div class="megaMenu__board">
   <div class="megaMenu__board__top">
     <div class="megaMenu__title">
       <h3>조회/이체</h3>
       <a href="#" class="btn--go btn--style1">바로가기</a>
     </div>
     <button class="btn--open1" aria-expanded="true" aria-controls="nav-wrap1" aria-label="메뉴 열기"></button>
   </div>
   <div id="nav-wrap1">
     <div class="megaMenu__nav-wrap">
       <div class="megaMenu__nav-group">
         <a class="sub-nav__title" href="#">조회</a>
         <ul class="nav__list">
           <li>
             <div class="nav--more">
               <a href="#">계좌조회</a>
               <button class="btn--more" aria-label="더보기" aria-expanded="true" aria-controls="dept1_mega" title="더보기"></button>
             </div>
             <div class="nav__dept" id="dept1_mega">
               <ul>
                 <li><a href="#">출금계좌조회</a></li>
                 <li><a href="#">예금/신탁계좌조회</a></li>
                 <li><a href="#">펀드계좌조회</a></li>
                 <li><a href="#">외화예금계좌조회</a></li>
                 <li><a href="#">휴면예금조회</a></li>
                 <li><a href="#">해지계좌조회</a></li>
                 <li><a href="#">만기도래현황조회</a></li>
               </ul>
             </div>
           </li>
           <li><a href="#">입출금거래내역조회</a></li>
           <li><a href="#">예금/신탁잔액조회</a></li>
             . . .
         </ul>
       </div>
       . . .
 </div>
 ```

<br>

[ 관련 코드 : SCSS ] <br>

```scss
  [class^="btn--more"],
  .btn--open2 {
    &[aria-expanded="false"]::before {
      content: "+";
    }
    &[aria-expanded="true"]::before {
      content: "−";
    }
  }
```

<br>

[ 관련 코드 : JS ]

```js
export const handleExpanded = (buttonGroup, options = {}) => {
  const { isGnb = false } = options;
  const { isMegaOpenAll = false } = options;

  const buttons = document.querySelectorAll(buttonGroup);
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentBtn = e.currentTarget;
      const targetId = currentBtn.getAttribute("aria-controls");
      let targetDept = document.getElementById(targetId);
      const isExpanded = currentBtn.getAttribute("aria-expanded") === "true";

      if (isGnb && !isExpanded) {
        // 모든 버튼, dept 초기화 (이미 활성화되어있는 버튼이면 초기화 x, true 유지)
        const depts = document.querySelectorAll(".gnb .nav__list .nav__dept");
        buttons.forEach((btn) => {
          btn.setAttribute("aria-expanded", "false");
        });
        depts.forEach((dept) => {
          dept.hidden = true;
        });
      }
      if (isMegaOpenAll) {
        //wrap과 버튼 각각 연결
        const allNavOpenBtns = document.querySelectorAll(
          ".megaMenu__board .btn--open1"
        );
        const allNavWrap = document.querySelectorAll("[id^=nav-wrap]");
        allNavWrap.forEach((wrap) => {
          targetDept = wrap;
          targetDept.hidden = isExpanded;
        });
        allNavOpenBtns.forEach((btn) => {
          btn.setAttribute("aria-expanded", String(!isExpanded));
        });

        buttons.forEach((btn) => {
          btn.textContent = isExpanded ? "모두 열기" : "모두 닫기";
        });
      }

      currentBtn.setAttribute("aria-expanded", String(!isExpanded));
      if (targetDept) {
        targetDept.hidden = isExpanded;
      }
    });
  });
};
```
  <br><br>
### 2. gnb 키보드 포커스, 마우스 이벤트 <br><br>

<img width="600" alt="image" src="https://github.com/user-attachments/assets/2ff9b06a-38ec-482d-8127-8b7b15ea9f67" />
<br><br>

<br><br>
[ 포커스 이벤트 관련 코드 ]

```js
   export const tabFocusNav = () => {
     const mainNavs = document.querySelectorAll(".gnb__list > li > a");
     mainNavs.forEach((a) => {
       a.addEventListener("focusin", (e) => {
         e.currentTarget.nextElementSibling.style.display = "block";
       });

       const targetLi = a.parentElement;
       targetLi.addEventListener("focusout", (e) => {
         const subNav = e.currentTarget.querySelector('.gnb__sub');
         if(!targetLi.parentElement.contains(e.relatedTarget)){
           subNav.style.display = "none";
         }
       });
     });
   };
```
1️⃣  a에 포커스가 오면 해당 서브메뉴가 보이도록 display가 block <br><br>
2️⃣  gnb의 마지막 요소에서 포커스아웃된 경우(다음 포커스 대상이 li 자식이 아닌 경우) 서브메뉴는 display none으로 보이지 않도록 함<br><br>

[ 마우스 이벤트 관련 코드 ]
```js
   const mainNavLis = document.querySelectorAll(".gnb__list > li");
   export const navMouseEvents = () => {
     mainNavLis.forEach((li)=>{
       li.addEventListener("mouseleave", (e)=>{
         const subNav = e.currentTarget.querySelector('.gnb__sub');
         subNav.style.display = "none";
       })
   
       li.addEventListener("mouseover", (e)=>{
         const subNav = e.currentTarget.querySelector('.gnb__sub');
         subNav.style.display = "block";
       })
     })
   }
```
3️⃣  서브메뉴가 열려있을 때 마우스가 백드롭으로 이동하면 서브메뉴가 보이지 않도록 설정<br><br>
4️⃣  다시 메뉴에 마우스오버 이벤트가 발생하면 서브메뉴가 보이도록 설정<br><br>
<br><br>

### 3. 추천 서비스 중첩 탭 구조 & 데이터 바인딩 <br><br>

<img width="500" alt="image" src="https://github.com/user-attachments/assets/84c243af-9f61-47d0-b7bc-ab8ec7f58d55" />
<img width="500" alt="image" src="https://github.com/user-attachments/assets/f59716cf-7b45-4ce8-a4f5-20aec261e5c5" />
<br><br>

1️⃣ 우측 상단 탭을 tab1, 좌측 탭을 tab2로 나눈다 <br><br>
2️⃣ 탭 버튼에 aria-selected 속성을 주고, aria-controls와 id로 각 탭 버튼과 컨텐츠를 연결 <br><br>
3️⃣ tab2의 각 컨텐츠 컨테이너 역할인 ul에 data-id 값을 부여하고, 데이터 객체에 id로 동일값을 주어 데이터를 필터링할 수 있도록 한다 <br><br>

<br><br>
[ 관련 코드 : HTML ]

```html
<div class="service__top">
   <div class="service__title">
     <h2 class="section__heading">NH기업 추천서비스</h2>
     <p>테마별로 가장 추천하는 서비스를 모아왔어요</p>
   </div>
   <ul class="service__tab1">
     <li><button role="tab" aria-selected="true" aria-controls="service__tab1-content1">NH 농협은행</button></li>
     <li><button role="tab" aria-selected="false" aria-controls="service__tab1-content2">농 · 축협</button></li>
   </ul>
</div>
<div class="service__tab1-contents">
   <div id="service__tab1-content1">
     <ul class="service__tab2-1">
       <li><button role="tab" aria-selected="true" aria-controls="service__tab2-content1">모두가 주목하는<br><span>NH농협은행 금융추천상품</span></button></li>
       <li><button role="tab" aria-selected="false" aria-controls="service__tab2-content2">비대면으로 더 편리한<br><span>금융업무서비스</span></button></li>
       <li><button role="tab" aria-selected="false" aria-controls="service__tab2-content3">NH농협은행만의<br><span>특별한 금융업무서비스</span></button></li>
       <li><button role="tab" aria-selected="false" aria-controls="service__tab2-content4">기업을 위한 맞춤형<br><span>부가서비스</span></button></li>
     </ul>
     <div class="service__tab2-contents first">
       <ul id="service__tab2-content1" data-id="tab1-1">
       </ul>
       <ul id="service__tab2-content2" data-id="tab1-2" hidden></ul>
       <ul id="service__tab2-content3" data-id="tab1-3" hidden></ul>
       <ul id="service__tab2-content4" data-id="tab1-4" hidden></ul>
     </div>
   </div>
   <div id="service__tab1-content2" hidden>
     <ul class="service__tab2-2">
       <li><button role="tab" aria-selected="true" aria-controls="service__tab2-content5">모두가 주목하는<br><span>농·축협 금융추천상품</span></button></li>
       <li><button role="tab" aria-selected="false" aria-controls="service__tab2-content6">빠르고 간편한<br><span>조회·이체·납부 서비스</span></button></li>
       <li><button role="tab" aria-selected="false" aria-controls="service__tab2-content7">스마트하고 편리한<br><span>업무 관리 서비스</span></button></li>
       <li><button role="tab" aria-selected="false" aria-controls="service__tab2-content8">농·축협만의 특별한<br><span>NH기업뱅킹 서비스</span></button></li>
     </ul>
     <div class="service__tab2-contents second">
       <ul id="service__tab2-content5" data-id="tab2-1">
       </ul>
       <ul id="service__tab2-content6" data-id="tab2-2" hidden></ul>
       <ul id="service__tab2-content7" data-id="tab2-3" hidden></ul>
       <ul id="service__tab2-content8" data-id="tab2-4" hidden></ul>
     </div>
   </div>
</div>
```
[ 데이터 ]<br>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/0263784f-153a-48c1-a81b-d7c4411265e4" />

<br>

[ 관련 코드 : JS ]
```js
// tab 기능 유틸함수
export const tab = (tabMenu, tabContent)=>{
  const tabBtns = document.querySelectorAll(tabMenu);
  const tabContents = document.querySelectorAll(tabContent);

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentTab = e.currentTarget;
      const tabId = currentTab.getAttribute("aria-controls");
      const targetTabContent = document.getElementById(tabId);
      const isSelected = currentTab.getAttribute("aria-selected") === "true";

      if(isSelected) return; // 현재 활성화된 탭을 한번 더 누른 경우 그대로 유지

      // 탭버튼, 컨텐츠 초기화
      if(!isSelected){
        tabBtns.forEach((btn) => {
          btn.setAttribute("aria-selected", "false");
        });
        tabContents.forEach((content) => {
          content.hidden = true;
        });
      }
      
      //선택 탭,컨텐츠 활성화
      currentTab.setAttribute("aria-selected", String(!isSelected));
    });
  });
}

export const serviceTab1 = () => {
  tab(".service__tab1 button", ".service__tab1-contents > div");
};

export const serviceTab2 = () => {
  tab(".service__tab2-1 button", ".service__tab2-contents.first > ul");
  tab(".service__tab2-2 button", ".service__tab2-contents.second > ul");
};

// service 데이터 바인딩
export const getServiceData = (dataList = serviceData) => {
  const contentBoxes = document.querySelectorAll(".service__tab2-contents ul");

  contentBoxes.forEach((ul) => {
    const selectedId = ul.getAttribute("data-id");
    const newDataList = dataList.filter(({ id }) => {
      return selectedId === id;
    });

    newDataList.forEach(({ name, info, badges, image }) => {
      const getBadge = (badgeList = badges) =>
        badgeList
          .map((badge) => {
            return `<span data-badge=${badge}>${badge}</span>`;
          })
          .join("");

      ul.innerHTML += `
      <li class="service__product">
        <a href="#">
          <div class="content-top">
            <h3 class="product__name">${name}</h3>
            <i class="product__icon">
              <img src="./assets/images/icon_arrow-r-u.png" aria-hidden="true" alt="">
            </i>
          </div>
          <p class="product__info">${info}</p>
          <div class="content-bottom">
            <div class="product__badges">
             ${getBadge(badges)}
            </div>
            <i class="product__img">
              <img src=${image} alt="">
            </i>
          </div>
        </a>
      </li>`;
    });
  });
};
```
<br>
❌ 이슈 <br><br>
초반에 tab2의 버튼과 컨텐츠들을 tab1의 두 메뉴 NH 농협은행 / 농 · 축협 별로 따로 구분하지 않아 탭 기능이 제대로 구현되지 않는 문제 발생<br><br>

```js
   // 탭 버튼들과 컨텐츠들을 분리하지 않고 공유 => 정상작동 X
     tab(".service__tab2 button", ".service__tab2-contents > ul");


   // 탭1에 따라 탭2 버튼과 컨텐츠를 구분해서 컨트롤 => 정상작동
     tab(".service__tab2-1 button", ".service__tab2-contents.first > ul");
     tab(".service__tab2-2 button", ".service__tab2-contents.sec > ul");
```

<br><br><br>

## 주요 스타일 <br><br>

1. visual섹션 버튼 그라데이션 <br>
<img width="300" alt="image" src="https://github.com/user-attachments/assets/eeb89537-63de-4d1f-a36e-e90e732b3ec5" />
<br>

```scss
.btn--viewMore2 {
 &:hover {
   i {
     color: $green-28;
     text-shadow: 0.07rem 0 0 $green-28;
   }
   &::before {
     border-color: $green-28; // fallback

     @supports (mask-composite: exclude) or (-webkit-mask-composite: xor) {
       border: none;
       background: linear-gradient(170deg, $blue-00, $green-28);
       mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
       -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
       mask-composite: exclude;
       -webkit-mask-composite: xor;
     }
   }
 }
}
```
<br>
1️⃣
2️⃣
3️⃣
4️⃣   fallback


<br><br>

2. 체험 버튼 그라데이션 애니 <br>
<img width="300" alt="image" src="https://github.com/user-attachments/assets/b851314d-aaa7-4935-a24c-75848f18cd03" />
<br>

```scss
.link__go1 {
 position: relative;
 border-radius: 10rem;
 background-size: 200%;
 background-image: linear-gradient(to right, $blue-00, $green-68, $blue-00);
 background-position: 0 0;
 &:hover {
   animation: bgAni 0.5s ease-out;
 }
 @keyframes bgAni {
   0% {
     background-position: 100% 100%;
   }
   100% {
     background-position: 0 0;
   }
 }
}
```

<br><br>


## 이슈
1. 메가메뉴 열렸을 떄 이중 스크롤 없앤 방법
3. service 섹션 그리드 li에 span 2가 적용안되는 경우

   ## 알게된 점
   적응형 제작할때 min-width설정
- border에 그라데이션 적용방법들과 차이점

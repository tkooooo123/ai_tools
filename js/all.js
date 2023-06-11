const item = document.querySelector(".comment-list");
const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");

const paginator = document.querySelector(".paginator");

let isDone = false
let startX
let move
let tempX = 0
let cardX = card1
item.addEventListener("mousedown", (e) => {
  isDone = true
  startX = e.pageX
  console.log("123", e.pageX);

});

item.addEventListener("mousemove", (e) => {
 
  if(!isDone) return;
  move = startX - e.clientX
  item.scrollLeft = tempX +  move
  console.log('move', startX, e.clientX, move)
})

item.addEventListener("mouseup", (e) => {
  isDone = false
  //滑鼠拖曳時，scrollbar滾動
  if(move > 0) {
    $(".comment-list").animate(
      {
        scrollLeft: tempX +  $('.comment-list').width() +16
      },
      100
    );
    tempX = tempX +  $('.comment-list').width() +16
  } else {
    $(".comment-list").animate(
      {
        scrollLeft: tempX -  $('.comment-list').width() -16
      },
      100
    );
    tempX = tempX -  $('.comment-list').width() -16
  }
console.log($('.comment-list').css('margin'))
  //處理page active
  if(tempX > card2.offsetLeft) {
    for (let i = 0; i < paginator.children.length; i++) {
      if (i === 2) {
        paginator.children[i].classList.add("active");
      } else {
        paginator.children[i].classList.remove("active");
      }
    }
  } else if (tempX > card1.offsetLeft) {
    for (let i = 0; i < paginator.children.length; i++) {
      if (i === 1) {
        paginator.children[i].classList.add("active");
      } else {
        paginator.children[i].classList.remove("active");
      }
    }
  } else {
      for (let i = 0; i < paginator.children.length; i++) {
      if (i === 0) {
        paginator.children[i].classList.add("active");
      } else {
        paginator.children[i].classList.remove("active");
      }
    }
  }
  
})
//點擊分頁切換內容
paginator.addEventListener("click", (e) => {
  if (e.target.className.includes("page")) {
    for (let i = 0; i < paginator.children.length; i++) {
      if (e.target.id === paginator.children[i].id) {
        paginator.children[i].classList.add("active");
      } else {
        paginator.children[i].classList.remove("active");
      }
    }
     if (e.target.id === "page-1") {
    $(".comment-list").animate(
      {
        scrollLeft: card1.offsetLeft-8
      },
      50
    );
       tempX = card1.offsetLeft-8
  } else if (e.target.id === "page-2") {
    $(".comment-list").animate(
      {
        scrollLeft: card2.offsetLeft-8
      },
      50
    );
     tempX = card2.offsetLeft-8
  } else {
    $(".comment-list").animate(
      {
        scrollLeft: card3.offsetLeft-8
      },
      50
    );
     tempX = card3.offsetLeft-8
  }
 
  }
});


 // back to top
 $('.to-top-btn').click(function(e){
  console.log('123')
  //e.preventDefault();
  $('html,body').animate({scrollTop:0},800);
});

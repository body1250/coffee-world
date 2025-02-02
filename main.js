
document.addEventListener("DOMContentLoaded", function () {
  // الكود الخاص بك هنا
  let theUl = document.querySelector("#mainNav");
  let thesocunedUl = document.querySelector("#socendNav");
  let thefistitems = document.querySelector("#firstitemstype");
  let thesocenditems = document.querySelector("#soceneditemstype");
  let firstnav = document.querySelector("#firstNav");
  let down = document.querySelector(".downArrow");
  
  document.querySelector("#toggle").addEventListener("click", function () {
    theUl.style.display = "none";
    thesocunedUl.style.display = "inline";
  });
  
document.querySelector("#closeUl").addEventListener('click', ()=>{
  thesocunedUl.style.display = "none";
  theUl.style.display = "flex";
  thesocenditems.style.display = "none";
  down.style.display = "inline";
})
document.addEventListener("click", function (event) {
  if (
    thefistitems.style.display === "flex" &&
    !(thefistitems.contains(event.target) || firstnav.contains(event.target))
  ) {
    thefistitems.style.display = "none";
  }
  // تحقق مما إذا كان النقر خارج القائمة والزر
  if (
    !thesocunedUl.contains(event.target) &&
    !document.querySelector("#toggle").contains(event.target)
  ) {
    thesocunedUl.style.display = "none";
    theUl.style.display = "flex";
    thesocenditems.style.display = "none";
    down.style.display = "inline";
  }
});

let close = document.querySelector(".x");
document.querySelector("#thesocendstore").addEventListener("click", function () {
  thesocenditems.style.display = "inline";
  down.style.display = "none";
  close.style.display = "inline";
});

close.onclick = function () {
  thesocenditems.style.display = "none";
  close.style.display = "none";
  down.style.display = "inline";
  console.log("closed");
};

document.querySelector("#date").innerHTML = new Date().getFullYear();

//زر التعديل

let currentIndex = 0;
const totalItems = document.querySelectorAll(".custmorD").length;
const itemsToShow = 3;

function showItems() {
  const carousel = document.querySelector("#secTwo .container");
  const itemWidth = carousel.querySelector(".custmorD").offsetWidth;
  
  // نحرك العناصر بناءً على الفهرس الحالي
  carousel.style.transform = `translateX(-${
    currentIndex * (itemWidth + 20)
  }px)`;
}
document.querySelector("#nextSlide").addEventListener("click", function () {
  if (currentIndex < totalItems - itemsToShow) {
    currentIndex++;
    showItems();
    console.log("right");
  }
  
});

document.querySelector("#prevSlide").addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showItems();
      console.log("left");
    }
  });
  
  // عند تحميل الصفحة، نعرض العناصر الحالية
  showItems();
  
  

  
  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.parentNode.classList.contains("item")) {

      localStorage.setItem('itemName', e.target.parentNode.childNodes[0].textContent);
      localStorage.setItem('priceitem', e.target.parentNode.dataset.price);
      localStorage.setItem('imagesrc', e.target.parentNode.children[0].src);
      console.log(typeof e.target.parentNode.childNodes[0].innerHTML); //name
      console.log(e.target.parentNode.dataset.price); //price
      console.log(e.target.parentNode.children[0].src); //image src
      window.open("item.html", "_blank");

    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // التفويض للحدث على القائمة الرئيسية
    document.querySelector("#soceneditemstype").addEventListener("click", function (e) {
      if (e.target.classList.contains("item")) {
        localStorage.setItem('itemName', e.target.childNodes[0].textContent);
        localStorage.setItem('priceitem', e.target.dataset.price);
        localStorage.setItem('imagesrc', e.target.children[0].src);
        console.log(e.target.childNodes[0].textContent); //name
        console.log(e.target.dataset.price); //price
        console.log(e.target.children[0].src); //image src
        window.open("item.html", "_blank");
      }
    });
  });
  

  console.log()
});
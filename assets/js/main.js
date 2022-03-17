import { bestSeller, newBook, doraemon, combo, manga, director } from "./data.js";

const NewBook = $('.newBookRow'); 
const BestSeller = $('.bestSellerRow'); 
const Combo = $('.comboRow'); 
const Manga = $('.mangaRow');
const Doremon = $('.doremonRow');
const directorRow = $('.directorRow');

$(document).ready(function () {
   $(".menu-icon").on("click", function () {
      $("nav ul").toggleClass("showing");
   });

   render(newBook, NewBook);
   render(bestSeller, BestSeller);
   render(combo, Combo);
   render(manga, Manga);
   render(doraemon, Doremon);
   renderDirector();
});

$(window).on("scroll", function () {
   if ($(window).scrollTop()) {
      $("nav").addClass("black");
   } else {
      $("nav").removeClass("black");
   }
});


const render = (bookGalary, where) => {
   const mapBook = bookGalary.map((item, index) => {
      return `
      <div class="col ${index}">
         <div class="card" discout='-${item.discout}%'>
            <img class="card-img-top" src="${item.img}" alt="Card image cap" />
            <div class="card-body">
               <h5 class="card-title">${item.title}</h5>
               <div class="price">
                  <span class="base_price">${item.basePrice}$</span>
                  <span class="sell_price">${item.basePrice - item.basePrice*item.discout/100}$</span>
               </div>
            </div>
         </div>
      </div>
      `;
   });
   where.html(mapBook)
};

const renderDirector = ()=>{
   const directorMem = director.map((dir, index)=>{
      return `
      <aside class="profile-card" index =${index}>
         <div class="profile-header">
            <a href="#">
               <img src="${dir.img}">
            </a>
            <h1>${dir.name}</h1>
            <h2>${dir.work}</h2>
         </div>
         
         <div class="profile-bio">
            <p>
            ${dir.desc}
            </p>
         </div>
      </aside>
      `
   })

   directorRow.html(directorMem);
}

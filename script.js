window.addEventListener('scroll', () => {

  let scroll = window.scrollY;

  document.body.style.background =
  `linear-gradient(
    to bottom,
    rgb(4,20,35),
    rgb(1,11,20),
    rgb(${scroll / 8},${scroll / 8},${scroll / 8})
  )`;

});
let quantity = 1;

function increaseQty(){

  quantity++;

  document.getElementById("qty").innerText = quantity;

}

function decreaseQty(){

  if(quantity > 1){

    quantity--;

    document.getElementById("qty").innerText = quantity;

  }

}

function orderPrintedBook(){

  const total = 125000 * quantity;

  const message =
`Halo, saya ingin memesan buku cetak "Hilang Menyentuh Dasar"

Jumlah buku: ${quantity}

Total harga: Rp${total.toLocaleString("id-ID")}

Estimasi cetak: 7 hari
Estimasi pengiriman: 1-3 hari`;

  const whatsappURL =
`https://wa.me/6287835333349?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');

}

function orderEbook(){

  const message =
`Halo, saya ingin memesan E-Book / PDF "Hilang Menyentuh Dasar"

Pengiriman instan via WhatsApp.`;

  const whatsappURL =
`https://wa.me/6287835333349?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');

}
function showPage(pageNumber){

  const pages =
  document.querySelectorAll('.book-page');

  const buttons =
  document.querySelectorAll('.page-btn');

  pages.forEach((page)=>{
    page.classList.remove('active-page');
  });

  buttons.forEach((button)=>{
    button.classList.remove('active-btn');
  });

  document
  .getElementById(`page${pageNumber}`)
  .classList.add('active-page');

  buttons[pageNumber - 1]
  .classList.add('active-btn');

}

/* OCEAN DEPTH EFFECT */

window.addEventListener('scroll',()=>{

  let scroll = window.scrollY;

  let darkness =
  Math.min(scroll / 8, 120);

  document.body.style.background =
  `linear-gradient(
  to bottom,
  rgb(${77 - darkness/4},
  ${166 - darkness/2},
  ${255 - darkness}),

  rgb(${11 - darkness/5},
  ${60 - darkness/3},
  ${93 - darkness/2}),

  rgb(${2},
  ${21 - darkness/5},
  ${38 - darkness/5}),

  rgb(${1},
  ${11 - darkness/8},
  ${20 - darkness/8}),

  rgb(0,0,0)
  )`;

});
const quotes = [

  "“Beberapa luka tidak berdarah, tapi tetap membuat seseorang tenggelam.”",

  "“Rumah tidak selalu berarti pulang.”",

  "“Aku terlalu kecil untuk memahami kenapa semuanya terasa menyakitkan.”",

  "“Laut paling dalam ternyata ada di kepala manusia.”",

  "“Ada orang yang tetap hidup meski dirinya sudah lama tenggelam.”",

  "“Sunyi kadang lebih keras daripada bentakan.”"

];

function newQuote(){

  const random =
  Math.floor(Math.random() * quotes.length);

  document.getElementById("randomQuote")
  .innerText = quotes[random];

}

/* LETTER */

function openLetter(){

  document.getElementById("letterModal")
  .style.display = "flex";

}

function closeLetter(){

  document.getElementById("letterModal")
  .style.display = "none";

}
/* FIX BUTTONS */

window.addEventListener("load",()=>{

  document.body.style.pointerEvents = "auto";

});

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click",function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute("href")
    );

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      });

    }

  });

});

/* FIX RANDOM QUOTE BUTTON */

const quoteButton =
document.querySelector(".quote-btn");

if(quoteButton){

  quoteButton.addEventListener("click",()=>{

    newQuote();

  });

}

/* CLOSE LETTER CLICK OUTSIDE */

window.addEventListener("click",(e)=>{

  const modal =
  document.getElementById("letterModal");

  if(e.target === modal){

    modal.style.display = "none";

  }

});
/* FIX HERO BUTTON DELAY */

window.addEventListener("load",()=>{

  const heroButtons =
  document.querySelectorAll(
    ".btn-primary, .btn-outline"
  );

  heroButtons.forEach((button)=>{

    button.style.pointerEvents = "auto";

    button.style.zIndex = "999";

  });

});

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute("href")
    );

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      });

    }

  });

});

/* OPEN LETTER */

function openLetter(){

  document
  .getElementById("letterModal")
  .style.display = "flex";

}

/* CLOSE LETTER */

function closeLetter(){

  document
  .getElementById("letterModal")
  .style.display = "none";

}

/* CLICK OUTSIDE CLOSE */

window.addEventListener("click",(e)=>{

  const modal =
  document.getElementById("letterModal");

  if(e.target === modal){

    closeLetter();

  }

});

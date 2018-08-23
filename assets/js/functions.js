function addClass () {
 if (btn.classList.contains('active-button')) {
   console.log('if');
   document.body.classList.remove("active-nav");
   btn.classList.remove('active-button');
 } else {
   console.log('else');
   document.body.classList.add("active-nav");
   btn.classList.add('active-button');
 }
}

var btn = document.querySelector('.burger-menu-button');

btn.addEventListener('click', addClass);
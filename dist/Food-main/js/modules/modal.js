function openModal(modalSelector, modalTimerId) {
   const modal = document.querySelector(modalSelector);

   modal.classList.add('show');
   modal.classList.remove('hide');
   //modal.classList.toggle('show');//тоже самое что и выше
   document.body.style.overflow = 'hidden'; //остановка прокрутки при мод окне

   if (modalTimerId) {
      clearInterval(modalTimerId);//убирает время появления окна
   }
}

function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector);

   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
   }

function modal(triggerSelecotor, modalSelector, modalTimerId) {
 // модальное окно
    
 const modalTrigger = document.querySelectorAll(triggerSelecotor),
 modal = document.querySelector(modalSelector);

 //СКРЫТИЕ ИЛИ ПОКАЗ МОДАЛЬНОГО ОКНА

modalTrigger.forEach(btn => {
btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
});

//      СКРЫТИЕ МОДАЛЬНОГО ОКНА ЧЕРЕЗ ЕСК ИЛИ НАЖАТИЯ НА ПОДЛОЖКУ

modal.addEventListener('click', (e) => {
if (e.target === modal || e.target.getAttribute('data-close') == "") {
closeModal(modalSelector);
}
});


document.addEventListener('keydown', (e) => {
if (e.code === "Escape" && modal.classList.contains('show')) { 
   closeModal(modalSelector);
}
});

// открытие окна в конце страницы
function showModalByScroll() {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
   openModal(modalSelector, modalTimerId);
   window.removeEventListener('scroll', showModalByScroll);
}
}
window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {closeModal};
export {openModal};
'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

btnsShowModal.forEach((curr, i) => {
  curr.addEventListener('click', function () {
    modal.classList.remove('hidden'); // you can add more classes with comma seprated values
    //apart from removing classes we can also add classes, and also check if an element has a class or not
    overlay.classList.remove('hidden');
  });
});

//for closing the modal window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal); //when we click anywhere outside the modal
btnCloseModal.addEventListener('click', closeModal); //when we click the x button

//closing the modal window when the esc key is pressed

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});

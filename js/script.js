/*   window.addEventListener('DOMContentLoaded', () =>{
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent () {
      tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
      });
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',  (e) => {
      const target = e.target;
      console.log(target);
      if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });

    // tabsParent.addEventListener('click', function (e) {
    //   const target = e.target;
    //   if (target && target.classList.contains('tabheader__item')) {
    //     tabs.forEach((item, i) => {
    //       if (target == item) {
    //         hideTabContent();
    //         showTabContent(i);
    //       }
    //     });
    //   }
    // });

    // Timer 

    const deadline = '2022.08.12';

    function getTimeRamaining(endtime) { 
      let days, hours, minutes, seconds;
      const t = Date.parse(endtime) - Date.parse(new Date());

      if (t <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      }else{
        days = Math.floor(t / (1000 * 60 * 60 * 24) ),//Math.floor() - Округляет до ближайшего числа!
        seconds = Math.floor( (t / 1000) % 60),
        minutes = Math.floor( (t /1000 / 60) % 60),
        hours = Math.floor( (t / (1000 * 60 * 60) % 24) );         // % Возращает остаток от деления!
      }
        return{
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
    }

    function getZero(num) {
      if (num >= 0 && num < 10) {
        return`0${num}`;
      }else{
        return num;
      }
    }

    function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

  updateClock();

        function updateClock() {
          const t = getTimeRamaining(endtime);
          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        }

    }

    setClock('.timer', deadline);

    
  });

  //Modal  window



  const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

        function openModal() {
          modal.classList.add('show');
          modal.classList.remove('hide');
          document.body.style.overflow = "hidden";
          clearInterval(modalTimerId);
          
          // modal.classList.toggle('show');
          }

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
    //console.log(openModal);
  });


  function closeModal() {
    
    modal.classList.add('hide');
    modal.classList.remove('show');
    clearInterval(modalTimerId);
    // modal.classList.toggle('show');
    
    document.body.style.overflow = "";
  }
  modalCloseBtn.addEventListener('click', closeModal);


  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
      if (event.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
      }
    });

    // const modalTimerId = setTimeout(openModal, 3000); // Запуск страницы через каждые 3 секунда
    
    function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight )  { //pageYOffset- сколько пикселей пользовататель отлистал в низ!
        openModal();
        window.removeEventListener('scroll', showModalByScroll); // removeEventListener - Удаляет событие или действие !

      } //{once: true} - Срабатывает один раз!!!
    }


    window.addEventListener('.scroll ', showModalByScroll);
  
    // Используем классы для карточек!

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector){
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 4;
      this.changeRoUAH();
    }


    changeRoUAH(){
      this.price = +this.price*this.transfer;

    }

    render(){
    const element = document.createElement('div');
      element.innerHTML = `<div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> сум/день</div>
                    </div>
                </div>`;
                       this.parent.append(element); // append()- помещает внутрь нового созданного элемента! 
    }
  }

new MenuCard(
  "img/tabs/vegy.jpg",
  "vegy",
  "Меню Фитнес",
  '>Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  11000,
  '.menu .container'
).render(); // В данной ситуации он выполнит свою функцию и исчезнет. Используется один раз


// FORMS

const forms = document.querySelectorAll("form");

const message = {
  loading: 'Загрузка',
  success: 'Спасибо! Скоро мы с вами свяжемся   :)',
  failure: 'Что то пошло не так...  :('
};

forms.forEach( item => {
  postData(item);
});

function postData(form) {
  form.addEventListener('submit', (e) => { // 
    e.preventDefault(); // Имено этот запрос должен идти в начале AJAX

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.textContent = message.loading;
    form.append(statusMessage);

    const request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json');
    const formData = new FormData(form); // Получение в обычном виде!

    const object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    request.send(json);

    request.addEventListener('load', () => {
      if (request.status === 200) {
        console.log(request.response);
        statusMessage.textContent = message.success;
        form.reset(); // reset();- сбрасывает
        setTimeout(() => {
          statusMessage.remove();
          // closeModal()
        }, 2000);
      }else{
        statusMessage.textContent = message.failure;
      }
    });
  });
}












**********************************************************РАБОЧИЙ КОД********************************************************************************************************************







 */

window.addEventListener('DOMContentLoaded', function () {

  // Tabs

  let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {

    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = '2022-06-11';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor((t / (1000 * 60 * 60 * 24))),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60) % 24));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 300000);
  // Изменил значение, чтобы не отвлекало

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);

  // Используем классы для создание карточек меню

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    14,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    ".menu .container"
  ).render();

  // Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/751.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      display: block;
      margin: 10 auto;
      matgin-top: 10px;
      `;

      form.insertAdjacentElement('afterend', statusMessage); //метод insertAdjacentElement () объекта Element позволяет вставить указанный узел элемента в заданную позицию относительно элемента, на котором он вызывается
      /*     'beforebegin': перед самим элементом targetElement.
    'afterbegin': внутри элемента targetElement, перед его первым потомком.
    'beforeend': внутри элемента targetElement, после его последнего потомка.
    'afterend': после самого элемента targetElement. */



      // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      const formData = new FormData(form);

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      // const json = JSON.stringify(object);

      fetch('server.php', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(object)
      }).then(data => data.text())
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        }).catch(() => {
          showThanksModal(message.failure);
        }).finally(() => {
          form.reset(); // Что бы все данные сбросились!!
        });
      // request.send(json);

      // request.addEventListener('load', () => {
      //   if (request.status === 200) {
      // console.log(request.response);
      // showThanksModal(message.success);
      // form.reset(); // Что бы все данные сбросились!!
      // statusMessage.remove();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal(); // Отвечает за открытие модальных окон

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
  <div class = 'modal__content'>
  <div class='modal__close' data-close>x</div>
  <div class='modal__title'>${message}</div>
  </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  /// Fetch Запросы!!!!

  //   fetch('https://date.nager.at/api/v2/publicholidays/2020/US') //Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch (), который позволяет легко и логично получать ресурсы по сети асинхронно
  //     .then(response => response.json()) // response - получение ответа. response.json - Получение в json формате!
  //     .then(json => console.log(json));
  //   fetch('https://api.wazirx.com/sapi/v1/tickers/24hr')
  //     .then(response => response.json())
  //     .then(json => console.log(json));


  //   fetch('https://date.nager.at/api/v2/publicholidays/2020/US',{
  //     method: 'POST',
  //     body:JSON.stringify({name: 'Kamran'}),
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   })
  //   .then(text => console.log(text))
  //   .then(response => response.json());
});
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

  const deadline = '2022-09-05';

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
    if (e.target === modal || e.target.getAttribute('data-close') == '') {  // метод getAttribute() объекта Element возвращает значение указанного атрибута элемента. Если данный атрибут не существует у указанного элемента, то возвращаемое значение будет соответствовать значению null
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { // contains(); - возвращает boolean значение если есть то true иначе false
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
      this.price = this.price * this.transfer; // this — это ключевое слово в JavaScript которое содержит в себе объект (контекст) выполняемого кода
    }

    render() { // render-функции представляют собой странную смесь из HTML и JavaScript, которую часто сложно бывает читать
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

  const getResource = async (url) => { // async - Оператор async определяет асинхронную функцию, в которой, как предполагается, будет выполняться одна или несколько асинхронных задач.
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`); // Выдает текст ошибки/ throw- выкидывает ошибку / status – код статуса HTTP-запроса, например 200./ ok – логическое значение: будет true, если код HTTP-статуса в диапазоне 200-299
    }

    return await res.json();
  };

  getResource('http://localhost:3000/menu')
    .then(data => {
      data.forEach(({ img, altimg, title, descr, price }) => {
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      });
    });

  axios.get('http://localhost:3000/menu')
    .then(data => console.log(data));

  // new MenuCard(
  //   "img/tabs/vegy.jpg",
  //   "vegy",
  //   'Меню "Фитнес"',
  //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  //   9,
  //   ".menu .container"
  // ).render();

  // new MenuCard(
  //   "img/tabs/post.jpg",
  //   "post",
  //   'Меню "Постное"',
  //   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  //   14,
  //   ".menu .container"
  // ).render();

  // new MenuCard(
  //   "img/tabs/elite.jpg",
  //   "elite",
  //   'Меню “Премиум”',
  //   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  //   21,
  //   ".menu .container"
  // ).render();

  // Forms

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/751.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url, data) => { // async - Оператор async определяет асинхронную функцию, в которой, как предполагается, будет выполняться одна или несколько асинхронных задач.
    const res = await fetch(url, { // await - Оператор await используется для ожидания окончания Promise. Может быть использован только внутри async function!
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: data
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Метод event.preventDefault позволяет отменить действия браузера по умолчанию. Например, сделать так, чтобы при клике по ссылке перехода на другую страницу не было или по нажатию на кнопку форма не отправлялась на сервер

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

      // const object = {};  - Метод переоброзования в значение 
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });

      const json = JSON.stringify(Object.fromEntries(formData.entries())); //fromEntries -- превращает наоборот то что entries!

      // const obj = {a:20, b:50};
      // console.log(Object.entries(obj));// entries- Превращает массив в масиве!


      // const json = JSON.stringify(object);

      // fetch('server.php', { //  Старый fetch запрос асинхронный
      //   method: 'POST',
      //   headers: { 'Content-type': 'application/json' },
      //   body: JSON.stringify(object)
      // });

      postData('http://localhost:3000/requests', json) // Новый fetch запрос синхронный

        // .then(data => data.text())
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

  // Слайдер------------------------------------------------------------------------- //

  let slideIndex = 1;
  let offset = 0;
  const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    width = window.getComputedStyle(slidesWrapper).width;

  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((item) => item.style.display = 'none');

  //   slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // prev.addEventListener('click', function () {
  //   plusSlides(-1);
  // });

  // next.addEventListener('click', function () {
  //   plusSlides(1);
  // });
  //  Слайдер 2  ------------------------------------------------------------------------- //
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => {
    slide.style.width = width;
  });

  next.addEventListener('click', function () {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  });

  prev.addEventListener('click', function () {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  });


}); 
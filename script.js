async function loadContent(page) {
  const mainContent = document.getElementById("main-content");
  const clientBtn = document.querySelector(".header__btn:nth-child(1)");
  const partnerBtn = document.querySelector(".header__btn:nth-child(2)");

  mainContent.classList.add("fade-out");

  setTimeout(async () => {
    let content;
    if (page === "clients") {
      content = `
          <section class="hero">
            <div class="container">
              <div class="hero__wrapper">
                <div class="hero__content">
                  <h1 class="hero__heading">Оплачивайте <span class="hero__heading-highlight">покупки</span> с Gazprom Pay</h1>
                  <p class="hero__description">Бесконтактная оплата картами «Мир» в магазинах и интернете в одно касание</p>
                  <a class="btn hero__btn btn--second" href="#">Регистрация в Gazprom Pay</a>
                </div>
                <img class="hero__image" src="images/image-terminal-desktop.png" width="660" height="640" srcset="images/image-terminal-desktop@2x.png 2x" alt="Телефон с Газпром пэй поднесён к терминалу">
              </div>
            </div>
          </section>
          <section class="advantages">
            <h2 class="visually-hidden">Преимущества Gazprom Pay</h2>
            <div class="container">
              <ul class="advantages__main-list">
                <li class="advantages__main-item">
                  <div class="card-advantages card-advantages--heavenly">
                    <div class="card-advantages__picture">
                      <img class="card-advantages__image" src="images/image-mobile-application-desktop.png" width="588" height="520" srcset="images/image-mobile-application-desktop@2x.png 2x" alt="Мобильное приложение Газпром пэй с биометрией">
                    </div>
                    <div class="card-advantages__content">
                      <h3 class="card-advantages__heading">Мобильное приложение</h3>
                      <p class="card-advantages__description">Установите приложение для Android, чтобы платить смартфоном в одно касание</p>
                      <a class="card-advantages__btn btn btn--third" href="#">Скачать приложение</a>
                    </div>
                  </div>
                </li>
                <li class="advantages__main-item">
                  <div class="card-advantages card-advantages--purple card-advantages--reverse">
                    <div class="card-advantages__content">
                      <h3 class="card-advantages__heading">В чем преимущества?</h3>
                      <p class="card-advantages__description">Удобный и безопасный способ оплаты. Можно расплачиваться за интернет-покупки картами любых банков без ввода реквизитов, а также платить бесконтактно картой «Мир» от Газпромбанка.</p>
                    </div>
                    <div class="card-advantages__picture">
                      <img class="card-advantages__image" src="images/image-wallet-desktop.png" width="588" height="520" srcset="images/image-wallet-desktop@2x.png 2x" alt="Кошелёк с логотипом Газпром пэй">
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="advantages__list">
                <li class="advantages__list-item">
                  <span class="advantages__list-box">
                    <svg class="advantages__list-icon" width="32" height="32" aria-hidden="true">
                      <use xlink:href="images/sprite.svg#icon-like"></use>
                    </svg>
                  </span>
                  <h3 class="advantages__list-heading">Удобно</h3>
                  <p class="advantages__list-description">Платите одним касанием на кассе</p>
                </li>
                <li class="advantages__list-item">
                  <span class="advantages__list-box">
                    <svg class="advantages__list-icon" width="32" height="32" aria-hidden="true">
                      <use xlink:href="images/sprite.svg#icon-time-update"></use>
                    </svg>
                  </span>
                  <h3 class="advantages__list-heading">Быстро</h3>
                  <p class="advantages__list-description">Не нужно искать карту или вводить ее реквизиты для оплаты</p>
                </li>
                <li class="advantages__list-item">
                  <span class="advantages__list-box">
                    <svg class="advantages__list-icon" width="32" height="32" aria-hidden="true">
                      <use xlink:href="images/sprite.svg#icon-security"></use>
                    </svg>
                  </span>
                  <h3 class="advantages__list-heading">Безопасно</h3>
                  <p class="advantages__list-description">Ваши данные под защитой Газпромбанка</p>
                </li>
              </ul>
            </div>
          </section>
          <section class="how-pay">
            <div class="container">
              <h2 class="how-pay__title">Как оплачивать с Gazprom Pay в интернете</h2>
              <ul class="how-pay__list">
                <li class="how-pay__item">
                  <svg class="how-pay__icon" xmlns="http://www.w3.org/2000/svg" fill="none" width="72" height="72" viewBox="0 0 72 72">
                    <circle cx="36" cy="36" r="36" fill="#4C5269"></circle>
                    <path fill="url(#icon-step-1-linear)" fill-rule="evenodd" d="M71.562 41.63C68.86 58.837 53.967 72 36 72c-10.399 0-19.768-4.41-26.34-11.46C14.368 55.01 26.076 50.5 52.5 50.5c4.145 0 8.427-2.65 12.618-5.245 2.184-1.35 4.342-2.687 6.444-3.626Z" clip-rule="evenodd"></path>
                    <g clip-path="url(#icon-step-1-clip)">
                      <path fill="#fff" d="M26.82 26.82V32.1H32.1V26.82H26.82Zm6.54 0V32.1h5.28V26.82h-5.28Zm6.541 0V32.1h5.279V26.82H39.9Zm-13.08 6.54v5.28h5.278v-5.28H26.82Zm6.54 0v5.28h5.278v-5.28h-5.278Zm6.54 0v5.28h5.279v-5.28H39.9Zm-13.08 6.541v5.279h5.278V39.9H26.82Zm6.54 0v5.279h5.278V39.9h-5.278Zm6.54 0v5.279h5.279V39.9H39.9Z"></path>
                    </g>
                    <defs>
                      <lineargradient id="icon-step-1-linear" x1="44.983" x2="44.983" y1="41.054" y2="78.546" gradientUnits="userSpaceOnUse">
                        <stop offset="1" stop-color="#CD9AFF"></stop>
                      </lineargradient>
                      <clippath id="icon-step-1-clip">
                        <path fill="#fff" d="M26 26h20v20H26z"></path>
                      </clippath>
                    </defs>
                  </svg>
                  <div class="how-pay__content">
                    <h3 class="how-pay__heading">Выберите оплату Gazprom Pay</h3>
                    <p class="how-pay__description">на сайте магазина-партнера</p>
                  </div>
                </li>
                <li class="how-pay__item">
                  <svg class="how-pay__icon" xmlns="http://www.w3.org/2000/svg" fill="none" width="72" height="72" viewBox="0 0 72 72">
                    <circle cx="36" cy="36" r="36" fill="#4C5269"></circle>
                    <path fill="url(#icon-step-2-linear)" fill-rule="evenodd" d="M36 72c19.882 0 36-16.118 36-36 0-1.363-.076-2.708-.224-4.032C66.097 34.872 59.14 37.5 50.5 37.5c-25.737 0-40.458 4.233-48.622 10.01 4.8 14.238 18.264 24.49 34.122 24.49Z" clip-rule="evenodd"></path>
                    <g clip-path="url(#icon-step-2-clip)">
                      <path fill="#fff" d="M26.82 26.82V32.1H32.1V26.82H26.82Zm6.54 0V32.1h5.28V26.82h-5.28Zm6.541 0V32.1h5.279V26.82H39.9Zm-13.08 6.54v5.28h5.278v-5.28H26.82Zm6.54 0v5.28h5.278v-5.28h-5.278Zm6.54 0v5.28h5.279v-5.28H39.9Zm-13.08 6.541v5.279h5.278V39.9H26.82Zm6.54 0v5.279h5.278V39.9h-5.278Zm6.54 0v5.279h5.279V39.9H39.9Z"></path>
                    </g>
                    <defs>
                      <lineargradient id="icon-step-2-linear" x1="41.892" x2="41.892" y1="31.21" y2="80.628" gradientUnits="userSpaceOnUse">
                        <stop offset="1" stop-color="#BB98FF"></stop>
                      </lineargradient>
                      <clippath id="icon-step-2-clip">
                        <path fill="#fff" d="M26 26h20v20H26z"></path>
                      </clippath>
                    </defs>
                  </svg>
                  <div class="how-pay__content">
                    <h3 class="how-pay__heading">Зарегистрируйтесь</h3>
                    <p class="how-pay__description">и установите пароль</p>
                  </div>
                </li>
                <li class="how-pay__item">
                  <svg class="how-pay__icon" xmlns="http://www.w3.org/2000/svg" fill="none" width="72" height="72" viewBox="0 0 72 72">
                    <circle cx="36" cy="36" r="36" fill="#4C5269"></circle>
                    <path fill="url(#icon-step-3-linear)" fill-rule="evenodd" d="M36 72c19.882 0 36-16.118 36-36a35.864 35.864 0 0 0-8.988-23.8C56.28 16.178 48.142 20 39 20 20.493 20 8.441 23.341.796 28.434A36.143 36.143 0 0 0 0 36c0 19.882 16.118 36 36 36Z" clip-rule="evenodd"></path>
                    <g clip-path="url(#icon-step-3-clip)">
                      <path fill="#fff" d="M26.82 26.82V32.1H32.1V26.82H26.82Zm6.54 0V32.1h5.28V26.82h-5.28Zm6.541 0V32.1h5.279V26.82H39.9Zm-13.08 6.54v5.28h5.278v-5.28H26.82Zm6.54 0v5.28h5.278v-5.28h-5.278Zm6.54 0v5.28h5.279v-5.28H39.9Zm-13.08 6.541v5.279h5.278V39.9H26.82Zm6.54 0v5.279h5.278V39.9h-5.278Zm6.54 0v5.279h5.279V39.9H39.9Z"></path>
                    </g>
                    <defs>
                      <lineargradient id="icon-step-3-linear" x1="41.085" x2="41.085" y1="11.068" y2="84.889" gradientUnits="userSpaceOnUse">
                        <stop offset=".516" stop-color="#78F"></stop>
                        <stop offset="1" stop-color="#CD9DFC"></stop>
                      </lineargradient>
                      <clippath id="icon-step-3-clip">
                        <path fill="#fff" d="M26 26h20v20H26z"></path>
                      </clippath>
                    </defs>
                  </svg>
                  <div class="how-pay__content">
                    <h3 class="how-pay__heading">Добавьте любую карту</h3>
                    <p class="how-pay__description">российских банков</p>
                  </div>
                </li>
                <li class="how-pay__item">
                  <svg class="how-pay__icon" xmlns="http://www.w3.org/2000/svg" fill="none" width="72" height="72" viewBox="0 0 72 72">
                    <circle cx="36" cy="36" r="36" fill="url(#icon-step-4-linear)"></circle>
                    <g clip-path="url(#icon-step-4-clip)">
                      <path fill="#fff" d="M26.82 26.82V32.1H32.1V26.82H26.82Zm6.54 0V32.1h5.28V26.82h-5.28Zm6.541 0V32.1h5.279V26.82H39.9Zm-13.08 6.54v5.28h5.278v-5.28H26.82Zm6.54 0v5.28h5.278v-5.28h-5.278Zm6.54 0v5.28h5.279v-5.28H39.9Zm-13.08 6.541v5.279h5.278V39.9H26.82Zm6.54 0v5.279h5.278V39.9h-5.278Zm6.54 0v5.279h5.279V39.9H39.9Z"></path>
                    </g>
                    <defs>
                      <lineargradient id="icon-step-4-linear" x1="36" x2="36" y1="0" y2="72" gradientUnits="userSpaceOnUse">
                        <stop offset=".51" stop-color="#6583FF"></stop>
                        <stop offset="1" stop-color="#C499FF"></stop>
                      </lineargradient>
                      <clippath id="icon-step-4-clip">
                        <path fill="#fff" d="M26 26h20v20H26z"></path>
                      </clippath>
                    </defs>
                  </svg>
                  <div class="how-pay__content">
                    <h3 class="how-pay__heading">Оплачивайте покупки</h3>
                    <p class="how-pay__description">без ввода реквизитов карты</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section class="payment">
            <div class="container">
              <h2 class="payment__title">Кнопка оплаты Gazprom Pay уже на более 1000 сайтах</h2>
              <ul class="payment__list">
                <li class="payment__item">
                  <div class="payment__picture">
                    <img class="payment__image" src="images/logo-fns-desktop.png" width="286" height="326" srcset="images/logo-fns-desktop@2x.png 2x" alt="Логотип ФНС">
                  </div>
                  <h3 class="payment__heading">ФНС</h3>
                  <p class="payment__description">Федеральная налоговая служба</p>
                </li>
                <li class="payment__item">
                  <div class="payment__picture">
                    <img class="payment__image" src="images/logo-sogaz-desktop.png" width="286" height="326" srcset="images/logo-sogaz-desktop@2x.png 2x" alt="Логотип СОГАЗ">
                  </div>
                  <h3 class="payment__heading">СОГАЗ</h3>
                  <p class="payment__description">Лидер российского страхового рынка</p>
                </li>
                <li class="payment__item">
                  <div class="payment__picture">
                    <img class="payment__image" src="images/logo-ntv-plus-desktop.png" width="286" height="326" srcset="images/logo-ntv-plus-desktop@2x.png 2x" alt="Логотип НТВ-ПЛЮС">
                  </div>
                  <h3 class="payment__heading">НТВ-ПЛЮС</h3>
                  <p class="payment__description">Оператор спутникового телевидения</p>
                </li>
                <li class="payment__item">
                  <div class="payment__picture">
                    <img class="payment__image" src="images/logo-state-services-desktop.png" width="286" height="326" srcset="images/logo-state-services-desktop@2x.png 2x" alt="Логотип Госуслуг">
                  </div>
                  <h3 class="payment__heading">Госуслуги</h3>
                  <p class="payment__description">Портал государственных услуг Российской Федерации</p>
                </li>
              </ul>
            </div>
          </section>
        `;
      document.title = "Клиентам - Gazprom Pay";
    } else if (page === "partners") {
      content = `
          <section class="hero hero--partners">
            <div class="container">
              <div class="hero__wrapper">
                <div class="hero__content hero__content--partners">
                  <h1 class="hero__heading hero__heading--partners">Подключите Gazprom Pay для вашего бизнеса</h1>
                  <a class="btn hero__btn hero__btn--partners btn--second" href="#">Подключить Gazprom Pay</a>
                </div>
                <img class="hero__image" src="images/image-switch-gpay-desktop.png" width="660" height="640" srcset="images/image-switch-gpay-desktop@2x.png 2x" alt="Курсор указывает на переключатель Газпром пей">
              </div>
            </div>
          </section>
          <section class="advantages advantages--alternative">
            <h2 class="visually-hidden">Gazprom Pay обладает большим количеством преимуществ, которые позволяют комфортно использовать сервис</h2>
            <div class="container">
              <ul class="advantages__main-list advantages__main-list--grid">
                <li class="advantages__main-item advantages__main-item--flat">
                  <div class="card-advantages card-advantages--blue">
                    <div class="card-advantages__picture card-advantages__picture--partners">
                      <picture>
                        <source media="(max-width: 767px)" srcset="images/image-cards-gpay-mobile.png 1x, images/image-cards-gpay-mobile@2x.png 2x">
                        <img class="card-advantages__image" src="images/image-cards-gpay-desktop.png" width="588" height="520" srcset="images/image-cards-gpay-desktop@2x.png 2x" alt="Банковские карты с блоком сверху от Газпром пэй">
                      </picture>
                    </div>
                    <div class="card-advantages__content">
                      <h3 class="card-advantages__heading">Gazprom Pay – удобный сервис приема платежей онлайн</h3>
                      <p class="card-advantages__description">Ваши клиенты, однажды добавив карту в Gazprom Pay, смогут совершать покупки быстрее и удобнее</p>
                    </div>
                  </div>
                </li>
                <li class="advantages__main-item">
                  <div class="card-advantages card-advantages--small card-advantages--dark-gray">
                    <div class="card-advantages__content">
                      <h3 class="card-advantages__heading">Что вы получаете</h3>
                      <ul class="card-advantages__sublist">
                        <li class="card-advantages__subitem">Снижение себестоимости эквайринга</li>
                        <li class="card-advantages__subitem">Увеличение конверсии платежей</li>
                        <li class="card-advantages__subitem">Сервис позволяет принимать к оплате карты любых российских банков</li>
                      </ul>
                    </div>
                    <div class="card-advantages__picture">
                      <img class="card-advantages__image" src="images/image-plus-desktop.png" width="600" height="324" srcset="images/image-plus-desktop@2x.png 2x" alt="Абстрактные фигуры плюс, воронка и монеты">
                    </div>
                  </div>
                </li>
                <li class="advantages__main-item">
                  <div class="card-advantages card-advantages--small card-advantages--light-gray">
                    <div class="card-advantages__content">
                      <h3 class="card-advantages__heading">Это безопасно</h3>
                      <p class="card-advantages__description">Gazprom Pay это надёжный российский сервис от Газпромбанка</p>
                    </div>
                    <div class="card-advantages__picture">
                      <img class="card-advantages__image" src="images/image-security-desktop.png" width="600" height="324" srcset="images/image-security-desktop@2x.png 2x" alt="Синий щит с белой галкой возле трёх монет">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section class="payment payment--partners">
            <div class="container">
              <h2 class="payment__title">Кнопка оплаты Gazprom Pay уже на более 1000 сайтах</h2>
              <ul class="payment__list">
                <li class="payment__item">
                  <div class="payment__picture">
                    <img class="payment__image" src="images/logo-fns-desktop.png" height="326" srcset="images/logo-fns-desktop@2x.png 2x" alt="Логотип ФНС">
                  </div>
                  <h3 class="payment__heading">ФНС</h3>
                  <p class="payment__description">Федеральная налоговая служба</p>
                </li>
                <li class="payment__item">
                  <div class="payment__picture">
                    <img class="payment__image" src="images/logo-sogaz-desktop.png" width="286" height="326" srcset="images/logo-sogaz-desktop@2x.png 2x" alt="Логотип СОГАЗ">
                  </div>
                  <h3 class="payment__heading">СОГАЗ</h3>
                  <p class="payment__description">Лидер российского страхового рынка</p>
                </li>
                <li class="payment__item">
                  <div class="payment__picture">
                    <img class="payment__image" src="images/logo-ntv-plus-desktop.png" width="286" height="326" srcset="images/logo-ntv-plus-desktop@2x.png 2x" alt="Логотип НТВ-ПЛЮС">
                  </div>
                  <h3 class="payment__heading">НТВ-ПЛЮС</h3>
                  <p class="payment__description">Оператор спутникового телевидения</p>
                </li>
                <li class="payment__item">
                  <div class="payment__picture">
                    <img class="payment__image" src="images/logo-state-services-desktop.png" width="286" height="326" srcset="images/logo-state-services-desktop@2x.png 2x" alt="Логотип Госуслуг">
                  </div>
                  <h3 class="payment__heading">Госуслуги</h3>
                  <p class="payment__description">Портал государственных услуг Российской Федерации</p>
                </li>
              </ul>
            </div>
          </section>
        `;
      document.title = "Партнерам - Gazprom Pay";
    }

    mainContent.innerHTML = content;
    mainContent.classList.remove("fade-out");

    // Обновление стилей кнопок
    clientBtn.classList.remove("header__btn--active");
    partnerBtn.classList.remove("header__btn--active");
    clientBtn.classList.remove("btn--fifth");
    partnerBtn.classList.remove("btn--fifth");

    if (page === "clients") {
      clientBtn.classList.add("header__btn--active");
      partnerBtn.classList.add("btn--fifth");
    } else if (page === "partners") {
      partnerBtn.classList.add("header__btn--active");
      clientBtn.classList.add("btn--fifth");
    }
  }, 500); // Задержка совпадает с длительностью transition
}

// Загрузка контента при первой загрузке страницы (например, 'clients' по умолчанию)
window.onload = () => loadContent("clients");

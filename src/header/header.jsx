import React from 'react';

function Header() {
   return <>
        <header class="header">
            <div class="header-container head container">
                <div>
                    <img src="./img/header_burger.svg" class="head__burger" alt="Menu" />
                    <img src="/img/logo.png" class="head__logo" />
                </div>
                <nav class="header__menu menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <a href="index.html" class="menu__link">Услуги</a>
                        </li>
                        <li class="menu__item">
                            <a href="service.html" class="menu__link"><span>Продукция</span></a>
                        </li>
                        <li class="menu__item">
                            <a href="companyinfo.html" class="menu__link _linkOrange">О компании</a>
                        </li>
                        <li class="menu__item">
                            <a href="contact.html" class="menu__link">Портфолио</a>
                        </li>
                        <li class="menu__item">
                            <a href="companyinfo.html" class="menu__link">Вопрос-ответ</a>
                        </li>
                        <li class="menu__item">
                            <a href="contact.html" class="menu__link">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div class="head__buttons">
                    <button class="button1 ">
                        <img src="/img/btn1-icon.svg" />
                        <span class="text-button">Заявка на замер</span>
                    </button>
                    <button class="button2 ">
                        <img src="/img/btn2-icon.svg" />
                        <span class="text-button">Заказать расчет</span>
                    </button>
                </div>
            </div>
        </header>
   </>
}
export default Header;
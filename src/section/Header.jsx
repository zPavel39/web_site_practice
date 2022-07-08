import React from 'react';
import '../scss/App.scss';
import header_logo from '../img/logo.png';
import header_burger from '../img/header_burger.svg';
import header_btn1 from '../img/btn1-icon.svg';
import header_btn2 from '../img/btn2-icon.svg';
function Header() {
   return <>
        <header class="header">
            <div class="header-container head container">
                <div>
                    <img src={header_burger} class="head__burger" alt="Menu" />
                    <img src={header_logo} class="head__logo" alt="Menu" />
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
                        <img src={header_btn1} alt="btn1" />
                        <span class="text-button">Заявка на замер</span>
                    </button>
                    <button class="button2 ">
                        <img src={header_btn2} alt="btn2" />
                        <span class="text-button">Заказать расчет</span>
                    </button>
                </div>
            </div>
        </header>
   </>
}
export default Header;
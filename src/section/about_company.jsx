import React from "react";
import '../scss/App.scss';
import about_logo from '../img/about_logo.png';
import about_description from '../img/about_description.png';
import logo_prof from '../img/profile-logo-prof.svg';
import logo_price from '../img/profile-logo-price.svg';
import logo_contract from '../img/profile-logo-contract.svg';
import logo_loyalty from '../img/profile-logo-loyalty.svg';
import logo_speed from '../img/profile-logo-speed.svg';
import logo_service from '../img/profile-logo-speed.svg';
import btn1_icon from '../img/btn1-icon.svg';





function AboutCompany() {
    return <>
        <section class="about container">
            <h2 class="about__title">О компании</h2>
            <ul class="about__type">
                <li>
                    <button>Описание</button>
                </li>
                <li>
                    <button>Как мы работаем</button>
                </li>
                <li>
                    <button>Отзывы</button>
                </li>
                <li>
                    <button>Сертификаты</button>
                </li>
            </ul>
            <div class="about__description">
                <div class="about__description-left description-left">
                    <div>
                        <img src={about_logo} alt="Логотип Компании" />
                    </div>
                    <div>
                        <p>
                            Мы помогаем клиентам подбирать решения, учитывая пожежелания к характеристикам окна
                            и его стоимости. Окно - это объект, которым Вы будете пользоваться много лет, поэтому
                            для нас очень важно, чтобы Вы сделали правильный выбор.
                        </p>
                    </div>
                </div>
                    <img class="about__description-right" src={about_description} alt="Картинка описания" />
            </div>
            <ul class="about__profile">
                <li class="about__profile-list list">
                    <div class="list__item-logo">
                        <img src={logo_prof} />
                    </div>
                    <div class="list__item-text">
                        <h3>Профессионализм</h3>
                        <p>
                            Бригада профессиональных мастеров по монтажу и обслуживанию
                        </p>
                    </div>
                </li>
                <li class="about__profile-list list">
                    <div class="list__item-logo">
                        <img src={logo_price} />
                    </div>
                    <div class="list__item-text">
                        <h3>Ценообразование</h3>
                        <p>
                            Лучшие цены на рынке пластиковых окон
                        </p>
                    </div>
                </li>
                <li class="about__profile-list list">
                    <div class="list__item-logo">
                        <img src={logo_contract} />
                    </div>
                    <div class="list__item-text">
                        <h3>Мобильность</h3>
                        <p>
                            Заключение договора на дому
                        </p>
                    </div>
                </li>
                <li class="about__profile-list list">
                    <div class="list__item-logo">
                        <img src={logo_loyalty} />
                    </div>
                    <div class="list__item-text">
                        <h3>Лояльность</h3>
                        <p>
                            99% клиентов рекомендуют нас своим друзьям
                        </p>
                    </div>
                </li>
                <li class="about__profile-list list">
                    <div class="list__item-logo">
                        <img src={logo_speed} />
                    </div>
                    <div class="list__item-text">
                        <h3>Скорость</h3>
                        <p>
                            Короткие сроки установки изделий
                        </p>
                    </div>
                </li>
                <li class="about__profile-list list">
                    <div class="list__item-logo">
                        <img src={logo_service} />
                    </div>
                    <div class="list__item-text">
                        <h3>Служба качества</h3>
                        <p>
                            Безупречное качество и контроль изделий ПВХ
                        </p>
                    </div>
                </li>
            </ul>
            <button class="about__button">
                <img src={btn1_icon} />
                <span>Оформить заявку на замер</span>
            </button>
        </section>
    </>
}
export default AboutCompany;
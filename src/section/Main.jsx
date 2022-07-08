import React from 'react';
import '../scss/App.scss';
import bg_image920px from '../img/main_fon920px.png';
import bg_image1 from '../img/main-fon.png';
import preview_quality1 from '../img/preview_quality1.svg';
import preview_quality2 from '../img/preview_quality2.svg';
import preview_quality3 from '../img/preview_quality3.svg';
import aplication1 from '../img/aplication1.png';

function Main() {
    return <>
        <main class="main">
            <div class="main__backgraun-style">
                <img class="bg_image920px" src={bg_image920px} />
                <img class="bg_image1" src={bg_image1} />
                <div class="main__container container">
                    <div class="main__profile profile">
                        <div class="profile__section-info section-info">
                            <div class="section-info__block service-info">
                                <div class="service-info__title">
                                    <h1>Окна Хаус -</h1>
                                    <p>Профессиональный подход к остеклению</p>
                                </div>
                                <div class="service-info__preview preview">
                                    <div class="preview__quality">
                                        <img class="logo_quality" src={preview_quality1} />
                                        <p class="preview__text">Современные окна и балконные конструкции по доступным ценам</p>
                                    </div>
                                    <div class="preview__quality">
                                        <img class="logo_quality" src={preview_quality2} />
                                        <p class="preview__text">Квалифицированный подход к решению задач любой сложности</p>
                                    </div>
                                    <div class="preview__quality">
                                        <img class="logo_quality" src={preview_quality3} />
                                        <p class="preview__text">Гарантия высочайшего качества нашей продукции</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile__section-application application">
                            <div class="application__table aplication-block">
                                <h2>Вызвать замершика на дом</h2>
                                <input class="application-block__input" type="text" placeholder="Представьтесь, пожалуйста" />
                                <input class="application-block__input" type="tel" placeholder="Номер телефона" />
                                <input class="application-block__input" type="email" placeholder="Е-mail" />
                                <div class="application-block__box">
                                    <div>
                                        <input class="check-box" type="checkbox" />
                                    </div>
                                    <p>
                                        Согласен на обработку персональных данных 
                                        в соответствии с <a class="link-application" href="#">политикой конфиденциальности</a>
                                    </p>
                                </div>
                                <button class="application-block__button">Отправить заявку</button>
                                <img class="application-block__img" src={aplication1} />
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
}
export default Main;

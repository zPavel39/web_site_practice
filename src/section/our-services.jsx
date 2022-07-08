import React from 'react';
import '../scss/App.scss';
import card1 from '../img/card1.png';
import card2 from '../img/card2.png';
import card3 from '../img/card3.png';
import card4 from '../img/card4.png';
import card_preview1 from '../img/card_preview1.svg';
import card_preview2 from '../img/card_preview2.svg';
import card_preview3 from '../img/card_preview3.svg';
import card_preview4 from '../img/card_preview4.svg';



function OurServices() {
    return <>
        <section class="our-services">
            <div class="our-services__container container">
                <h2 class="our-services__title">Наши Услуги</h2>
                <div class="services-cards card container">
                    <div class="card-bcg">
                        <img src={card1} />
                        <div class="card-preview">
                            <div class="card-preview__title">
                                <img src={card_preview1} />
                                <h3>Установка пластиковых окон</h3>
                            </div>
                            <p class="card-preview__info">
                                Устанавливаем пластиковые окна Rehau от проверенного
                                производителя с гарантией качества
                            </p>
                        </div>
                    </div>
                    <div class="card-bcg _shadow">
                        <img src={card2} />
                        <div class="card-preview">
                            <div class="card-preview__title">
                                <img src={card_preview2} />
                                <h3>Остекление балконов и лоджий</h3>
                            </div>
                            <p class="card-preview__info">
                                Занимаемся остеклением и отделкой
                                балконов и лоджий. Теплое и холодное остеклени,
                                изготовление выносов и крыш.
                                Беремся за сложные объекты
                            </p>
                        </div>
                    </div>
                    <div class="card-bcg">
                        <img src={card3} />
                        <div class="card-preview">
                            <div class="card-preview__title">
                                <img src={card_preview3} />
                                <h3>Остекление коттеджей и дач</h3>
                            </div>
                            <p class="card-preview__info">
                                Остекление и отделка под ключ:
                                от коттеджей и дач до террас
                                и беседок. Выделяем личного
                                технолога под каждый объект
                            </p>
                        </div>
                    </div>
                    <div class="card-bcg">
                        <img src={card4} />
                        <div class="card-preview">
                            <div class="card-preview__title">
                                <img src={card_preview4} />
                                <h3>Остекление корпоративных объектов</h3>
                            </div>
                            <p class="card-preview__info">
                                Реализуем сложные проекты
                                по остеклению торговых центров,
                                ресторанов, производственных помещений 
                                и офисов
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default OurServices;
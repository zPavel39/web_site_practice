import React from "react";
import '../scss/App.scss'
import Contact_Tel from '../img/contact_tel.svg'
import Contact_local from '../img/contacts_local.svg'
import Contact_Mail from '../img/contact_mail.svg'
import Image_vk from'../img/contact_vk.svg'
import Image_fbook from'../img/contact_fbook.svg'
import Image_inst from'../img/contact_inst.svg'
import Image_tg from'../img/contact_tg.svg'
import Image_you from'../img/contact_you.svg'
import Image_odklas from'../img/contact_odklas.svg'
import Work_window from '../img/contacts_work.png'

function Contacts() {
    return <>
        <section class="contacts container">
            <h2 class="contacts__title">Контакты</h2>
            <div class="contacts__main">
                <div class="contacts__left">
                    <h3 class="title">Бесплатная Консультация:</h3>
                    <div class="contacts__info">
                        <ul class="contacts__info-list">
                            <li>
                                <img src={Contact_Tel} alt="tel." />
                                <a href="tel:+74932343140">8(4932)34-31-40</a>
                                <a href="tel:++79051093140">8(905)109-31-40</a>
                            </li>
                            <li>
                                <img src={Contact_local} alt="local." />
                                 <a href="">г. Иваново, ул. Генерала Хлебникова, д.54, оф.303</a>    
                            </li>
                            <li>
                                <img src={Contact_Mail} alt="location" />
                                 <a href="">okna@haus.ru</a>    
                            </li>
                        </ul>
                        <p class="contacts__info-text">
                            Установку должны выполнять только эксперты. Нам доверяют сотни семей.
                            Узнайте поробнее, какие решения вам подходят.
                            Вы можете приобрести недорогие товары при гарантированно высоком качестве.
                        </p>
                        <ul class="contacts__info-link">
                            <li><img src={Image_vk} alt="vk" /></li>
                            <li><img src={Image_fbook} alt="fbook" /></li>
                            <li><img src={Image_inst} alt="inst" /></li>
                            <li><img src={Image_tg} alt="tg" /></li>
                            <li><img src={Image_you} alt="you" /></li>
                            <li><img src={Image_odklas} alt="odklas" /></li>
                        </ul>
                    </div>
                    <img class="contacts__image" src={Work_window} alt="window" />
                </div>
                <form class="contacts__form" id="user_question">
                    <h2>Остались вопросы?</h2>
                    <input class="contacts__form-input" type="text" placeholder="Ваше имя" />
                    <input class="contacts__form-input" type="tel" placeholder="Номер телефона" />
                    <textarea form="user_question" class="contacts__form-textarea"  placeholder="Ваш отзыв" rows="4" ></textarea>
                    <div class="contacts__form-box">
                        <input class="checkbox" type="checkbox" />
                        <p>
                            Я согласен(на) на обработку
                            <a class="link" href="#"> персональных данных</a>
                        </p>
                    </div>
                    <button class="contacts__form-button">Отправить заявку</button>
                </form>                    
            </div>
        </section>
    </>
  }
  export default Contacts;
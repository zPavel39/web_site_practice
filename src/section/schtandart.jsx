import React from 'react';
import '../scss/App.scss';
import shtandart_logo from '../img/shtandart_logo.png';
import schtandart_sert from '../img/schtandart-sert.svg';
import schtandart_inno from '../img/schtandart_inno.svg';
import schtandart_lider from '../img/schtandart_lider.svg';
import schtandart_texnic from '../img/schtandart_texnic.svg';
import schtandart_poroduct from '../img/schtandart_poroduct.svg';
import btn2_icon from '../img/btn2-icon.svg';


function Schtandart() {
    return <>
        <section class="schtandart container">
            <div class="schtandart__info">
                <img class="schtandart__info-logo" src={shtandart_logo} />
                <ul class="schtandart__info-list info-list">
                    <li class="info-list__blocks">
                        <img src={schtandart_sert} />
                        <span>Сертифицированный производитель Rehau</span>
                    </li>
                    <li class="info-list__blocks">
                        <img src={schtandart_inno} />
                        <span>Инновационный оконный завод</span>
                    </li>
                    <li class="info-list__blocks">
                        <img src={schtandart_lider} />
                        <span>Лидер по переработке профилей Rehau в России</span>
                    </li>
                    <li class="info-list__blocks">
                        <img src={schtandart_texnic} />
                        <span>Высокотехнологичное автоматизированное оборудование</span>
                    </li>
                    <li class="info-list__blocks">
                        <img src={schtandart_poroduct} />
                        <span>Широкий ассортимент продукции</span>
                    </li>
                </ul>
            </div>
            <button class="schtandart__button">
                <img src={btn2_icon} />
                <span>Заказать расчет</span>
            </button>
        </section>
    </>
}
export default Schtandart;
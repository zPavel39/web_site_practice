import React from 'react';
import '../scss/App.scss';
import window_image from '../img/okno-profil.png';




function Products() {
    return <>
        <section class="products container">
            <h2 class="products__title">Продукция</h2>
            <ul class="products__type">
                <li>
                    <button>Стандарт</button>
                </li>
                <li>
                    <button>Бизнес</button>
                </li>
                <li>
                    <button>Премиум</button>
                </li>
                <li>
                    <button>Эксклюзив</button>
                </li>
            </ul>
            <div class="products__main">
                <img class="products__main-image" src={window_image} alt="Стеклопакет" />
                <div class="production__main-content main-content">
                    <h3 class="main-content__title">Rehau Blitz New</h3>
                    <p class="main-content__info">
                        Сохраняют тепло в доме, защищают от шума и вписываются в любой
                        интерьер. Практичный выбор
                    </p>
                    <ul class="main-content__list">
                        <li>
                            <p>Системная глубина</p>
                            <p>60/60 мм</p>
                        </li>
                        <li>
                            <p>Ширина стеклопакета</p>
                            <p>24/31 мм</p>
                        </li>
                        <li>
                            <p>Воздушные камеры</p>
                            <p>3</p>
                        </li>
                        <li>
                            <p>Теплосопротивление</p>
                            <p>0,70 м2С/ВТ</p>
                        </li>
                    </ul>
                </div>
            </div>        
        </section>
    </>
}
export default Products;
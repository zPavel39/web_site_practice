import React from "react";
import '../scss/App.scss';

function Accordion() {
    return <>
            <section class="accordion container">
            <h2 class="accordion__title">Вопрос-ответ</h2>
            <div class="accordion__block">
                <button class="accordion__block-btn">Сколько по времени занимает изготовление пластиковых окон?</button>
                <div class="accordion__block-panel">
                    <p class="text">Нет, команда мастеров все сами аккуратно доставят и внесут.</p>
                </div>
            </div>
            <div class="accordion__block">
                <button class="accordion__block-btn">Какие существуют способы оплаты?</button>
                <div class="accordion__block-panel">
                    <p class="text">Нет, команда мастеров все сами аккуратно доставят и внесут.</p>
                </div>
            </div>
            <div class="accordion__block">
                <button class="accordion__block-btn">Где я могу посмотреть образцы?</button>
                <div class="accordion__block-panel">
                    <p class="text">Нет, команда мастеров все сами аккуратно доставят и внесут.</p>
                </div>
            </div>
            <div class="accordion__block">
                <button class="accordion__block-btn">Зачем вызывать замерщика? Я могу дать размеры</button>
                <div class="accordion__block-panel">
                    <p class="text">Нет, команда мастеров все сами аккуратно доставят и внесут.</p>
                </div>
            </div>
            <div class="accordion__block">
                <button class="accordion__block-btn">Хотелось бы отделать балкон. Поможете?</button>
                <div class="accordion__block-panel">
                    <p class="text">Нет, команда мастеров все сами аккуратно доставят и внесут.</p>
                </div>
            </div>
            <div class="accordion__block">
                <button class="accordion__block-btn">Мне надо нанимать грузчиков для подъема?</button>
                <div class="accordion__block-panel">
                    <p class="text">Нет, команда мастеров все сами аккуратно доставят и внесут.</p>
                </div>
            </div>
        </section>
    </>
  }
  export default Accordion;

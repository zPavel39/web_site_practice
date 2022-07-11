import React from 'react';
import '../scss/App.scss';
import footer_logo from '../img/footer_logo.png'

function Footer() {
   return <>
        <footer class="footer">
            <div class="footer__container container">
                <div class="footer__left">
                    <img src={footer_logo} alt="logo" />
                    <span>© ООО “Окна Хаус”, 2011 - 2022</span>
                </div>
                <div class="footer__right">
                    <a href="">Политика кофиденциальности</a>
                    <a href="">Пользовательское соглашение</a>
                </div>
            </div>
        </footer>
   </>
}
export default Footer;
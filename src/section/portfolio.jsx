import React from "react";
import '../scss/App.scss';
import portfolio_image1 from '../img/portfolio_image1.png'
import portfolio_image2 from '../img/portfolio_image2.png'
import portfolio_image3 from '../img/portfolio_image3.png'
import portfolio_image4 from '../img/portfolio_image4.png'



function Portfolio() {
    return <>
        <section class="portfolio container">
            <h2 class="portfolio__title">Портфолио</h2>
            <ul class="portfolio__image">
                <li class="portfolio_image-item"><img src={portfolio_image1} /></li>
                <li class="portfolio_image-item"><img src={portfolio_image2} /></li>
                <li class="portfolio_image-item"><img src={portfolio_image3} /></li>
                <li class="portfolio_image-item"><img src={portfolio_image4} /></li>
            </ul>
        </section>
    </>
  }
  export default Portfolio;
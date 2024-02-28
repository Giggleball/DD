import {useTranslation} from "react-i18next";

import Layout from "../Layout/Layout.jsx";
import LargeImagesContainer from "../container/large-images-container.jsx";
import SmallImagesContainer from "../container/small-images-container.jsx";

// Images
import fries from '../../assets/img/fries.jpeg';
import veggies from '../../assets/img/veggies.jpeg';
import cupcake from '../../assets/img/cup-cake-white.jpeg';
import turban from '../../assets/img/turban-cake.jpg';
import spices from '../../assets/img/spices.jpeg';

function Home() {
    const {t} = useTranslation();
    return (
        <Layout>
            <div className="wrapper container-fluid home-page">
                <div>
                    <div className="container">
                        <h2 className="home-page__title">{t('home.title')}</h2>
                        <p>{t('home.content_1')}</p>
                        <p>{t('home.content_2')}</p>
                    </div>
                </div>

                <div className="container home-page__images">
                    <div className="row justify-content-center">
                        <LargeImagesContainer image={veggies} alt={"vegetables"}/>
                        <SmallImagesContainer firstImage={cupcake} firstAlt={"cupcakes with frosting"}
                                              secondImage={turban} secondAlt={"turban cake"}/>
                        <SmallImagesContainer firstImage={fries} firstAlt={"french fries"} secondImage={spices}
                                              secondAlt={"different spices on a table"}/>
                        <LargeImagesContainer image={veggies} alt={"vegetables"}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home

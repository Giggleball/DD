import {useTranslation} from "react-i18next";
import Layout from "../Layout/Layout.jsx";

import meetDesi from '../../assets/img/Desi_mag.jpeg';

function About() {

    const {t} = useTranslation();

    return (
        <Layout>
            <div className="container-fluid about">
                <div className="row justify-content-md-center align-items-center">
                    <div className="col-md-6 about-img__container">
                        <img className="about-img__container-img" src={meetDesi} alt="Picture of Desiree"/>
                    </div>
                    <div className="col-md-6 about-content">
                        <h1 className="about-content__title">{t('about.title')}</h1><br/>
                        <h5 className="about-content__sub-title">{t('about.sub-title')}</h5>
                        <p className="about-content__text">{t('about.content_1')}</p>
                        <p className="about-content__text">{t('about.content_2')}</p>
                        <p className="about-content__text">{t('about.content_3')}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About

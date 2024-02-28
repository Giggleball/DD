import {useTranslation} from "react-i18next";
import Layout from "../Layout/Layout.jsx";
import FAQList from "./faq-items.jsx";

function Faq() {
    const {t} = useTranslation();
    return (
        <Layout>
            <div className="container">
                <div className='row justify-content-md-center'>
                    <div className='col-md-8 faq'>
                        <h2 className="faq-heading">{t('faq.title')}</h2>
                        <p>{t('faq.info')}</p>
                        <FAQList/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Faq

import {useTranslation} from "react-i18next";
import Layout from "../Layout/Layout.jsx";
import ReviewList from "./review-list.jsx";
import headerImage from '../../assets/img/header_Reviews.png'

function Reviews() {
    const {t} = useTranslation();
    return (
        <Layout>
            <div className="container review">
                <div className='row'>
                    <div className='col align-self-start justify-content-center'>
                        <img className="review-header--right-image" src={headerImage} alt="speech bubbles"/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col align-self-center justify-content-center'>
                        <h3 className="text-center">{t('review.title')}</h3>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md justify-content-center'>
                        <img className="review-header--left-image" src={headerImage} alt="speech bubbles"/>
                    </div>
                </div>

                <div className='review-content row'>
                    <div className='col-md-4 offset-md-3'>
                        <ReviewList reviewNumber={0}/>
                    </div>

                    <div className='col-md-4 offset-md-4'>
                        <ReviewList reviewNumber={1}/>
                    </div>
                </div>
                <div className='review-content row'>
                    <div className='col-md-4 offset-md-5'>
                        <ReviewList reviewNumber={2}/>
                    </div>

                    <div className='col-md-4 offset-md-6'>
                        <ReviewList reviewNumber={3}/>
                    </div>
                </div>
                <div className='review-content row'>
                    <div className='col-md-4 offset-md-3'>
                        <ReviewList reviewNumber={4}/>
                    </div>
                </div>

                <div className='review-content row'>
                    <div className='col-md-4 offset-md-4'>
                        <ReviewList reviewNumber={5}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Reviews;

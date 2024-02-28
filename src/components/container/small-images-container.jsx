const SmallImageContainer = ({firstImage, firstAlt, secondImage, secondAlt}) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img className="space" src={firstImage} alt={firstAlt}/>
            </div>
            <div className="card">
                <img className="space" src={secondImage} alt={secondAlt}/>
            </div>
        </div>
    )
}

export default SmallImageContainer;

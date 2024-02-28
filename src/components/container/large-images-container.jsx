const LargeImageContainer = ({image, alt}) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img className="side top" src={image} alt={alt}/>
            </div>
        </div>
    )
}

export default LargeImageContainer;

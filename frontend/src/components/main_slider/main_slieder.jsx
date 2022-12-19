import slide_1 from '../../images/rektor.png'
import slide_2 from '../../images/8d00fb00de_1624436529.jpg'

function MainSlider() {
  return (
    <>
        <div className="header_img">
            <div className="container-fluid">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="" src={`${slide_1}`} width="100%" height="100%" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img className="" src={`${slide_2}`} width="100%" height="100%" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img className="" src={`${slide_1}`} width="100%" height="100%" alt=""/>
                    </div>
                </div>
                <button className="carousel-control-prev slider__btn" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next slider__btn" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            </div>
        </div>
    </>
  );
}

export default MainSlider;

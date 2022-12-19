import {Helmet} from "react-helmet";
import {useEffect} from 'react'

function Footer() {
    return (
        <>
            <div className="container-fluid">
                <footer className="footer d-flex align-items-center">
                    <div className="gerb">
                        <img className="mt--3" src="https://logobank.uz:8005/media/logos_png/%D0%B3%D0%B5%D1%80%D0%B1_%D0%A3%D0%B7%D0%B1_%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-01.png" alt="" width="100" height="100"/>
                    </div>
                    <div className="location">
                        <h4>Manzil: Toshkent sh. Navoiy ko’chasi, 32 uy, 100011</h4>
                        <p>Telefon: (998-71)244-79-20 Faks: (998-71)244-79-17        </p>
                        <p>E-mail: info@tcti.uz, txti_rektor@edu.uz, @tktimatbuotxizmati</p>
                    </div>
                    <Helmet>
                        <script src="../../js/lang_data.js" type="text/javascript" />
                    </Helmet>
                </footer>
            </div>
        </>
    );
}

export default Footer;

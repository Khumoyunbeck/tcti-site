import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';

function Announcements() {
    const { lang, setLang } = useContext(LanguageContext);
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/announcements/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAnnouncements(data.reverse())
            });
    }, [])
    return (
        <>
            <div className="body_Naujienos_wrapper2">
                <div className="page_body_Naujienos2">
                    <h2 className="publics_1">{context[lang].publics.first}</h2>
                </div>
                <div className="page_body_Naujienos_the_loop_wrapper2">
                    <div className="data_elonlar_wrapper ">
                        {announcements.map(item => (
                            <a href={`/announcements/${item.id}`} className="news_item">
                                <div className="card ">
                                    <img className="card-img-top" src={item.img} alt="Card image cap" width="150px"
                                        height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title elon_title">{item[`title_${lang}`]}</h5>
                                        <p className="card-text the_loop_p2 elon_body" >
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="roditi_dougiau_button">

                    </div>
                </div>
            </div>
        </>
    );
}

export default Announcements;

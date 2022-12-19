import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';

function News() {
    const { lang, setLang } = useContext(LanguageContext);
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data.reverse())
            });
    }, [])
    return (
        <>
            <div className="body_Naujienos_wrapper">
                <div className="page_body_Naujienos">
                    <h2 className="news_1">{context[lang].news.first}</h2>
                </div>
                <div className="page_body_Naujienos_the_loop_wrapper paddingNews list-wrapper">
                    {news.map(news_item => (
                        <a href={`/news/${news_item.id}`}>
                            <div className="the_loop_img list-item">
                                <img src={`${news_item.img}`} className="newsImage" width="250px" height="250px" alt="" />
                                <h5 className="the_loop_text textOverflow news_title">{news_item[`title_${lang}`]}</h5>
                                <p className="the_loop_p news_date">{news_item.date}</p>
                            </div>
                        </a>
                    ))}
                    <div className="roditi_dougiau_button">

                    </div>
                </div>
                <div id="pagination-container" className="light-theme simple-pagination"></div>
            </div>
        </>
    );
}

export default News;

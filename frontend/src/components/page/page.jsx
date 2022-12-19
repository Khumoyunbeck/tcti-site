import { useState, useEffect, useContext } from "react";
import { Context as LanguageContext } from "../../Context/Language";
import context from "../../lang/lang";
import { useParams } from "react-router-dom";

function PageOpened() {
  const { lang, setLang } = useContext(LanguageContext);
  const { id } = useParams();
  const [page, setPage] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/sub_categories/get/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPage(data);
      });
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="sn-container">
              {page.map((item) => (
                <div className="sn-content">
                  <h1 className="sn-title">{item[`section_title_${lang}`]}</h1>
                  <div
                    className="mainBody"
                    dangerouslySetInnerHTML={{
                      __html: item[`section_main_${lang}`],
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageOpened;

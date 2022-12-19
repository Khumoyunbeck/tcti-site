import "./header.css";
import Logo from "../../images/logo.png";
import uzFlag from "../../images/uz.png";
import ruFlag from "../../images/ru.png";
import enFlag from "../../images/eng.png";
import Icon from "../../images/icon.svg";
import { useState, useEffect, useContext, useRef } from "react";
import { Context as LanguageContext } from "../../Context/Language";
import context from "../../lang/lang";

function Header() {
  const innerMenu = useRef();
  const header = useRef();
  const { lang, setLang } = useContext(LanguageContext);
  const [allSc, setAllSc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/all_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllSc(data);
      });
  }, []);
  const [consistsSc, setConsistsSc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/consists_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setConsistsSc(data);
      });
  }, []);
  const [subStudentSc, setSubStudentSc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/sub_student_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSubStudentSc(data);
      });
  }, []);
  const [studentSc, setStudentSc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/student_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStudentSc(data);
      });
  }, []);
  const [workingSc, setWorkingSc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/working_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWorkingSc(data);
      });
  }, []);
  const [contactsSc, setContactsSc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/contacts_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContactsSc(data);
      });
  }, []);
  const [interactiveSc, setInteractiveSc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/interactive_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInteractiveSc(data);
      });
  }, []);
  const [corruptionSc, setCorruptionSc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/corruption_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCorruptionSc(data);
      });
  }, []);
  const [allList, setAllList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/sub_categories/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllList(data);
      });
  }, []);
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const burgerIcon = useRef();
  return (
    <div className="wrapperheader" ref={header}>
      <div className="containerheader container-fluid">
        <div className="page_header_wrapper">
          <div className="header_Logo">
            <img src={`${Logo}`} alt="" />
            <div className="logo_name">
              <h5>
                {context[lang].logo.first} <br />
                {context[lang].logo.second} <br />
                {context[lang].logo.third}
              </h5>
            </div>
          </div>
          <p
            className="burger_wrapper"
            onClick={(e) => {
              e.preventDefault();
              innerMenu.current.classList.toggle("opened");
              header.current.classList.toggle("fixed_block");
              if (
                burgerIcon.current.src ==
                "https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-5.png"
              ) {
                burgerIcon.current.setAttribute(
                  "src",
                  "https://www.freeiconspng.com/uploads/close-button-png-22.png"
                );
                // burgerIcon.current.setAttribute('width', "50")
              } else {
                burgerIcon.current.setAttribute(
                  "src",
                  "https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-5.png"
                );
                // burgerIcon.current.setAttribute('width', "50")
              }
            }}
          >
            <img
              ref={burgerIcon}
              src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-5.png"
              alt="burger_menu"
              width={50}
            />
          </p>
          <div className="header_nav">
            <ul>
              <li className="header_nav_li dropdown">
                <a
                  className="btn font-weight-bold dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {context[lang].header.first}
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-6">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Icon} alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">Umumiy Ma'lumotlar</h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, repudiandae! Ipsam cupiditate asperiores
                          aut quod dolorem, recusandae numquam, officiis labore
                          nemo placeat reiciendis excepturi voluptates
                          doloribus, quasi fugit saepe incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {allSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {context[lang].header.second}
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div className="d-flex row dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-6">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Icon} alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">Tuzulma</h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, repudiandae! Ipsam cupiditate asperiores
                          aut quod dolorem, recusandae numquam, officiis labore
                          nemo placeat reiciendis excepturi voluptates
                          doloribus, quasi fugit saepe incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {context[lang].underCategory.first ? (
                          <>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/1`}
                              >
                                {context[lang].underCategory.first}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/2`}
                              >
                                {context[lang].underCategory.second}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/3`}
                              >
                                {context[lang].underCategory.third}
                              </a>
                            </li>
                          </>
                        ) : (
                          ""
                        )}
                        {consistsSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {context[lang].header.third}
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-6">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Icon} alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">Umumiy Ma'lumotlar</h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, repudiandae! Ipsam cupiditate asperiores
                          aut quod dolorem, recusandae numquam, officiis labore
                          nemo placeat reiciendis excepturi voluptates
                          doloribus, quasi fugit saepe incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {subStudentSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {context[lang].header.fourth}
                </a>
                <ul
                  className="dropdown-menu innerDropDown_4"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-6">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Icon} alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">Umumiy Ma'lumotlar</h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, repudiandae! Ipsam cupiditate asperiores
                          aut quod dolorem, recusandae numquam, officiis labore
                          nemo placeat reiciendis excepturi voluptates
                          doloribus, quasi fugit saepe incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {studentSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {context[lang].header.fivth}
                </a>
                <ul
                  className="dropdown-menu innerDropDown_5"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-6">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Icon} alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">Umumiy Ma'lumotlar</h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, repudiandae! Ipsam cupiditate asperiores
                          aut quod dolorem, recusandae numquam, officiis labore
                          nemo placeat reiciendis excepturi voluptates
                          doloribus, quasi fugit saepe incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {workingSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {context[lang].header.sixth}
                </a>
                <ul
                  className="dropdown-menu innerDropDown_6"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-6">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Icon} alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">Umumiy Ma'lumotlar</h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, repudiandae! Ipsam cupiditate asperiores
                          aut quod dolorem, recusandae numquam, officiis labore
                          nemo placeat reiciendis excepturi voluptates
                          doloribus, quasi fugit saepe incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {contactsSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {context[lang].sub_header.first}
                </a>
                <ul
                  className="dropdown-menu innerDropDown_7"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-6">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Icon} alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">Umumiy Ma'lumotlar</h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, repudiandae! Ipsam cupiditate asperiores
                          aut quod dolorem, recusandae numquam, officiis labore
                          nemo placeat reiciendis excepturi voluptates
                          doloribus, quasi fugit saepe incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {interactiveSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  className="btn font-weight-bold  dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {context[lang].sub_header.second}
                </a>
                <ul
                  className="dropdown-menu innerDropDown_8"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-6">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Icon} alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">Umumiy Ma'lumotlar</h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa, repudiandae! Ipsam cupiditate asperiores
                          aut quod dolorem, recusandae numquam, officiis labore
                          nemo placeat reiciendis excepturi voluptates
                          doloribus, quasi fugit saepe incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {corruptionSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
          <div className="header_nav_news">
            <ul className="sub_menu__wrapper">
              <li className="header_nav_li dropdown">
                <a
                  href="/"
                  className="header_nav_link font-weight-normal font-weight-normal dropbtn nav_news_link"
                >
                  <span className="sub_header_2">
                    {context[lang].sub_header.third}: (+99871)244-78-49
                  </span>
                </a>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  href="/"
                  className="header_nav_link font-weight-normal dropbtn nav_news_link"
                >
                  <span className="sub_header_2">
                    {context[lang].sub_header.fourth}
                  </span>
                </a>
              </li>
              <li className="header_nav_li dropdown">
                <a
                  href="/"
                  className="header_nav_link font-weight-normal dropbtn nav_news_link"
                >
                  <span className="sub_header_2">
                    {context[lang].sub_header.fivth}
                  </span>
                </a>
              </li>
              <li className="header_nav_li none_hover dropdown">
                <div className="commands">
                  <div className="gerb">
                    <img
                      className="mt--3"
                      src="https://logobank.uz:8005/media/logos_png/%D0%B3%D0%B5%D1%80%D0%B1_%D0%A3%D0%B7%D0%B1_%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-01.png"
                      alt=""
                      width="25"
                    />
                  </div>
                  <button
                    className="zoom_btn zoom_minus"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = parseInt(Page.style.zoom) - 10 + "%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A-
                  </button>
                  <button
                    className="zoom_btn zoom_default"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = "100%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A
                  </button>
                  <button
                    className="zoom_btn zoom_plus"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = parseInt(Page.style.zoom) + 10 + "%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A+
                  </button>
                  <button
                    className="zoom_btn theme_btn"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      Page.classList.toggle("greyscale");
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/61/61410.png"
                      alt=""
                      width="17"
                    />
                  </button>
                </div>
              </li>
              <li className="header_nav_li lang__selector ml-5">
                <button
                  className="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("uz");
                  }}
                >
                  <img src={`${uzFlag}`} alt="translator" width="20px" />
                </button>
                <button
                  className="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("ru");
                  }}
                >
                  <img src={`${ruFlag}`} alt="translator" width="20px" />
                </button>
                <button
                  className="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("en");
                  }}
                >
                  <img src={`${enFlag}`} alt="translator" width="20px" />
                </button>
              </li>
            </ul>
          </div>
          <div ref={innerMenu} className="inner_menu">
            <ul className="catalog-list">
              <li>
                <h4 className="main_text">{context[lang].header.first}</h4>
                <ul>
                  {allSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.second}</h4>
                <ul>
                  {consistsSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.third}</h4>
                <ul>
                  {subStudentSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.fourth}</h4>
                <ul>
                  {studentSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.fivth}</h4>
                <ul>
                  {workingSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.sixth}</h4>
                <ul>
                  {contactsSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].sub_header.first}</h4>
                <ul>
                  {interactiveSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].sub_header.second}</h4>
                <ul>
                  {corruptionSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

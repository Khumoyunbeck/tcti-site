CREATE TABLE news(
    id serial PRIMARY KEY,
    img text,
    title_uz text,
    body_uz text,
    title_ru text,
    body_ru text,
    title_en text,
    body_en text,
    date text
);

CREATE TABLE announcements(
    id serial PRIMARY KEY,
    img text,
    title_uz text,
    body_uz text,
    title_ru text,
    body_ru text,
    title_en text,
    body_en text,
    date text
);

CREATE TABLE sections(
    id serial PRIMARY KEY,
    section_name_uz text,
    section_name_ru text,
    section_name_en text,
    section_title_uz text,
    section_title_ru text,
    section_title_en text,
    section_main_uz text,
    section_main_ru text,
    section_main_en text,
    menu_id int,
    filter_id text
);

CREATE TABLE media(
    id serial PRIMARY KEY,
    path text
);
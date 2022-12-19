import {useRef} from 'react'
import { Editor } from '@tinymce/tinymce-react';

function AddPageForm() {
    const page_name_uz = useRef()
    const page_name_ru = useRef()
    const page_name_en = useRef()
    const page_main_id = useRef()
    const page_filter_id = useRef()
    const page_title_uz = useRef()
    const page_title_ru = useRef()
    const page_title_en = useRef()
    const page_main_uz = useRef()
    const page_main_ru = useRef()
    const page_main_en = useRef()
    return (
        <>
            <div className="content">
                <div className="container-fluid">
                    <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                        <h4>Yangi sahifa qo'shish</h4>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div className="card">
                        <div className="card-body">
                            <h4 className="mt-0 header-title">Yangi Sahifa qo'shish</h4>
                            <form autoComplete="off" className="el_form page_form" onSubmit={(e) => {
                                e.preventDefault()
                                let body = {
                                    section_name_uz: page_name_uz.current.value, 
                                    section_name_ru: page_name_ru.current.value, 
                                    section_name_en: page_name_en.current.value, 
                                    section_title_uz: page_title_uz.current.value, 
                                    section_title_ru: page_title_ru.current.value, 
                                    section_title_en: page_title_en.current.value, 
                                    section_main_uz: page_main_uz.current.getContent(), 
                                    section_main_ru: page_main_ru.current.getContent(), 
                                    section_main_en: page_main_en.current.getContent(), 
                                    menu_id: page_main_id.current.value, 
                                    filter_id: page_filter_id.current.value
                                }
                                fetch('http://localhost:3001/sub_categories/add', {
                                    method: 'POST',
                                    headers: {
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(
                                        body
                                    )
                                }).then(function(res){ return res.json(); })
                                .then(function(data){console.log(data);})
                                window.location = '/admin/page'
                            }}>
                            <div className="form-group row">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Nomini kiriting o'zbek
                                tilida</label>
                                <div className="col-sm-10">
                                <input type="text" ref={page_name_uz} className="form-control page_name_uz" name="section_name_uz" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Nomini kiriting rus
                                tilida</label>
                                <div className="col-sm-10">
                                <input type="text" ref={page_name_ru} className="form-control page_name_ru" name="section_name_ru" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Nomini kiriting ingliz
                                tilida</label>
                                <div className="col-sm-10" >
                                <input type="text" className="form-control page_name_en" name="section_name_en" ref={page_name_en} required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Bo'lim turini tanlang</label>
                                <div className="col-sm-10" >
                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={page_main_id}>
                                    <option value="0">Kerak emas</option>
                                    <option value="1">Umumiy Ma'lumotlar</option>
                                    <option value="2">Tuzilma</option>
                                    <option value="3">Abituriyent</option>
                                    <option value="4">Talabalarga</option>
                                    <option value="5">Faoliyat</option>
                                    <option value="6">Aloqalar</option>
                                    <option value="7">INTERAKTIV XIZMAT</option>
                                    <option value="8">KORRUPSIYAGA QARSHI KURASHISH</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Yo'nalishni tanlang</label>
                                <div className="col-sm-10" >
                                <select className="filter_selector form-control" name="menu_id" ref={page_filter_id}>
                                    <option value="0">Kerak emas</option>
                                    <option value="Organik Kimyo va Asosiy organik sintez texnologyalari">Organik Kimyo va Asosiy organik sintez texnologyalari</option>
                                    <option value="Neft-gazni qayta ishlash kimyoviy texnologyalari">Neft-gazni qayta ishlash kimyoviy texnologyalari</option>
                                    <option value="sellyuza va yogochsozlik texnologyalari">sellyuza va yogochsozlik texnologyalari</option>
                                    <option value="Fizka va elektrotexnika">Fizka va elektrotexnika</option>
                                    <option value="Noorganik Moddalar Kimyoviy texnoogyasi">Noorganik Moddalar Kimyoviy texnoogyasi</option>
                                    <option value="Silikat materiallar va nodir, kamyog metallar texnologyasi">Silikat materiallar va nodir, kamyog metallar texnologyasi</option>
                                    <option value="Kimoviy texnologik jarayon va kurilmalar">Kimoviy texnologik jarayon va kurilmalar</option>
                                    <option value="Noorganik, analitik, fizikaviy va kolloid kimyo">Noorganik, analitik, fizikaviy va kolloid kimyo</option>
                                    <option value="Yuqori molekulali birikmalar va plastmassalar texnologiyasi">Yuqori molekulali birikmalar va plastmassalar texnologiyasi</option>
                                    <option value="Oziq-ovqat maxsulotlari texnologyasi">Oziq-ovqat maxsulotlari texnologyasi </option>
                                    <option value="Gosht, sut va konserva maxsulotlar texnologyasi">Gosht, sut va konserva maxsulotlar texnologyasi </option>
                                    <option value="Oziq-ovqat sanoati mashina va jihozlari-maxanika asoslari">Oziq-ovqat sanoati mashina va jihozlari-maxanika asoslari</option>
                                    <option value="Informatika, avtomatlashtirish va boshqaruv">Informatika, avtomatlashtirish va boshqaruv</option>
                                    <option value="Sanoat ikticodyoti va Menejmenti">Sanoat ikticodyoti va Menejmenti</option>
                                    <option value="Sifat menejmenti va maxsulotlar xavsizligi">Sifat menejmenti va maxsulotlar xavsizligi</option>
                                    <option value="Kasb talim">Kasb talim</option>
                                    <option value="oliy matematika">oliy matematika</option>
                                    <option value="O`zbek Tili va adabyoti">O`zbek Tili va adabyoti</option>
                                    <option value="Enologiya, bijgish maxsulotlari va alkogolsiz ichimliklar texnologyasi va servis">Enologiya, bijgish maxsulotlari va alkogolsiz ichimliklar texnologyasi va servis</option>
                                    <option value="Biotexnologya">Biotexnologya</option>
                                    <option value="Sanoat ekologyasi">Sanoat ekologyasi</option>
                                    <option value="Ijtimoiy-siyosiy fanlar">Ijtimoiy-siyosiy fanlar</option>
                                    <option value="Vionchlik soxasi mutaxassislarninig malakasni oshirish va qayta tayorlash markazi">Vionchlik soxasi mutaxassislarninig malakasni oshirish va qayta tayorlash markazi</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Sarlavhasini kiriting o'zbek
                                tilida</label>
                                <div className="col-sm-10" >
                                <input ref={page_title_uz} type="text" className="form-control page_title_uz" name="section_title_uz" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Sarlavhasini kiriting rus
                                tilida</label>
                                <div className="col-sm-10" >
                                <input ref={page_title_ru} type="text" className="form-control page_title_ru" name="section_title_ru" required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Sarlavhasini kiriting ingliz
                                tilida</label>
                                <div className="col-sm-10" >
                                <input ref={page_title_en} type="text" className="form-control page_title_en" name="section_title_en" required/>
                                </div>
                            </div>
                            <div className="pageBody mt-3">
                                <label className="col-sm-2 col-form-label">Sahifaning asosini kiriting o'zbek tilida</label>
                                <Editor
                                    onInit={(evt, editor) => page_main_uz.current = editor}
                                    
                                    init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount image code style'
                                    ],
                                    toolbar: 'code | undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help | image | media | link ',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            </div>
                            <div className="pageBody mt-3">
                                <label className="col-sm-2 col-form-label">Sahifaning asosini kiriting rus tilida</label>
                                <Editor
                                    onInit={(evt, editor) => page_main_ru.current = editor}
                                    
                                    init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'code advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount image'
                                    ],
                                    toolbar: 'code | undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help | image | media | link',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            </div>
                            <div className="pageBody mt-3">
                                <label className="col-sm-2 col-form-label">Sahifaning asosini kiriting ingliz tilida</label>
                                <Editor
                                    onInit={(evt, editor) => page_main_en.current = editor}
                                    
                                    init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        'code advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount image'
                                    ],
                                    toolbar: 'code | undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help | image | media | link',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            </div>
                            <div className="mt-4">
                            <a href="/api/news/all" className="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                            <button type="submit" className="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddPageForm;

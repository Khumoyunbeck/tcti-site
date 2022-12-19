import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import Image from '../../images/d374ecf67a_1555577918.jpg'
import Image2 from '../../images/7a48e85ae2_1614595249.jpg'
import Image3 from '../../images/4f264ae87f_1614598711.jpg'

function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
  return (
        <>
            <Header />
            <div className='page_main'>
            <div className="row">
            <div className="col-lg-10 col-md-12">
                <div className="tab">
                <button className="tablinks" onClick={() => {
                        tabTwo.current.classList.remove("opened")
                        tabThree.current.classList.remove("opened")
                        tabOne.current.classList.add("opened")
                    }} id="defaultOpen">Bo'lim haqida</button>
                    <button className="tablinks" onClick={() => {
                        tabOne.current.classList.remove("opened")
                        tabThree.current.classList.remove("opened")
                        tabTwo.current.classList.add("opened")
                    }} id="defaultOpen">Bizning
                        maqsadimiz</button>
                    <button className="tablinks" onClick={() => {
                        tabOne.current.classList.remove("opened")
                        tabTwo.current.classList.remove("opened")
                        tabThree.current.classList.add("opened")
                    }} id="defaultOpen">Bizning
                        vazifamiz</button>
                </div>
                <div id="About" ref={tabOne} className="tabcontent opened">
                <h3>Bo'lim haqida</h3>
                    <p>Kadrlar tayyorlash Milliy dasturida belgilangan vazifalarning bajarilishini, o‘quv-ta’lim jarayonida O’zbekiston Respublikasi Prezidentining farmonlari, Vazirlar Mahkamasining oliy ta’lim sohasiga oid qarorlari, Oliy va o‘rta maxsus ta’lim vazirligining me’yoriy xujjatlari va uslubiy ko‘rsatmalarining ijro etilishini o‘z vaqtida nazorat va tahlil qilish va istiqboli rejalarni ishlab chiqish. Fakultetlar, kafedralar, akademik litseylar va boshqa tarkibiy bo‘linmalarning o‘quv, o‘quv-uslubiy, ma’naviy-ma’rifiy, ilmiy-tadqiqot, kadrlar malakasini oshirish va qayta tayyorlash, O‘zbekiston Respublikasi qonunlari, Prezident farmonlari, qarorlari, farmoyishlari, Vazirlar Mahkamasi qarorlari va farmoyishlari, Oliy va o‘rta maxsus ta’lim vazirligi Hay’ati qarorlari, buyruq va modemnomalari, universitet ichki buyruqlari va Ilmiy kengash qarorlari bajarilishini nazorat qiladi va ta’lim sohasidagi me’yoriy xujjatlarning bajarilishini nazoratini va monitoringini olib borilishini tashkil qiladi. Universitet ta’lim sohasida ilg‘or tajribalarini o‘rganadi, umumlashtiradi va ularni ommalashtirishga tavsiyalar beradi. Professor-o‘qituvchilar faoliyatini baholashning reyting usullarini va mezonlarini ishlab chiqadi hamda tatbiq etilishini bo‘lim xodimlari hamda vaqtinchalik tuzilgan ishchi gurux bilan birgalikda amalga oshiradi. Nazorat natijalari hamda ko‘rsatilgan kamchiliklar va muammolarni bartaraf etish bo‘yicha aniq takliflarni universitet rahbariyatiga taqdim etadi.</p>
                </div>

                <div id="Functions" ref={tabTwo} className="tabcontent">
                <h3>Bizning maqsadimiz</h3>
                    <p>Institutda  ta’lim standartlari monitoringini tashkil qilish masalalari bo‘yicha amaliy va uslubiy yordam ko‘rsatadi. Universitetda ta’limning holati va rivojlanishi haqida ma’lumotlar bankini tashkil qiladi va tartibga solib turadi Talabalar bilimini reyting tizimi asosida xolis va adolatli baxolanishini nazorat qiladi. Zarur xollarda yakuniy nazoratdan keyin fanlar bo‘yicha ekspertlar bilan birgalikda qo‘shimcha sinovlar o‘tkazadi. Institutda va unga tegishli ta’lim muassasalarida (fakultetlar,kafedralar, malaka oshirish fakultetlari, akademik litseylar va boshqa tarkibiy bo‘linmalar) ta’lim standartlariga hamda ta’limga oid me’yoriy xujjatlarga amal qilinishini tekshiradi. . Kadrlar tayyorlash sifatini yaxshilash maqsadida kurs loyihasi (ishlari)ni, bitiruv malakaviy ishlarni hamda magistrlik dissertatsiyasini himoya qilish, davlat attestatsiyalarining o‘tkazilishini, barcha turdagi nazariy va amaliy mashg‘ulotlarni nazorat qiladi.</p>
                </div>
                

                <div id="Management" ref={tabThree} className="tabcontent">
                <h3>Bizning vazifamiz</h3>
                    <p> Toshkent kimyo- texnologiya institutida kirim qilingan hujjatlarni ijrochilarga yetkazish, ularning ijrosini belgilangan muddatlarda sifatli taminlash O‘zbekiston Respublikasi Vazirlar Mahkamasining 1999 yil 12-yanvardagi “Ijro intizomini mustaxkamlash chora-tadbirlari tug‘risida”gi 12-sonli qarori, 1999 yil 29-martdagi “O‘zbekiston Respuyulikasi davlat hokimiyati va boshqaruv organlarida ish yuritish va ijro nazoratini tashkil etish bo‘yicha normativ hujjatlarni tasdiqlash haqida”gi 140-sonli qarori va O‘zbekiston Respublikasining Bosh vaziri tomonidan 2009 yil 28-avgustda 11-10 – son bilan tasdiqlangan “Vazirliklar, davlat qo‘mitalari, idoralari, xo‘jalik birlashmalari, ularning tarkibiy va xuddudiy bo‘linmalarida hujjatlar bilan ishlashni tashkil etish hamda ijro intizomining ahvoli monitoringini olib borish Tartibi” hamda O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligining 2009 yil 8-sentyabrdagi 309 – sonli va 2010 yil 21-maydagi 195 – sonli buyruqlari asosida ishlab chiqilib institut  rektori tomonidan tasdiqlangan “Toshkent kimyo- texnologiya institutida ish yuritish va hujjatlar ijrosi nazoratini tashkil qilish bo‘yicha YO‘RIQNOMASI”ga asosan olib boriladi.
                    </p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-10">
            <div className="teachers">
                    <div className="wrapper-personal">
                        <div className="photo-personal">
                            <img className="images-personal" src={Image} alt="About us"/>
                            <div className="photo__large">
                                <div className="bg-text">
                                    <span className="degree">Bo'lim boshlig'i</span>
                                    <span className="info">Kadirov Ulug'bek Ravshanovich

                                        Telefon: (8 371) 244-79-23
                                        <br/>
                                        E-mail: nazorat@tcti.uz, tkti.nazorat@mail.ru</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Kadirov Ulug'bek Ravshanovich</h6>
                    </div>
                    <div className="wrapper-personal">
                        <div className="photo-personal">
                            <img className="images-personal" src={Image2} alt="About us"/>
                            <div className="photo__large">
                                <div className="bg-text">
                                    <span className="degree">Uslubchi</span>
                                    <span className="info">Boymatov Sardorjon Isomiddin o‘gli

                                        Telefon: (+99890) 112-50-53
                                        <br/>
                                        E-mail: sardor6387665@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Boymatov Sardorjon Isomiddin o‘gli</h6>
                    </div>
                    <div className="wrapper-personal">
                        <div className="photo-personal">
                            <img className="images-personal" src={Image3} alt="About us"/>
                            <div className="photo__large">
                                <div className="bg-text">
                                    <span className="degree">Inspektor</span>
                                    <span className="info">Umarjonov Qodirjon Qobiljon o‘gli

                                        Telefon: (+99894) 664-38-96
                                        <br/>
                                        E-mail: umarjonovqodirjon@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Umarjonov Qodirjon Qobiljon o‘gli</h6>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <Footer />
        </>
  );
}

export default PageStaticOne;

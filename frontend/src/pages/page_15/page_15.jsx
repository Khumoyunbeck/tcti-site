import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import Image from '../../images/356a192b79_1644576467.png'
import Image2 from '../../images/da4b9237ba_1644576474.png'

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
                    <p>
                        
                        Babaxanova Zebo Abdullaevna 2018-yil 15-oktabrdan boshlab Toshkent kimyo-texnologiya instituti xalqaro hamkorlik bo‘limi boshlig’i sifatida faoliyat yuritib kelmoqda. 1993-yilda Toshkent davlat universitetini tamomlagan. 2019-yilda Texnika fanlari doktori (DSc) ilmiy darajasini olgan. Ilm fan sohasida qo’shgan hissalari uchun Babaxanova. Z.A 2014-yilda “Shuhrat” medali bilan taqdirlangan. Dunyoning turli mamlakatlarida malaka oshirgan, xalqaro o'quv kurslari va seminar-treninglarda ishtirok etgan hamda yetakchi oliy ta'lim muassasalarida ta'lim bergan.
                        Saidahmadov Saidumarxon Saidabror o’g’li 2021-yil 9-martdan buyon Xalqaro hamkorlik bo’limi uslubchisi sifatida faoliyat yuritib kelmoqda.
<br/>
                        Saidahmadov S.S. 2021-yil Toshkent kimyo-texnologiya institutini tamomlagan. 2019-yilda Ispaniyaning Kantabriya universitetida tahsil olgan. Germaniyaning Weihenstephan Treisdorf amaliy fanlar universitetida malaka oshirgan.</p>
                </div>

                <div id="Functions" ref={tabTwo} className="tabcontent">
                <h3>Bizning maqsadimiz</h3>
                    <p>2011 yilning 15-23 aprel kunlari Buyuk Britaniyaning Ochiq niversitetida o’tkazilib, unda TKTIdan dots. Qoraboev D., Ismailov A.A., O.R. Maksudovlar qatnashdilar. Treningda masofaviy o’qitish portalini tashkil etish uchun muxim bo’lgan moodle dasturi yordamida o’quv majmualarini veb-saytga joylashtirish bo’yicha o’quv kursida ishtirok etdilar va sertifikat bilan taqdirlandilar. Dasturga aloqador ma’lumotlar quyidagi kurslar shaklida distance.candi.uz portaliga joylashtirildi:
<br/>
                        1-kurs. Analitik kimyo va texnik parametrlarni o’lchash metodlari.
                        <br/>     
                        2-kurs. Molekula va jarayonlarni modellashtirish.
                        <br/>    
                        –          2011 yilning 13-18 iyun kunlari loyihaning navbatdagi seminur  uchrashuvi Urgench Davlat universitetida bo’ldi, unda hamkor oliy ta’lim muassasalari vakillari ishtirok etdilar. TKTI dan rektor Turobjonov S.M, prorektor Qoraboev D., Ismailov A., B.Qosimovlar qatnashdilar. Uchrashuvda qo’yilgan vazifalarning muvaffaqiyatli bajarilishi borasidagi masalalar ko’rildi. Vena universiteti mutaxassislari tomonidan ma’lumotlarni veb-saytga joylashtirish bo’yicha qo’shimcha kurslar ham tashkil etildi.
                        <br/>    
                        –          2011 yil 28- oktyabrda  O’zbekiston Milliy universitetida o’tkazilib, unda Oliy va o’rta-maxsus ta’lim vazirining o’rinbosari M.Karimov, loyiha koordinatori P.Liberzayt, Evropa Ittifoqi monitoring bo’limi vakili D.Bekturova va O’zbekistonlik hamkor OTM professor-o’qituvchilari, stajyor-tadqiqodchilari, magistrlari qatnashdilar.
                        <br/>   
                        –          201 yil 31 oktyabr – 3 noyabr kunlari Axmad Yassaviy nomidagi Qozoq-Turk Xalqaro universitetida loyihaning 4- seminari bo’lib o’tdi. Unda TKTIdan prorektor D.Karabaev, A.Ismailov va O.Maksudovlar ham ishtirok etidilar.</p>
                </div>
                

                <div id="Management" ref={tabThree} className="tabcontent">
                <h3>Bizning vazifamiz</h3>
                    <p>Unda loyiha muvofiqlashtiruvchilari 2011 yilda bo’lib o’tgan ishlar yuzasidan hisobot berdilar va 2012 yilga mo’ljallangan rejalar muxokama qilindi.
                       <br/> Ikkinchi seminar monitoring tarzida o’tkazilib, 2012 yil 6 aprelda TKTIning katta majlislar zalida TEMPUS dasturining O’zbekistondagi muvofiqlashtiruvchisi –  A.K.Abduraxmanova, “Sanoatkontexnazorat” Davlat inspektsiyasi vakili O.Jo’raevlar ishtirok etdilar. Seminarda TKTI ishchi guruhi tomonidan amalga oshirilgan ishlar to’g’risida loyiha muvofiqlashtiruvchisi I.Alimov batafsil ko’rgazmali axborot berdi. Monitoringda 4 oy davomida loyixaning rejasida belgilangan vazifalarning ijro etilishi, bajarilgan ishlar, loyixa doirasida amalga oshirilgan xizmat safarlari xaqidagi ma’lumotlar umumlashtirildi va nazoratdan o’tkazildi. Seminar ishtirokchilari TKTIning H.Abdullaev-41 manzilida joylashgan o’quv binosida “CIBELES” loyihasi uchun ajratilgan maxsus auditoriya hamda ushbu loyiha doirasida keltirilgan jihozlar bilan tanishdilar. Monitoring kuni yakunida TEMPUS milliy ofisi tomonidan loyixaning bajarilishi ijobiy baxolandi va tegishli ko’rsatmalar berildi.
                       <br/>    –        2012 yilning 29 may kuni 14:30 da Samarqand qishloq xo’jaligi institutida CIBELES loyihasi ishtirokchilari guruhi amalga oshirayotgan ishlar yuzasidan monitoring bo’lib o’tdi. Unda TempusIV dasturi doirasidagi oraliq baholashni o’tkazish bo’yicha bosh direktori – EPRD konsortsiumi vakilasi Elizabetta Kadri xonim ham ishtirok etdi. Monitoringda Toshkent kimyo-texnologiya instituti katta o’qituvchisi X.Po’latov ishtirok etib,hamkor Oliy o’quv yurti sifatida faoliyat yuritayotgan Buxoro Davlat Universiteti, Urgench Davlat Universiteti, Samarqand Davlat qishloq xo’jaligi va agrar instituti kabilar bilan birga “Sanoat havfsizligi” sohasida bakalavriyat yo’nalishi ochish bo’yicha tegishli vazifalar amalga oshirilgani, O’zbekiston Respublikasidagi yirik sanoat korxonalaridan bo’lgan “O’zkimyosanoat” Davlat Aktsiyadorlik Kompaniyasi, Qo’ng’irot soda zavodi, Olmaliq tog’-metallurgiya kombinati va boshqa korxonalarning buyurtmalari asosida qabul kvotalari shakllantirilgani, Bolonya jarayonlarini hisobga olgan holda o’quv reja va dasturlari ishlab chiqilgani va 2012-2013 o’quv yilida ushbu yo’nalish bo’yicha bakalavriyaturaga talabalar qabul rejalashtirilayotgani bayon etildi
                        
                       <br/>  2012 yilning 18-23 iyun kunlari S.Seyfulin nomidagi Qozog’iston agrotexnika Universiteti (Qozog’iston)da loyixa doirasida amalga oshirilgan ishlarning muxokamasiga bag’ishlangan seminar-trening hamda xalqaro anjuman o’tkazildi. TKTI “Sanoat ekologiyasi” kafedrasi katta o’qituvchisi X.Po’latov ishtirok etdi. Seminarda Sanoat xavfsizligi bo’yicha Markaziy Osiyo davlatlaridan Qozog’iston-Britaniya texnika universiteti, Karaganda davlat universiteti (Qozog’iston), Kulob texnika universiteti (Tojikiston) va Qirg’iziston texnika universiteti) Evropa hamkor universitetlari (Turin Politexnika universiteti (Italiya), Sofiya kime-texnologiya universiteti (Bolgariya) ekspertlari ishtirokida bajarilgan ishlar yuzasidan davra suhbatlari bo’lib o’tdi. Turin politexnika universiteti professori Mikaella Domichelli (loyixa doirasidagi sanoat xavfsizligi yo’nalishi bo’yicha gurux raxbari), Bolgariyaning Sofiya kimyo texnologiya va metallurgiya universiteti xalqaro aloqalar fakulteti dekani Rossi Betcheva xamda O’zbekiston sanoatkontexnazorat davlat inspektsiyasi direktor muovini Ashurov Begzod o’zlari tomondan amalga oshirilgan ma’lumotlar asosidagi prezentatsion ” ma’ruzalari bilan ishtirok etdilar. Seminarda Sanoat xavszligi buyicha bakalavriatura va magistratura yo’nalishlari bo’yicha kompetentsiya shakllantirish, o’quv rejaning birlamchi shaklini ishlab chiqish kabi masalalar ko’rib chiqildi. Seminarda o’quv me’yoriy xujjatlarning monitoringi va ularga berilgan taqrizlar bo’yicha muxokama qilindi. Markaziy Osiyodan ekspert sifatida “Solar plyus” MChJ va  O’zbekiston Respublikasi Fanlar Akademiyasi Fizika-texnika instituti xodimlari qatnashdi.
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
                                    <span className="info">Babakhanova Zebo Abdullaevna
                                        <br/>
                                        Texnika fanlari doktori, professor
                                        <br/>
                                        E-mail: zebo.babakhanova@gmail.com
                                        <br/>
                                        Tel.: (+998 71) 244-77-26
                                        <br/>
                                        Veb-sayt: babakhanova.uz</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Babakhanova Zebo Abdullaevna</h6>
                    </div>
                    <div className="wrapper-personal">
                        <div className="photo-personal">
                            <img className="images-personal" src={Image2} alt="About us"/>
                            <div className="photo__large">
                                <div className="bg-text">
                                    <span className="degree">Uslubchisi</span>
                                    <span className="info">Saidaxmadov Saidumarxon Saidabror o’g’li
<br/>
                                        E-mail: tkti_xab@mail.ru
                                        <br/>
                                        Tel.: (+998 71) 244-77-26.</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Saidaxmadov Saidumarxon Saidabror o’g’li</h6>
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

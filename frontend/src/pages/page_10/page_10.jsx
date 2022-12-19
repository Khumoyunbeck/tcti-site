import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import Image from '../../images/93809a2de8_1621412188.jpg'

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
                    <p>Toshkent Kimyo-texnologiya institutining o‘quv bo‘limni asosiy  vazifalariga o‘quv jarayonini tashkil qilish, Davlat ta’lim standart­lari, namunaviy o‘quv rejalar va namunaviy o‘quv dasturlarini va boshqa me’yoriy xujjatlarni ishlab chiqish, o‘quv jarayonining grafigini, o‘quv rejalarni tuzish, mashg‘ulotlar jadvalini tuzishga rahbarlik qilish va uni fakultetlarda tuzilishini nazoratga olish, o‘quv ishlar xajmini aniqlab fakultet va kafedralar bo‘yicha shtat jadvallarini hamda soatbay yuklamalarni tuzish, o‘quv ishlarini bajarilishini tekshirish, institut yillik hisobotini tuzish, o‘quv jarayoniga reyting tizimi va yangi pedagogik texnologiyalarni joriy qilish, Davlat Attestatsiyalarni tashkil qilish va uni o‘tkazish etish, kvalifikatsion amaliyotlarni tashkil etish, semestrlar yakunidan talabalarni o‘zlashtirishini umumlashtirish, institut auditoriya fondidan foydalanishni tekshirish, mashg‘ulotlarni fan dasturlariga mos ravishda to‘liq o‘tishi va darslarga qatnashganligini tekshirish bo‘yicha dispetcherlik xizmatini tashkil qilish bilan bog‘liq bo‘lgan ishlarni o‘z ichiga oladi.</p>
                </div>

                <div id="Functions" ref={tabTwo} className="tabcontent">
                <h3>Bizning maqsadimiz</h3>
                    <p> “O‘zbekiston Respublikasi kadrlar tayyorlash milliy dasturi”ni joriy etishni uchinchi bosqichida o‘quv bo‘limi – yuqori malakali mutaxassislarni tayyorlash vazifalarini bajarishida quyidagilarga asosiy e’tibor qaratadi:
<br/>
                        Talabalarning bilimlarini reyting tizimi asosida nazorat qilishda, ularning mustaqil ishlarini o‘quv jarayoniga to‘g‘ri tadbiq qilish;
                        O‘quv jarayonini tasdiqlangan o‘quv va normativhuquqiy xujjatlar asosida tashkil qilish;
                        Professoro‘qituvchi va talabalarga yuqori darajada ishonch va e’tibor bilan ijobiy muhitni yaratish;
                        Iqtidorli talabalarni tanlab, ularni maqsadli, kasbiy mahoratlarini oshirish;
                        Yangi pedagogik texnologiyalarni joriy etish, professoro‘qituvchilarning pedagogik mahoratlarini oshirish, ishlab chiqarish korxonalarining yetuk mutaxassislarni o‘quv jarayoniga jalb etish;
                        Ishlab chiqarish bilan oliy ta’lim integratsiyasini yaxshilash;
                        O‘quvmetodik adabi         yotlar bazasini kengaytirish;
                        O‘quv jarayonini boshqarish va uni tashkil etishda axborot texnika  komunikatsiyalariga yaqindan yondashish.
                        O‘quv bo‘limini asosiy ish rejalari quyidagilardan iborat
                        <br/>  
                        O‘quv jarayoni grafigini tuzish (mart-aprel)
                        Yo‘nalish va mutaxassisliklar bo‘yicha o‘quv rejalarini tuzish (mart-aprel)
                        Yangi o‘quv yili o‘quv jarayonini rejalashtirish (aprel-avgust)
                        O‘quv jarayonini tashkil etish va nazorat qilish (o‘quv yili davomida)
                        Talabalar kontingenti monitoringini amalga oshirish (o‘quv yili davomida)
                        Kvalifikatsion amaliyotlarni tashkil etish va nazorat qilish (o‘quv yili davomida)
                        Davlat Attestatsiya yakunlarini o‘tkazilishini nazorat qilish (dekabr-yanvar, may-iyun).</p>
                </div>
                

                <div id="Management" ref={tabThree} className="tabcontent">
                <h3>Bizning vazifamiz</h3>
                    <p>Institutda o‘qitiladigan barcha bakalavriyat ta’lim yo‘nalishlari va magistratura mutaxassisliklari bo‘yicha Davlat ta’lim standartlari tuzilib Davlat Standarti tasdiqidan o‘tkazildi, Namunaviy fan dasturlari   o‘rnatilgan tartibga ko‘ra tasdiqlandi. Tasdiqlangan me’yoriy xujjatlar elektron nusxaga o‘tkazildi va ular bilan turdosh OTM ta’minlanmoqda.

                        Tayanch xisoblangan bakalavr ta’lim yo‘nalishlari va magistratura mutaxassisliklarining asosiy fanlari bo‘yicha vazirlikning talablariga ko‘ra O‘quv uslubiy majmualar yaratilmoqda;
                        
                        Institutda Davlat Test Markazi tomonidan o‘tkaziladigan attestatsiyaga puxta tayyorgarlik ko‘rish maqsadida, talabalarning qoldiq bilimlarini oshirishga yo‘naltirilgan barcha fanlardan testlar sinovlari o‘tkazilmoqda;
                        <br/> 
                        Toshkent Kimyo-texnologiya institutiga turdosh bo‘lgan OTMlari bilan “Elektron o‘quv-uslubiy majmualar va ta’limni modernizatsiyalashning ustivor yo‘nalishlari” deb nomlangan ilmiy-uslubiy semenarni o‘tkazilishi may oyining oxiriga rejalashtirilgan, bu haqida Oliy ta’lim vazirligining modemnomasi yuboriladi.
                        
                        O‘quv uslubiy bo‘lim Respublikamizdagi quyidagi Oliy ta’lim muassasalari bilan o‘quv va o‘quv-uslubiy ishlar bo‘yicha yaqindan ijodiy ishlar olib bormoqda:
                        
                        O‘zMU, TDTU, QQDU, TAQI, TTESI, TIMI, And.MII, FarPI, SamDU, UrgDU, BuxMTI, QarDU, NavDKI, Qarshi MII, JizPI, ToshFarmI, NamMTI va boshqalar.
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
                                    <span className="info"> Xabibullayev Rashid Azamatovich

                                        Xizmat telefoni: 71 244–79–34;
                                        
                                        E-mail: rashidxabibullayev@gmail.com.</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Xabibullayev Rashid Azamatovich</h6>
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

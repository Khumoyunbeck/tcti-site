import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import Image from '../../images/6.jpg'
import Image2 from '../../images/7.jpg'

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
                <h3>Bizning maqsadimiz</h3>
                    <p>Magistratura mutaxassisliklari uchun davlat ta’lim standartlari va boshqa normativ-huquqiy xujjatlarni ishlab chiqish, kadrlar buyurtmachilari talab va takliflari asosida ularni muntazam takomillashtirib borish;

                       <br/> • magistrlar tayyorlash bo‘iicha o‘quv jarayonini tashkil etish, ta’lim va o‘qitish sifatini nazorat qilish;
                        
                      <br/>  • magistratura faoliyatini boshqarish, ta’lim jarayonlarini tashkil etishning shakli va mexanizmlarini modernizasiya qilish;
                        
                       <br/> • magistratura mutaxassisliklarini zaruriy darsliklar va adabiyotlar bilan ta’minlashni tashkil etish, bu ishga etuk olimlar, yuqori malakali mutaxassislarni jalb etish, ilmiy sohani rivojlantirish;
                        
                       <br/> • magistratura talabalari tomonidan o‘quv-izlanish va ilmii-tadqiqot ishlari amalga oshirilishini nazorat qilish;
                        
                       <br/> • kafedralarning magistrlar tayyorlash bo‘yicha faoliyatini muvofiqlashtirish va nazorat qilish;
                        
                       <br/> • magistrlarni o‘qitish va ularning ishga joylashishi ustidan muntazam monitoringni amalga oshirish, magistrlar tayyorlash ishlarini muntazam ravshpda taxdil qilish va ular yuzasidan hisobotlar tayyorlash.
                        
                       <br/> • magistraturada dars berayotgan pedagog kadrlarga yuklatilgan vazifalarni amalga oshirishlari uchun maqsadga yo‘naltirilgan sharoitlarni yaratish va ularni ijtimoiy-kasbiy va shaxsiy faolligini oshirish, ularni rag‘batlantirish tizimlarini ishlab chikish;
                        
                       <br/> • magistratura axborot ta’minoti tizimlarini shakllantirish va rivojlantirish.</p>
                </div>

                <div id="Functions" ref={tabTwo} className="tabcontent">
                <h3>Bo'lim haqida</h3>
                    <p>Bo‘limning maqsadi oliy ta’lim muassasasida Kadrlar tayyorlash milliy modeli vazifalariga muvofiq mamlakatimizning ijtimoiy- iqtisodiy rivojlanish tendensiyalaridan kelib chiqqan holda tegishli mutaxassislik bo‘yicha kasbiy, pedogogik, ilmiy, huquqiy va psixologik bilimlarni chuqur o‘zlashtirgan jamiyat, davlat va oila oldida ma’suliyatini to‘la anglaydigan yuqori malakali magistrlar-mutaxassislarni tayyorlashni tashkil etishdan iborat.</p>
                </div>

                <div id="Management" ref={tabThree} className="tabcontent">
                <h3>Bizning maqsadimiz</h3>
                    <p>Magistratura mutaxassisliklari uchun davlat ta’lim standartlari va boshqa normativ-huquqiy xujjatlarni ishlab chiqish, kadrlar buyurtmachilari talab va takliflari asosida ularni muntazam takomillashtirib borish;

                       <br/> • magistrlar tayyorlash bo‘iicha o‘quv jarayonini tashkil etish, ta’lim va o‘qitish sifatini nazorat qilish;
                        
                      <br/>  • magistratura faoliyatini boshqarish, ta’lim jarayonlarini tashkil etishning shakli va mexanizmlarini modernizasiya qilish;
                        
                       <br/> • magistratura mutaxassisliklarini zaruriy darsliklar va adabiyotlar bilan ta’minlashni tashkil etish, bu ishga etuk olimlar, yuqori malakali mutaxassislarni jalb etish, ilmiy sohani rivojlantirish;
                        
                       <br/> • magistratura talabalari tomonidan o‘quv-izlanish va ilmii-tadqiqot ishlari amalga oshirilishini nazorat qilish;
                        
                       <br/> • kafedralarning magistrlar tayyorlash bo‘yicha faoliyatini muvofiqlashtirish va nazorat qilish;
                        
                       <br/> • magistrlarni o‘qitish va ularning ishga joylashishi ustidan muntazam monitoringni amalga oshirish, magistrlar tayyorlash ishlarini muntazam ravshpda taxdil qilish va ular yuzasidan hisobotlar tayyorlash.
                        
                       <br/> • magistraturada dars berayotgan pedagog kadrlarga yuklatilgan vazifalarni amalga oshirishlari uchun maqsadga yo‘naltirilgan sharoitlarni yaratish va ularni ijtimoiy-kasbiy va shaxsiy faolligini oshirish, ularni rag‘batlantirish tizimlarini ishlab chikish;
                        
                       <br/> • magistratura axborot ta’minoti tizimlarini shakllantirish va rivojlantirish.</p>
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
                                    <span className="info">Xamroqulov G’ofurjon Xolyigitovich

                                        e-mail: khamrakulovgafurjan@gmail.com
                                        
                                        Ma’lumoti: Oliy
                                        
                                        Ilmiy daraja: Kimyo fanlari doktori, professor
                                        
                                       
                                        
                                        Tel: +998 71 278-96-58; +998 90-931-07-98
                                        
                                       </span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Xamroqulov G’ofurjon Xolyigitovich</h6>
                    </div>
                    <div className="wrapper-personal">
                        <div className="photo-personal">
                            <img className="images-personal" src={Image2} alt="About us"/>
                            <div className="photo__large">
                                <div className="bg-text">
                                    <span className="degree">Bo‘lim metodisti</span>
                                    <span className="info">Karimov Jahongir Zafarjon o’g’li

                                        Ma’lumoti: Tugallanmagan Oliy
                                        
                                        Chet tillarni bilishi: Rus tili, Ingliz tili, Nemis tili
                                        
                                        Tel: +998 71 278-96-58; +99891-693-43-94.</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Karimov Jahongir Zafarjon o’g’li</h6>
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

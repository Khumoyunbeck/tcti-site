import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import Image from '../../images/387dc64173_1638278671.jpg'

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
                    <p>Toshkent kimyo-texnologiya institutining Marketing va talabalar amaliyoti bo‘limi O‘zbekiston Respublikasi Konstitutsiyasi, O‘zbekiston Respublikasi "Ta'lim to‘g‘risida"gi Qonuni va O‘zbekiston Respublikasi Prezidentining iqtisodiyot tarmoqlarini malakali kadrlar bilan ta'minlash borasidagi hujjatlari, O‘zbekiston Respublikasi Vazirlar Mahkamasining hujjatlari hamda Oliy va o‘rta maxsus ta'lim vazirining buyruqlari asosida faoliyat yuritadi.</p>
                </div>

                <div id="Functions" ref={tabTwo} className="tabcontent">
                <h3>Bizning maqsadimiz</h3>
                    <p>Toshkent kimyo-texnologiya institutida tayyorlanayotgan oliy ma'lumotli kadrlarga korxona, muassasa va tashkilotlarning ehtiyojini o‘rganish asosida ma'lumotlar ba'zasini shakllantirish.
                        <br/>Bakalavriat yo‘nalishlari va magistratura mutaxassisliklari bo‘yicha bitiruvchilarga talab va takliflar nisbatini o‘z ichiga olgan holda ta'lim xizmatlari iste'molchilari (ish beruvchi korxonalar, turli mulkchilik shakliga ega bo‘lgan tashkilotlar - davlat va mahalliy boshqaruv organlari, davlat va nodavlat tashkilotlari va h.k.) tuzilmasini baholash, geografik joylashishini aniqlash va guruhlash, potensial imkoniyatlarini tashxis qilish orqali to‘liq ma'lumotlar bankini yaratish.
                        <br/> Tayyorlanayotgan kadrlar sifatini oshirishga taalluqli dolzarb masalalarni oliy ta'lim muassasasining Kengashlarida muhokamaga qo‘yish uchun kiritish, bu borada oliy ta'lim muassasasining tegishli bo‘limlari bilan hamkorlik qilish.
                        <br/>Toshkent kimyo-texnologiya institutida kadrlar tayyorlash va davlat granti asosida bitiruvchilarni ishga taqsimlash monitoringini yuritish.
                        <br/> Toshkent kimyo-texnologiya instituti bitiruvchilarini ishga joylashish jarayonlarini tizimli tahlil qilish va baholash.
                        <br/>Ta'lim sohasida bozor munosabatlarini rivojlantirish va takomillashtirishga ko‘maklashish, yosh mutaxassislarga bo‘lgan talab ko‘rsatkichlari asosida bitiruvchi bakalavr va magistrlar uchun real "buyurtmalar portfeli"ni shakllantirish.
                        <br/>Toshkent kimyo-texnologiya instituti joylashgan hududdagi muassasa, korxona va tashkilotlarining kadrlarga bo‘lgan real ehtiyojlari qondirilishiga institut faoliyatini yo‘naltirish.
                        <br/> Respublika iqtisodiyoti va ijtimoiy soha tarmoqlarida bakalavriat yo‘nalishlari va magistratura mutaxassisliklari bo‘yicha raqobatli ta'lim xizmatlarining pay do bo‘lishiga olib kelishi mumkin bo‘lgan xizmatlar bozori konyukturasining o‘zgarishini tahlil qilib borish hamda yangicha rivojlanish yo‘nalishlarini belgilash yuzasidan takliflar tayyorlash.
                        <br/> Oliy ta'lim tizimida marketing xizmati jarayonlarining tez o‘zgaruvchanligi va mehnat bozori rivojlanish dinamikasi bilan o‘zaro bog‘liqligini hisobga olgan holda potensial ish beruvchilar (iste'molchilar) bilan hamkorlikda respublika iqtisodiyoti tarmoqlari va sohalarining oliy ma'lumotli yosh mutaxassislarga bo‘lgan ehtiyojini hududlar bo‘yicha o‘rganish.
                        <br/>Iqtisodiyot tarmoqlari va sohalari hamda hududlarning joriy va istiqbolli rivojlanish dasturlarining talab-ehtiyojlari asosida, birinchi navbatda, yuqori va innovatsion texnologiyalar sohasida yangi ta'lim yo‘nalishlari va mutaxassisliklari bo‘yicha oliy ma'lumotli kadrlar tayyorlashni yo‘lga qo‘yish bo‘yicha takliflar ishlab chiqish.
                        <br/> Mutaxassis kadrlar tayyorlashda manfaatdor tashkilotlar bilan o‘zaro hamkorlik va aloqa o‘rnatish, jumladan, korxona, tashkilot yoki muassasa ma'muriyatining tayyorlanayotgan kadrlar sifati va salohiyati to‘g‘risidagi fikrlarini o‘rganib borish.
                        <br/> Oliy ta'lim tizimida kadrlar tayyorlash yo‘nalishlari va ta'lim xizmatlari bozori borasidagi boshqaruv qarorlarini tayyorlash, qabul qilish va amaliyotga tatbiq etish jarayonlarida ishtirok etadi. Raqobatbardosh kadrlar tayyorlashni ta'minlash bo‘yicha amaliy takliflar ishlab chiqish va tegishli chora-tadbirlarni amalga oshirish.</p>
                </div>
                

                <div id="Management" ref={tabThree} className="tabcontent">
                <h3>Bizning vazifamiz</h3>
                    <p>Yosh mutaxassislardan kadrlar iste'molchilarining talab va ehtiyojlaridan kelib chiqqan holda foydalanilishiga ko‘maklashish.
                        <br/>  Kadrlar tayyorlash jarayonida buyurtmachilarning kadrlar sifatiga doir talablarini oliy ta'lim muassasasi kengashida muhokama qilish.
                        <br/>   Kadrlar tayyorlashda mutaxassislik kafedralari va iste'molchi (buyurtmachi) korxonalar hamkorligini ta'minlash.
                        <br/>  Bitiruvchi talabalar amaliyotini keyinchalik ishga joylashishi mumkin bo‘lgan korxona va tashkilotlarda tashkil etishga ko‘maklashish.
                     <br/>   Belgilangan muddatlarda Oliy va o‘rta maxsus ta'lim vazirligiga institutning joriy yildagi bitiruvchilari to‘g‘risida ta'lim yo‘nalishlari (mutaxassisliklar), ishga yo‘llanadigan vazirlik, idora (korxona va tashkilotlar) hamda hududlar kesimida shakllantirilgan ma'lumotlarni taqdim etib borish.
                        <br/>  Mehnat bozori konyunkturasini o‘rganish, qabul parametrlariga takliflarni iste'molchilarning bitiruvchilarga bo‘lgan buyurtmalari asosida shakllantirish, qabul, talabalar kontingenti, bitiruvchilarni ishga yo‘naltirish to‘g‘risidagi oliy ta'lim muassasasining ma'lumotlar bazasini tashkil etishga doir hujjatlarni o‘z vaqtida Oliy va o‘rta maxsus ta'lim vazirligiga taqdim etib borish.
                        <br/>  Bitiruvchilarni iste'molchilar va mutaxassislik kafedralarining yosh mutaxassis to‘g‘risidagi tavsiya va takliflarini e'tiborga olgan holda taqsimlash.
                        <br/>  Talabalar amaliyotini tashkil etish bo‘yicha korxona, muassasa va tashkilotlar bilan hamkorlik aloqalarini o‘rnatish hamda shartnomalar imzolash.
                        <br/> Talabalar amaliyotini ta'lim yo‘nalishi va mutaxassislikka mos korxona, muassasa va tashkilotlarda tashkil etilishini ta'minlash.
                        <br/>Talabalar amaliyotini korxona, muassasa va tashkilotlarda tashkil etish jarayonlarini o‘rganish, o‘rganish natijalarini tahlil qilish hamda muammo va takliflarni ishlab chiqib oliy ta'lim muassasasi rahbariyatiga taqdim etib boorish.
                        <br/> Talabalar amaliyotini tashkil etish bo‘yicha ilg‘or xorijiy va milliy tajribalarni o‘rganish hamda uni tatbiq etish yuzasidan takliflar tayyorlash.
                        <br/> Talabalar amaliyotini tashkil etilish yuzasidan tahliliy ma'lumotlar tayyorlash.
                        <br/> Ta'lim xizmatlari eksportini tashkil etish bo‘yicha amaliy takliflar ishlab chiqish va tegishli chora-tadbirlarni amalga oshirish.
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
                                    <span className="info">Mirkomilov Abdurahmon Mirabbos oʻgʻli

                                        Telefon: (+998 71) 244-79-27
                                        
                                         Elektron manzili: tkti_marketing@edu.uz</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="fullname-personal">Mirkomilov Abdurahmon Mirabbos oʻgʻli</h6>
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

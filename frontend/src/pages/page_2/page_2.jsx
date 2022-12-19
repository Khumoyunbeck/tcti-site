import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

function PageStaticOne() {
  return (
        <>
            <Header />
            <div className='page_main'>
                <ul>
                    <li>
                    <a href="/page/static/get/4">MENEJMENT VA KASB TA`LIMI FAKULTETI</a>
                    </li>
                    <li>
                    <a href="/page/static/get/5">NOORGANIK MODDALAR TEXNOLOGIYASI FAKULTETI</a>
                    </li>
                    <li>
                    <a href="/page/static/get/6">OZIQ-OVQAT MAHSULOTLARI TEXNOLOGIYASI FAKULTETI</a>
                    </li>
                    <li>
                    <a href="/page/static/get/7">Toshkent kimyo texnologiya instituti Qo‘ng‘irot soda zavodi qoshidagi maxsus sirtqi bo‘lim</a>
                    </li>
                    <li>
                <a href="/page/static/get/8">VINOCHILIK TEXNOLOGIYASI VA SANOAT UZUMCHILIGI FAKULTETI</a>
                    </li>
                    <li>
                <a href="/page/static/get/9">XORIJIY OLIY TA'LIM MUASSASALARI BILAN HAMKORLIKDAGI QO'SHMA TA'LIM DASTURLARI</a>
                    </li>
                    <li>
                <a href="/page/static/get/10">YOQILG`I VA ORGANIK BIRIKMALAR KIMYOVIY TEXNOLOGIYASI FAKULTETI</a>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
  );
}

export default PageStaticOne;

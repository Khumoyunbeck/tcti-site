import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/homePage'
import NewsPage from './pages/newsPage/newsPage'
import AnnouncementsPage from './pages/announcementsPage/announcement'
import Login from './pages/login/login'
import NewsAdmin from './pages/news_admin/news_admin'
import AddNews from './pages/add_news/add_news'
import EditNews from './pages/edit_news/edit_news'
import PagesAdmin from './pages/sahifa/sahifa'
import AddPage from './pages/add_page/add_page'
import EditPage from './pages/edit_page/edit_page'
import AdminAnnouncements from './pages/announcements_admin/announcements_admin'
import AddAnnouncements from './pages/add_announcements/add_announcements'
import AnnouncementsEdit from './pages/announcements_edit/announcements_edit'
import Upload from './pages/admin_upload/admin_upload'
import AdminPhoto from './pages/admin_photo/admin_photo'
import AdminVideo from './pages/admin_video/admin_video'
import AdminFile from './pages/admin_file/admin_file'
import StatisticsPage from './pages/statistics/statistics'
import FilteredPage from './pages/searched/searched'
import Page from './pages/page/page'
import PageStaticOne from './pages/page_1/page_1'
import PageStaticTwo from './pages/page_2/page_2'
import PageStaticThree from './pages/page_3/page_3'
import PageStaticFour from './pages/page_4/page_4'
import PageStaticFive from './pages/page_5/page_5'
import PageStaticSix from './pages/page_6/page_6'
import PageStaticSeven from './pages/page_7/page_7'
import PageStaticEight from './pages/page_8/page_8'
import PageStaticNine from './pages/page_9/page_9'
import PageStaticTen from './pages/page_10/page_10'
import PageStaticEleven from './pages/page_11/page_11'
import PageStaticTwelve from './pages/page_12/page_12'
import PageStaticThirdteen from './pages/page_13/page_13'
import PageStaticFourteen from './pages/page_14/page_14'
import PageStaticFiveteen from './pages/page_15/page_15'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/announcements/:id" element={<AnnouncementsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/yangilik" element={<NewsAdmin />} />
        <Route path="/admin/news/add" element={<AddNews />} />
        <Route path="/admin/news_edit/:id" element={<EditNews />} />
        <Route path="/admin/page" element={<PagesAdmin />} />
        <Route path="/page/get/:id" element={<Page />} />
        <Route path="/page/static/get/1" element={<PageStaticOne />} />
        <Route path="/page/static/get/2" element={<PageStaticTwo />} />
        <Route path="/page/static/get/3" element={<PageStaticThree />} />
        <Route path="/page/static/get/4" element={<PageStaticFour />} />
        <Route path="/page/static/get/5" element={<PageStaticFive />} />
        <Route path="/page/static/get/6" element={<PageStaticSix />} />
        <Route path="/page/static/get/7" element={<PageStaticSeven />} />
        <Route path="/page/static/get/8" element={<PageStaticEight />} />
        <Route path="/page/static/get/9" element={<PageStaticNine />} />
        <Route path="/page/static/get/10" element={<PageStaticTen />} />
        <Route path="/page/static/get/11" element={<PageStaticEleven />} />
        <Route path="/page/static/get/12" element={<PageStaticTwelve />} />
        <Route path="/page/static/get/13" element={<PageStaticThirdteen />} />
        <Route path="/page/static/get/14" element={<PageStaticFourteen />} />
        <Route path="/page/static/get/15" element={<PageStaticFiveteen />} />
        <Route path="/admin/page/add" element={<AddPage />} />
        <Route path="/admin/page/edit/:id" element={<EditPage />} />
        <Route path="/admin/announcement" element={<AdminAnnouncements />} />
        <Route path="/admin/announcement/add" element={<AddAnnouncements />} />
        <Route path="/admin/announcements/edit/:id" element={<AnnouncementsEdit />} />
        <Route path="/admin/upload" element={<Upload />} />
        <Route path="/admin/photo" element={<AdminPhoto />} />
        <Route path="/admin/videos" element={<AdminVideo />} />
        <Route path="/admin/files" element={<AdminFile />} />
        <Route path="/admin/statistic/all" element={<StatisticsPage />} />
        <Route path="/search-facultet/:question" element={<FilteredPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

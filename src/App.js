// import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadsPage from "./pages/UploadsPage/UploadsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";


const App = () => {
  return (
    <div className="app_wraper">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* The Home/Video Player Page for displaying the details of a video. */}
          <Route path="/" element={<HomePage />} />

          {/* The Video Upload Page. */}
          {/* Clicking on the “Upload” button must link to the Video Upload Page. */}
          <Route path="/uploads" element={<UploadsPage />} />

          {/* Clicking on a video in the “Next Video” list must go to the Video
          Details Page for the selected video via routing and display all the
          information for the video such as (likes, views, author, comments,
          etc). */}
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/uploaded" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

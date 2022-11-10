// import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./pages/Home/Home";
import Uploads from "./pages/Uploads/Uploads";




const App = () => {
  return (
    <div className="app_wraper">
      <Header />
      <Home />
      <BrowserRouter>
          <Routes>
      {/* The Home/Video Player Page for displaying the details of a video. */}
      <Route path="/" element={<Home />} />

      {/* The Video Upload Page. */}
      {/* Clicking on the “Upload” button must link to the Video Upload Page. */}
      <Route path="/upload" element={<Uploads />} />

      {/* Clicking on a video in the “Next Video” list must go to the Video
          Details Page for the selected video via routing and display all the
          information for the video such as (likes, views, author, comments,
          etc). */}
      <Route path="/:videoId" element={<Home />} />
      
      </Routes>
        </BrowserRouter> 
    </div>
  );
};

export default App;

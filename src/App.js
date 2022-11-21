// import "./app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route
            path="/"
            element={
              <Navigate to="/videos/84e96018-4022-434e-80bf-000ce4cd12b8" />
            }
          />

          {/* The Video Upload Page. */}
          {/* Clicking on the “Upload” button must link to the Video Upload Page. */}
          <Route path="/uploads" element={<UploadsPage />} />

          {/* Clicking on a video in the “Next Video” list must go to the Video
          Details Page for the selected video via routing and display all the
          information for the video such as (likes, views, author, comments,
          etc). */}
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/upload-successful" element={<SuccessPage />} />

          {/* Redirect user to home page if they go to a rout that doesn't exist  */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

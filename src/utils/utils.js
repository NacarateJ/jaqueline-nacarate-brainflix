import videosBrainFlix from "../data/videos.json";
import videosBrainFlixDetails from "../data/videos-details.json";

// Function to get (filter) all the videos with a different ID (from de one specified)
export const getVideos = (videoId) => {
  return videosBrainFlix.filter((video) => video.id !== videoId);
};

// Function to find the video with the ID thta matchs the one specified
const getvideoDetails = (videoId) => {
  return videosBrainFlixDetails.find((video) => video.id === videoId);
};

export default getvideoDetails;
import video from "../data/video.js";
import About from "./About.js";
import Button from "./Button.js";
import LikeButtons from "./LikeBtns.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <About title={video.title} views={video.views} date = {video.createdAt}/>
      <LikeButtons upvotes={video.upvotes} downvotes={video.downvotes} />
      <br></br>
      <br></br>
      <Button />

    </div>

  );
}

export default App;

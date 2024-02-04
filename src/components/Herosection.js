import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/herosection.css";
import dateFormat from "dateformat";

export default function Herosection() {
  const [topNewsData, setTopNewsData] = useState();
  const [currentTopNews, setCurrentTopNews] = useState(0);

  // useEffect hook to call the request function everytime you refresh the page
  useEffect(() => {
    fetchTopNews();
  }, []);

  // this fucntion fetches the top news
  const fetchTopNews = () => {
    axios
      .get(
        `https://api.thenewsapi.com/v1/news/top?api_token=O0wmPRiFmwfPoevgdazrGQJuLHs4UbraNY1KkKeX&locale=us&limit=3`
      )
      .then((response) => setTopNewsData(response.data.data))
      .catch((error) => console.log(error))
      .finally(console.log("I am done ooooo"));
  };

  console.log(topNewsData);

  if (!topNewsData) {
    return (
      <>
        <div>Loading your page. Please hold on.</div>
      </>
    );
  }

  return (
    <div>
      <div className="hero">
        <div className="herosection_heading">
          <h1>Hot Topics</h1>
        </div>

        <div className="image_wrapper">
          <div
            className="hero_img"
            style={{
              // backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6G-gtzqlFDMYHBYfQdfdceuGRBupXxIscspYhU4JS3DWgtPQnnb-xsjrOE9rD6dGiHI&usqp=CAU)`,
              backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42.25%, rgba(0, 0, 0, 0.65) 100%), url(${topNewsData?.[currentTopNews]?.image_url})`,
              backgroundSize: `cover`,
              height: `fit-content`,
            }}
          >
            <h2 className="hero_content">
              {topNewsData?.[currentTopNews]?.title}
            </h2>
            <div className="hero_content_down">
              <h4>
                {dateFormat(
                  `${topNewsData?.[currentTopNews]?.published_at}`,
                  "dddd, mmmm dS, yyyy"
                )}
              </h4>
              <h4>{topNewsData?.[currentTopNews]?.source}</h4>
            </div>
          </div>

          <div className="hero_content_2">
            <h3>
              <span className="nisi">
                {topNewsData?.[currentTopNews]?.snippet.split(" ")[0]}{" "}
              </span>
              {topNewsData?.[currentTopNews]?.snippet
                .split(" ")
                .slice(1)
                .join(" ")}
            </h3>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "red",
          fontSize: "28px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <div className="toggle" onClick={() => setCurrentTopNews(0)}>
          1
        </div>
        <div className="toggle" onClick={() => setCurrentTopNews(1)}>
          2
        </div>
        <div className="toggle" onClick={() => setCurrentTopNews(2)}>
          3
        </div>
      </div>
    </div>
  );
}

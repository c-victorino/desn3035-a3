import Link from "next/link";
import VideoEmbedYt from "../components/VideoEmbed";

export default function Tooter() {
  return (
    <section className="section-team">
      <div className="max-width">
        <h1>Meet the Masters Behind Finding Nemo</h1>

        <div className="cheff">
          <p>
            With over 20 years of experience in traditional Japanese cuisine,
            Chef Gold brings an unparalleled passion for sushi artistry. Trained
            in Tokyo, he mastered the delicate balance of flavors and techniques
            that make each dish a masterpiece. At <strong>Finding Nemo</strong>,
            Chef Gold is dedicated to creating an authentic dining experience
            that reflects both the rich heritage of Japan and the innovation of
            modern culinary trends.
          </p>
          <img
            src="./images/gordon.jpg"
            alt="Picture of Gordon Ramsey with a red background"
          />
        </div>

        <VideoEmbedYt videoUrl="https://www.youtube-nocookie.com/embed/uQloBERWxY8?mute=1" />
      </div>
    </section>
  );
}

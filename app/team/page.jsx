import Link from 'next/link';

export default function Tooter() {
    return (
        <section class="section-team">
        <div class="max-width">
          <h1>Meet the Masters Behind Finding Nemo</h1>

          <div class="cheff">
            <p>
              With over 20 years of experience in traditional Japanese cuisine,
              Chef Gold brings an unparalleled passion for sushi artistry.
              Trained in Tokyo, he mastered the delicate balance of flavors and
              techniques that make each dish a masterpiece. At
              <strong>FInding Nemo</strong>, Chef Gold is dedicated to creating
              an authentic dining experience that reflects both the rich
              heritage of Japan and the innovation of modern culinary trends.
            </p>
            <img
              src="./assets/img/gordon.jpg"
              alt="Picture of Gordon Ramsey with a red background"
            />
          </div>

          <div class="video-center">
            <iframe
              src="https://www.youtube-nocookie.com/embed/uQloBERWxY8?si=r-TYal9U6FyuxWnu&mute=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
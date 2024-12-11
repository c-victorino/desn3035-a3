import React from "react";

export default function VideoEmbedYt({ videoUrl }) {
  return (
    <div className="video-center">
      <iframe
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

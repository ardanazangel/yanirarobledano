const BackgroundVideo = ({ videoId }) => {
    return (
      <div className="video-container">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&background=1`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
        <style jsx>{`
          .video-container {
            overflow: hidden;
            width: 100%;
            height: 100%;
            position: relative;
            aspect-ratio:3/4;
          }
          iframe {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
            aspect-ratio:4/3;
            transform:scale(1.1)
          }
        `}</style>
      </div>
    );
  };
  
  export default BackgroundVideo;
  
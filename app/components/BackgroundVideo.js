const BackgroundVideo = ({ src }) => {
    return (
      <div className="video-container">
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height="100%"
        />
        <style jsx>{`
          .video-container {
            overflow: hidden;
            width: 100%;
            height: 100%;
            position: relative;
            aspect-ratio:3/4;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  };
  
  export default BackgroundVideo;

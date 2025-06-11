import React, { useRef } from "react";
// import { ChevronLeft } from "lucide-react"; // Import ChevronLeft icon
import { motion } from "framer-motion"; // Import Framer Motion

interface VideoComponentProps {
  videoLink: string; // Path to the video file (MP4 format)
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoLink }) => {
//   const [isReversed, setIsReversed] = useState(false); // Track reverse playback
  const videoRef = useRef<HTMLVideoElement | null>(null); // Video reference

  // Handle reverse play and reset the video
//   const handleReversePlay = () => {
//     if (videoRef.current) {
//       setIsReversed((prev) => !prev); // Toggle reverse playback state
//       videoRef.current.currentTime = 0; // Reset video to start
//       videoRef.current.play(); // Play video from the start
//     }
//   };

  // Reset the video when it ends
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to start after playing
    }
  };

  return (
    <div className="my-6 relative">
      {/* Chevron Left Icon for Reverse Playback */}
      {/* <button
        onClick={handleReversePlay}
        className="absolute top-4 left-4 text-white bg-transparent p-2 rounded-full hover:bg-transparent focus:bg-transparent"
      >
        <ChevronLeft size={32} className="text-[#231F20]" /> 
      </button> */}

      {/* Video Section */}
      <div className="w-full">
        <motion.video
          ref={videoRef}
          className="w-full rounded-xl "
          controls={false} // Hide player controls
          autoPlay
          muted
          loop
          onEnded={handleVideoEnd}
        //   animate={{ scaleX: isReversed ? -1 : 1 }} // Reverse video on toggle
          transition={{ duration: 5 }} // Reverse duration
        >
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
};

export default VideoComponent;

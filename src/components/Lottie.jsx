import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/webp/animation-three.json'; // Adjust the path accordingly

const AnimationRenderer = ({className}) => {
    const animationRef=useRef(null)
  useEffect(() => {
    const container = document.getElementById('animation-container');
    if (container) {
      const animation = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
      animationRef.current=animation
      return () => {
        // Cleanup animation on component unmount
        animation.destroy();
      };
    }
  }, []);
console.log(className)
  return <div className={`${className} mt-32`} id="animation-container" />;
};

export default AnimationRenderer;

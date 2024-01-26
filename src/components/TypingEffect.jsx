import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [typingEffectText, setTypingEffectText] = useState("");
  const words = [
    "Hey there! Welcome to HeyGen - where you can easily create fun, high-quality videos using our AI avatars and voices. In just a few clicks, you can generate custom videos for social media, presentations, education, and more.",
  ];

  useEffect(() => {
    let isMounted = true;

    const typeText = async () => {
      while (isMounted) {
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          for (let j = 0; j <= word.length; j++) {
            if (isMounted) {
              setTypingEffectText(word.substring(0, j));
              await new Promise((resolve) => setTimeout(resolve, 25));
            }
          }

          await new Promise((resolve) => setTimeout(resolve, 1000));

          for (let j = word.length; j >= 0; j--) {
            if (isMounted) {
              setTypingEffectText(word.substring(0, j));
              await new Promise((resolve) => setTimeout(resolve, 10));
            }
          }

          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, []);

  return { typingEffectText };
};

export default TypingEffect;

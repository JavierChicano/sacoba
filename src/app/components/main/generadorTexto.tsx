"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@nextui-org/react";

export const TextGenerateEffect = ({
  words,
  className,
  view
}: {
  words: string;
  className?: string;
  view: boolean;
}) => {

  
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    if (view) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.1),
        }
      );
    }
    
  }, [scope.current, view]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-contraste opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-contraste text-2xl leading-snug tracking-wide self-center w-full">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="w-full">
        <motion.div
          className="slide-in fixed bottom-0 left-0 right-0 top-0 z-40 bg-black pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ originY: 0 }} // Reveal from bottom (scaleY 1->0 with origin 0 = top?? No.)
        >
            {/* 
              Logic Check:
              Exit (Cover): scaleY 0 -> 1. We want bottom to top.
              So origin must be BOTTOM (1).
              Enter (Reveal): scaleY 1 -> 0. We want top to bottom (reveal top first).
              So origin must be BOTTOM (1).
              
              If origin is bottom:
              ScaleY 1 (Full) -> 0 (Empty) : Top edge moves down. Reveals top. Correct.
              ScaleY 0 (Empty) -> 1 (Full) : Top edge moves up. Covers from bottom. Correct.
            */}
        </motion.div>
        
        {/* Helper to force origin change if needed, but framer motion implies consistent origin unless changed */}
        <motion.div
            key="curtain"
            className="fixed inset-x-0 bottom-0 z-50 bg-black"
            initial={{ height: "100vh" }}
            animate={{ 
                height: "0vh",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
            }}
            exit={{ 
                height: "100vh",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
             {/* Optional: Add a curve SVG at the top of this div */}
             <div className="absolute -top-[50px] left-0 w-full h-[50px] overflow-hidden">
                {/* Visual trick: A black ellipse or rounded shape to mimic curve */}
                <div className="w-[120%] h-[100px] bg-black rounded-[50%] absolute -left-[10%] top-[0px]"></div>
             </div>
        </motion.div>

        {children}
      </div>
    </AnimatePresence>
  );
}


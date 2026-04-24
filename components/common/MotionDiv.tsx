import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import React from "react";

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionDiv({
  children,
  className = "",
}: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}

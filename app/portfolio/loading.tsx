import { Suspense } from "react";
import * as motion from "motion/react-client";
import ProjectCardSkeleton from "@/components/common/ProjectCardSkeleton";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Suspense fallback={<ProjectCardSkeleton />}>
        <ProjectCardSkeleton />
      </Suspense>
    </motion.div>
  );
}

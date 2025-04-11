import { useMemo } from "react";
import { useThreads } from "@liveblocks/react/suspense";

// Returns the highest z-index of all threads
export const useMaxZIndex = () => {
  // get all threads
  const { threads } = useThreads();

  // calculate the max z-index
  return useMemo(() => {
    let max = 0;
    for (const thread of threads) {
      // @ts-expect-error zIndex is a custom metadata field
      if (thread.metadata.zIndex > max) {
        // @ts-expect-error zIndex is a custom metadata field
        max = thread.metadata.zIndex;
      }
    }
    return max;
  }, [threads]);
};

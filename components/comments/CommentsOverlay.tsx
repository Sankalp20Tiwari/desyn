"use client";

import { useCallback, useRef } from "react";
import {  useEditThreadMetadata } from "@liveblocks/react";
import { useThreads } from "@liveblocks/react/suspense";
import { useMaxZIndex } from "@/lib/useMaxZIndex";
import { PinnedThread } from "./PinnedThread";
import { ThreadData } from "@liveblocks/client";

export type ThreadMetadata = {
  resolved?: boolean;
  zIndex: number;
  time?: number;
  x: number;
  y: number;
};

type OverlayThreadProps = {
  thread: ThreadData<ThreadMetadata>;
  maxZIndex: number;
};

export const CommentsOverlay = () => {
  const { threads } = useThreads();
  const maxZIndex = useMaxZIndex();
 

  return (
    <div>
      {threads
        .filter((thread) => !thread.resolved)
        .map((thread) => (
          <OverlayThread
            key={thread.id}
            thread={thread as ThreadData<ThreadMetadata>}
            maxZIndex={maxZIndex}
          />
        ))}
    </div>
  );
};

const OverlayThread = ({ thread, maxZIndex }: OverlayThreadProps) => {
  const metadata = thread.metadata as ThreadMetadata;
  const editThreadMetadata = useEditThreadMetadata();
  const threadRef = useRef<HTMLDivElement>(null);

  const zIndex = metadata.zIndex ?? 0;
  const x = metadata.x ?? 0;
  const y = metadata.y ?? 0;

  const handleIncreaseZIndex = useCallback(() => {
    if (maxZIndex === zIndex) return;
    editThreadMetadata({
      threadId: thread.id,
      metadata: {
        ...metadata,
        zIndex: maxZIndex + 1,
      },
    });
  }, [thread.id, editThreadMetadata, maxZIndex, zIndex, metadata]);

  return (
    <div
      ref={threadRef}
      id={`thread-${thread.id}`}
      className="absolute left-0 top-0 flex gap-5"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <PinnedThread thread={thread} onFocus={handleIncreaseZIndex} />
    </div>
  );
};

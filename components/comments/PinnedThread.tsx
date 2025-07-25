"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ThreadData } from "@liveblocks/client";
import { Thread } from "@liveblocks/react-ui";
import { ThreadMetadata } from "./CommentsOverlay";

type Props = {
  thread: ThreadData<ThreadMetadata>;
  onFocus: (threadId: string) => void;
};

export const PinnedThread = ({ thread, onFocus, ...props }: Props) => {
  const startMinimized = useMemo(
    () => Number(new Date()) - Number(new Date(thread.createdAt)) > 100,
    [thread]
  );

  const [minimized, setMinimized] = useState(startMinimized);
  const avatarIndex = useMemo(() => Math.floor(Math.random() * 30), []);

  const memoizedContent = useMemo(
    () => (
      <div
        className="absolute flex cursor-pointer gap-4"
        {...props}
        onClick={(e: any) => {
          onFocus(thread.id);

          if (
            e.target &&
            e.target.classList.contains("lb-icon") &&
            e.target.classList.contains("lb-button-icon")
          ) {
            return;
          }

          setMinimized(!minimized);
        }}
      >
        <div
          className="relative flex h-9 w-9 select-none items-center justify-center rounded-bl-full rounded-br-full rounded-tl-md rounded-tr-full bg-white shadow"
          data-draggable={true}
        >
          <Image
            src={`https://liveblocks.io/avatars/avatar-${avatarIndex}.png`}
            alt="User avatar"
            width={28}
            height={28}
            draggable={false}
            className="rounded-full"
          />
        </div>

        {!minimized ? (
          <div className="flex min-w-60 flex-col overflow-hidden rounded-lg bg-white text-sm shadow">
            <Thread
              thread={thread}
              indentCommentContent={false}
              onKeyUp={(e) => e.stopPropagation()}
            />
          </div>
        ) : null}
      </div>
    ),
    [thread, minimized, onFocus, props]
  );

  return <>{memoizedContent}</>;
};


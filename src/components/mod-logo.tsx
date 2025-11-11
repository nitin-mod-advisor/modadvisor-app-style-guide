"use client"

import { cn } from "@/lib/utils";

export function ModLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-8 h-8", className)}>
      {/* Black logo for light mode */}
      <svg
        className="dark:hidden"
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4L4 24L24 44L44 24L24 4Z"
          fill="black"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M34 24L24 34L14 24L24 14L34 24Z"
          fill="black"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      {/* White logo for dark mode */}
      <svg
        className="hidden dark:block"
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4L4 24L24 44L44 24L24 4Z"
          fill="white"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M34 24L24 34L14 24L24 14L34 24Z"
          fill="white"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

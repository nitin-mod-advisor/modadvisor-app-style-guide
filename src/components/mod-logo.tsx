"use client"

import { cn } from "@/lib/utils";

export function ModLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-8 h-8", className)}>
      {/* Black logo for light mode */}
      <svg
        className="absolute inset-0 dark:hidden"
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
          fill="black"
        />
        <path
          d="M16.4839 6.9032V14.6774H24.1935V21.6129H16.4839V29H9.35484V6.9032H16.4839Z"
          fill="white"
        />
      </svg>
      {/* White logo for dark mode */}
      <svg
        className="absolute inset-0 hidden dark:block"
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
          fill="white"
        />
        <path
          d="M16.4839 6.9032V14.6774H24.1935V21.6129H16.4839V29H9.35484V6.9032H16.4839Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

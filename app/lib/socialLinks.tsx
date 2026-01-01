import type { ReactNode } from "react";

type IconProps = { className?: string };

const iconClasses = "h-4 w-4 text-[#2C3628]";

export type SocialLink = {
  name: string;
  href: string;
  ariaLabel: string;
  icon: ReactNode;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/grownthc?igsh=MWlrYTIwZnZhaXMxNQ==",
    ariaLabel: "Follow Grown on Instagram",
    icon: <InstagramIcon className={iconClasses} />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/grownthc.co",
    ariaLabel: "Follow Grown on Facebook",
    icon: <FacebookIcon className={iconClasses} />,
  },
  {
    name: "X",
    href: "https://x.com/GrownTHC",
    ariaLabel: "Follow Grown on X (formerly Twitter)",
    icon: <XIcon className={iconClasses} />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@grownthc?_r=1&_t=ZT-92iIqX2FU4M",
    ariaLabel: "Follow Grown on TikTok",
    icon: <TikTokIcon className={iconClasses} />,
  },
];

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1.25" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.5 21v-7h2.2L16 10h-2.5V8.3c0-.7.3-1.3 1.4-1.3H16V5.1c-.2 0-1-.1-2-.1-2.4 0-3.5 1.4-3.5 3.7V10H8v4h2.5v7h3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 5h3.1l3.4 4.7L16.8 5H19l-4.8 6.5L19 19h-3.1l-3.6-4.9L9 19H7l4.9-6.5L6 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.5 5.5v6.9a3.4 3.4 0 1 1-3.4-3.4h.2v2.2c-.1 0-.1 0-.2.1a1.2 1.2 0 1 0 1.2 1.2V5.5h2.2c.1 1.2.7 2.2 1.7 2.9.7.5 1.5.8 2.3.8v2.2c-.9 0-1.9-.2-2.7-.6-.4-.2-.7-.4-1-.6v5.7a5.6 5.6 0 1 1-5.6-5.6c.1 0 .3 0 .5.1V5.5h2.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

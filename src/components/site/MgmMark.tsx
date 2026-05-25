type MgmMarkProps = {
  className?: string;
  title?: string;
};

export default function MgmMark({ className, title = "MGM" }: MgmMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      width="24"
      height="24"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M16 36c4 8 10 12 16 12s12-4 16-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M20 29c3-6 8-10 12-10s9 4 12 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="29" r="2.6" fill="currentColor" />
      <circle cx="32" cy="25" r="2.6" fill="currentColor" />
      <circle cx="40" cy="29" r="2.6" fill="currentColor" />
      <circle cx="28" cy="33" r="2.2" fill="currentColor" />
      <circle cx="36" cy="33" r="2.2" fill="currentColor" />
    </svg>
  );
}

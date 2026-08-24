interface IProps {
  className?: string;
}

export default function Logo({ className = '' }: IProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-label="Логотип"
    >
      <defs>
        <linearGradient id="logoMarkGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#A29BFE" />
          <stop offset="1" stopColor="#6C5CE7" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="20" height="20" rx="6" transform="rotate(45 14 14)" fill="url(#logoMarkGrad)" opacity="0.92" />
      <rect x="10.5" y="10.5" width="7" height="7" rx="2" transform="rotate(45 14 14)" fill="#0a0a0a" />
    </svg>
  );
};

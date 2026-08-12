import Image from "next/image";

type BrandLogoTone = "light" | "dark";

interface BrandLogoProps {
  readonly className?: string;
  readonly tone?: BrandLogoTone;
}

const logos = {
  light: {
    src: "/brand/bleoris-logo.svg",
    width: 226,
    height: 213,
  },
  dark: {
    src: "/brand/bleoris-logo-light.svg",
    width: 63,
    height: 57,
  },
} as const;

export function BrandLogo({
  className,
  tone = "light",
}: BrandLogoProps) {
  const logo = logos[tone];
  const classes = ["inline-flex items-center gap-2.5", className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      <Image
        aria-hidden="true"
        alt=""
        className="h-9 w-auto shrink-0"
        height={logo.height}
        src={logo.src}
        width={logo.width}
      />
      <span
        className={
          tone === "dark"
            ? "text-lg font-semibold tracking-[-0.035em] text-white"
            : "text-lg font-semibold tracking-[-0.035em] text-ink"
        }
      >
        Bleoris
      </span>
    </span>
  );
}

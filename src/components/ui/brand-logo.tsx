import Image from "next/image";

interface BrandLogoProps {
  readonly className?: string;
}

const logo = {
  src: "/brand/bleoris-logo.svg",
  width: 226,
  height: 213,
} as const;

export function BrandLogo({ className }: BrandLogoProps) {
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
      <span className="text-lg font-semibold tracking-[-0.035em] text-ink">
        Bleoris
      </span>
    </span>
  );
}

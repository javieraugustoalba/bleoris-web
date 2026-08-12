import type { Route } from "next";
import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonLinkVariant = "primary" | "inverse" | "secondary";

interface ButtonLinkProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly href: Route;
  readonly onClick?: MouseEventHandler<HTMLAnchorElement>;
  readonly variant?: ButtonLinkVariant;
}

const variantClasses = {
  primary:
    "border-ink bg-ink text-white shadow-soft hover:-translate-y-px hover:bg-surface-dark hover:shadow-elevated",
  inverse:
    "border-white bg-white text-ink shadow-soft hover:-translate-y-px hover:bg-[#f0f2f8] hover:shadow-elevated",
  secondary:
    "border-border-strong bg-surface text-ink hover:-translate-y-px hover:border-brand-blue hover:bg-surface-muted",
} satisfies Record<ButtonLinkVariant, string>;

export function ButtonLink({
  children,
  className,
  href,
  onClick,
  variant = "primary",
}: ButtonLinkProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-pill border px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow,transform] duration-base ease-brand",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}

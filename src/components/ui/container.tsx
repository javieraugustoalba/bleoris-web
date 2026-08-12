import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  const classes = ["mx-auto w-full max-w-shell px-page", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}

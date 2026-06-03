import { twMerge } from "tailwind-merge";

function Button({
  onClick,
  children,
  variant = "primary",
  size = "md",
  radius = "full",
  className = "",
}) {
  const base =
    "transition-colors cursor-pointer inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-primary text-on-primary hover:opacity-90",
    outline:
      "bg-transparent border border-outline-variant text-on-surface hover:text-primary hover:border-primary",
  };

  const sizes = {
    sd: "px-3 py-1 text-sm",
    md: "px-6 py-3",
  };

  const radii = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    xxl: "rounded-2xl",
    xxxl: "rounded-3xl",
    full: "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(
        base,
        variants[variant],
        sizes[size],
        radii[radius],
        className,
      )}
    >
      {children}
    </button>
  );
}

export { Button };

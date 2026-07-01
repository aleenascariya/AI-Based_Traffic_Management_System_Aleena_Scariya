import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export default function PrimaryButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl",
        "bg-cyan-500",
        "px-4 py-2",
        "font-semibold",
        "text-black",
        "transition-all",
        "duration-200",
        "hover:bg-cyan-400",
        "active:scale-95",
        className
      )}
    />
  );
}

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
  "w-full",
  "rounded-xl",
  "bg-cyan-500",
  "py-2.5",
  "px-4",
  "font-semibold",
  "text-black",

  "transition-all",
  "duration-300",

  "hover:bg-cyan-400",
  "hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]",
  "hover:-translate-y-0.5",

  "active:scale-95",

  className
)}
    />
  );
}

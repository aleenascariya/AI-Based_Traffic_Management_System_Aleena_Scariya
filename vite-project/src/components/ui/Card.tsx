import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  headerAction?: ReactNode;
}

export default function Card({
  title,
  icon,
  children,
  className,
  headerAction,
}: CardProps) {
  return (
    <section
      className={clsx(
  "group",
  "rounded-2xl",
  "border border-white/10",
  "bg-[#14171D]/90",
  "backdrop-blur-xl",
  "overflow-hidden",

  "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",

  "transition-all",
  "duration-300",
  "ease-out",

  "hover:-translate-y-1",
  "hover:border-cyan-400/40",
  "hover:shadow-[0_15px_40px_rgba(34,211,238,0.18)]",

  className
)}
    >
      {(title || headerAction) && (
        <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-cyan-500/5 to-transparent px-5 py-4">
          <div className="flex items-center gap-2">
            {icon}

            {title && (
              <h2
className="
text-xs
font-bold
uppercase
tracking-[0.28em]
text-slate-100
group-hover:text-cyan-300
transition-colors
duration-300
"
>
                {title}
              </h2>
            )}
          </div>

          {headerAction}
        </div>
      )}

      <div className="p-5 transition-all duration-300">{children}</div>
    </section>
  );
}

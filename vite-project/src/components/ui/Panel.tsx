import { ReactNode } from "react";
import clsx from "clsx";

interface PanelProps {
  title: string;
  icon?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Panel({
  title,
  icon,
  action,
  children,
  className,
}: PanelProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl",
        "border border-white/10",
        "bg-[#14171D]",
        "shadow-lg",
        "overflow-hidden",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">

        <div className="flex items-center gap-3">

          {icon}

          <h2 className="text-sm font-bold uppercase tracking-widest text-white">
            {title}
          </h2>

        </div>

        {action}

      </div>

      <div className="p-5">
        {children}
      </div>

    </div>
  );
}

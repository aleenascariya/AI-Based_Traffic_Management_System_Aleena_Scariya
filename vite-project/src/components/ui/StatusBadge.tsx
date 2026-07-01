import clsx from "clsx";

interface StatusBadgeProps {
  status:
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "high"
    | "medium"
    | "low"
    | "live";
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles = {
    success:
      "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400",

    warning:
      "bg-amber-500/10 border border-amber-500/30 text-amber-400",

    danger:
      "bg-red-500/10 border border-red-500/30 text-red-400",

    info:
      "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400",

    high:
      "bg-red-500/10 border border-red-500/30 text-red-400",

    medium:
      "bg-amber-500/10 border border-amber-500/30 text-amber-400",

    low:
      "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400",

    live:
      "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center",
        "rounded-full",
        "px-2.5",
        "py-1",
        "text-[10px]",
        "font-bold",
        "uppercase",
        "tracking-widest",
        styles[status]
      )}
    >
      {status}
    </span>
  );
}

export default function LiveIndicator() {
  return (
    <div className="flex items-center gap-2 text-xs text-red-400">
      <span className="w-2 h-2 bg-red-500 rounded-full animate-ping shadow-[0_0_10px_red]"></span>
      LIVE
    </div>
  );
}
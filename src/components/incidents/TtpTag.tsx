export default function TtpTag({ id }: { id: string }) {
  return (
    <span className="px-2 py-1 text-xs border rounded bg-[var(--bg-tertiary)] text-[var(--accent-primary)] cyber-glow">
      {id}
    </span>
  );
}
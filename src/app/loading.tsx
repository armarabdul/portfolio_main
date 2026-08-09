export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" />
          <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-accent border-l-transparent animate-spin" />
        </div>
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase animate-pulse">
          Loading Portfolio...
        </span>
      </div>
    </div>
  );
}

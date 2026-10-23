function FocusTimer() {
  const [sec, setSec] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSec((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  const mins = Math.floor(sec / 60);
  const remainingSecs = sec % 60;
  const displayTime = `${mins}:${remainingSecs.toString().padStart(2, "0")}`;

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Timer className="h-5 w-5 text-primary" /> Focus Mode
        </h2>
        <span className="text-xs uppercase tracking-wide text-muted-foreground">Pomodoro</span>
      </div>
      <div className="my-6 text-center text-5xl font-mono font-bold tracking-tight">
        {displayTime}
      </div>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setRunning((r) => !r)}
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
        >
          {running ? "Pause" : "Start 25m Session"}
        </button>
        <button
          onClick={() => { setRunning(false); setSec(25 * 60); }}
          className="rounded-full border px-4 py-2 text-sm hover:bg-muted"
        >
          Reset
        </button>
      </div>
    </section>
  );
}

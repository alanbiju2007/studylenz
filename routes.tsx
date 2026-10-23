function LensAiDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi Alex! Got a question about your study plan or need help with a difficult problem?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMsg },
      { role: "assistant", text: "I'm ready to walk you through this step-by-step. Let's break it down..." }
    ]);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l bg-card p-6 shadow-2xl flex flex-col">
      <div className="flex items-center justify-between border-b pb-4">
        <h3 className="font-semibold text-lg">Lens AI Tutor</h3>
        <button onClick={onClose}><X className="h-5 w-5" /></button>
      </div>
      <div className="flex-1 overflow-y-auto py-4 space-y-3">
        {messages.map((m, idx) => (
          <div key={idx} className={`p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground ml-8' : 'bg-muted mr-8'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2 pt-4 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question or paste a problem..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />
        <button onClick={handleSend} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

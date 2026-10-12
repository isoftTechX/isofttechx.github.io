import { useState } from "react";
import { ChevronDown, Wifi, HardDrive } from "lucide-react";

interface Step { id: string; title: string; where: "Local" | "Online"; detail: string }

const steps: Step[] = [
  { id: "voice", title: "Voice input", where: "Local", detail: "Microphone audio is captured by the desktop application." },
  { id: "vad", title: "Voice activity detection", where: "Local", detail: "Silero VAD decides when someone is speaking so Maya knows when to listen." },
  { id: "stt", title: "Speech recognition", where: "Online", detail: "Currently uses Google Speech Recognition, which requires an internet connection. This is the main step that is not local today." },
  { id: "intent", title: "Intent and context", where: "Local", detail: "Machine-learning intent classification, with context drawn from semantic memory." },
  { id: "llm", title: "Language model and app logic", where: "Local", detail: "Locally hosted language models via Ollama, combined with application logic." },
  { id: "resp", title: "Response generation", where: "Local", detail: "The reply is composed from the model output and the surrounding logic." },
  { id: "tts", title: "Text-to-speech", where: "Local", detail: "Kokoro turns the response into speech." },
  { id: "out", title: "Avatar and audio output", where: "Local", detail: "A Three.js and @pixiv/three-vrm frontend, connected over WebSocket, presents the avatar alongside the audio." },
];

export function ArchitectureDiagram() {
  const [open, setOpen] = useState<string | null>("stt");
  return (
    <div>
      <ol className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4" aria-label="Maya's high-level pipeline, in typical order">
        {steps.map((s, i) => {
          const isOpen = open === s.id;
          return (
            <li key={s.id} className="bg-ink">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`arch-${s.id}`}
                onClick={() => setOpen(isOpen ? null : s.id)}
                className="flex min-h-[7.5rem] w-full flex-col items-start justify-between gap-3 p-5 text-left hover:bg-surface"
              >
                <span className="meta">Stage {i + 1}</span>
                <span className="font-display text-lg font-semibold leading-tight">{s.title}</span>
                <span className="flex w-full items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 font-mono text-xs ${s.where === "Online" ? "text-moss" : "text-violet"}`}>
                    {s.where === "Online" ? <Wifi aria-hidden className="h-3.5 w-3.5" /> : <HardDrive aria-hidden className="h-3.5 w-3.5" />}
                    {s.where === "Online" ? "Needs internet" : "Runs locally"}
                  </span>
                  <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </span>
              </button>
              <div id={`arch-${s.id}`} hidden={!isOpen} className="border-t border-line bg-surface p-5 text-sm leading-relaxed text-mute">
                {s.detail}
              </div>
            </li>
          );
        })}
      </ol>
      <div className="mt-px grid gap-px bg-line sm:grid-cols-2">
        <div className="bg-surface p-5"><p className="font-display font-semibold">Semantic memory</p><p className="mt-1 text-sm text-mute">Embeddings with SQLite-backed storage, consulted for context across the pipeline.</p></div>
        <div className="bg-surface p-5"><p className="font-display font-semibold">WebSocket link</p><p className="mt-1 text-sm text-mute">Connects the Python backend to the avatar frontend.</p></div>
      </div>
      <p className="meta mt-4">Illustrative only. Real operation is not strictly linear and the architecture is still changing.</p>
    </div>
  );
}

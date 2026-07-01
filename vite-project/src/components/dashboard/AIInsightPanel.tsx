import { Sparkles } from "lucide-react";
import Card from "../ui/Card";
import PrimaryButton from "../ui/PrimaryButton";

interface Insight {
  id: string;
  response: string;
}

interface AIInsightPanelProps {
  currentPrompt: string;
  setCurrentPrompt: (value: string) => void;
  generateInsight: () => void;
  insights: Insight[];
}

export default function AIInsightPanel({
  currentPrompt,
  setCurrentPrompt,
  generateInsight,
  insights,
}: AIInsightPanelProps) {
  return (
    <Card
      title="AI Insights"
      icon={<Sparkles size={18} className="text-cyan-400" />}
    >
      <div className="space-y-4">
        <textarea
          value={currentPrompt}
          onChange={(e) => setCurrentPrompt(e.target.value)}
          placeholder="Ask AI about current traffic conditions..."
          className="w-full rounded-xl border border-white/10 bg-[#1A1D24] p-3 text-white outline-none focus:border-cyan-400"
          rows={4}
        />

        <PrimaryButton onClick={generateInsight}>
          Generate Insight
        </PrimaryButton>

        <p className="text-sm text-slate-400">
          Enter a prompt before generating insights.
        </p>

        {insights.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 p-6 text-center text-slate-500">
            No insights generated yet.
          </div>
        ) : (
          <div className="space-y-3">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
              >
                {insight.response}
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

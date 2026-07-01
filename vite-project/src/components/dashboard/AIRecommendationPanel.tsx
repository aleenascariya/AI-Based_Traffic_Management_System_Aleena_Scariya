import { BrainCircuit } from "lucide-react";
import Card from "../ui/Card";

interface Recommendation {
  id: string;
  message: string;
}

interface AIRecommendationPanelProps {
  recommendations: Recommendation[];
}

export default function AIRecommendationPanel({
  recommendations,
}: AIRecommendationPanelProps) {
  return (
    <Card
      title="AI Recommendations"
      icon={<BrainCircuit size={18} className="text-cyan-400" />}
    >
      {recommendations.length === 0 ? (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-cyan-500/20 bg-cyan-500/5 p-8 text-center">

        <div className="mb-3 text-4xl">
            🤖
        </div>

        <h3 className="text-lg font-semibold text-white">
            AI Assistant Ready
        </h3>

        <p className="mt-2 text-sm text-slate-400">
            Waiting for live traffic data.

            Recommendations will appear automatically once
            vehicles are detected.
        </p>

    </div>
) : (
        <div className="space-y-3">
          {recommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
            >
              <p className="text-white">
                {recommendation.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

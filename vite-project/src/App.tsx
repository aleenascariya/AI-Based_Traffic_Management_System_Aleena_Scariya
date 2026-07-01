import Header from "./components/layout/Header";
import { JunctionSimulator } from "./components/JunctionSimulator";
import { useTrafficEngine } from "./hooks/useTrafficEngine";
import Card from "./components/ui/Card";
import StatCard from "./components/ui/StatCard";
import { Car, TrafficCone, Circle } from "lucide-react";
import StatusBadge from "./components/ui/StatusBadge";
import AIStatusPanel from "./components/dashboard/AIStatusPanel";
import PrimaryButton from "./components/ui/PrimaryButton";
import AIRecommendationPanel from "./components/dashboard/AIRecommendationPanel";
import AIInsightPanel from "./components/dashboard/AIInsightPanel";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  const engine = useTrafficEngine();
  const laneCounts = engine.getLaneCounts();

  return (
    <div className="space-y-3 border-t border-white/10 pt-5 mt-5">
      <Header
        latency="14 ms"
        version="v1.0"
        streamStatus="ONLINE"
      />

      <main className="grid grid-cols-[280px_1fr] gap-6 p-6">
        <Sidebar engine={engine} />

          
               

        <section className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
	  <AIStatusPanel
    controlMode={engine.controlMode}
/>
           </div>

	   <div className="col-span-12 lg:col-span-6">
          <AIRecommendationPanel
    recommendations={engine.recommendations}
/>

          </div>

	  <div className="col-span-12 lg:col-span-8">
    <AIInsightPanel
    currentPrompt={engine.currentPrompt}
    setCurrentPrompt={engine.setCurrentPrompt}
    generateInsight={engine.generateInsight}
    insights={engine.insights}
    />
</div>

<div className="col-span-12 lg:col-span-4">
    <Card title="Active Signal">

        <div className="flex flex-col items-center justify-center h-full py-10">

            <div className="h-8 w-8 rounded-full bg-green-500 animate-pulse mb-4"></div>

            <h2 className="text-3xl font-bold text-green-400">
                {engine.activeGreenLane}
            </h2>

            <p className="mt-2 text-slate-400">
                Current Green Lane
            </p>

        </div>

    </Card>
</div>

	  <div className="col-span-12">
	  <Card title="Traffic Statistics">
	    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

               <StatCard
                    title="Vehicles"
                    value={engine.getTotalVehicles()}
                    icon={<Car size={24} />}
               />

               <StatCard
                    title="Busiest Lane"
                    value={engine.getHighestDensityLane()}
                    icon={<TrafficCone size={24} />}
               />

               <StatCard
                    title="Green Signal"
                    value={engine.activeGreenLane}
                    icon={<Circle size={24} className="fill-green-500 text-green-500" />}
               />

             </div>
	   </Card>
	   </div>

          <div className="col-span-4 lg:col-span-12">

	  <Card title="System Health">

<div className="space-y-4">

<div className="flex justify-between">

<span className="text-slate-400">
Status
</span>

<span className="font-semibold text-green-400">
{engine.getTrafficStatus()}
</span>

</div>

<div className="flex justify-between">

<span className="text-slate-400">
Vehicles
</span>

<span className="font-semibold text-cyan-400">
{engine.getTotalVehicles()}
</span>

</div>

<div className="flex justify-between">

<span className="text-slate-400">
Mode
</span>

<span className="font-semibold capitalize">
{engine.controlMode}
</span>

</div>

</div>

</Card>

</div>

	  <div className="col-span-8">
          <Card
    title="Intersection Simulator"
    headerAction={
        <StatusBadge status="live" />
    }
>

    <div className="space-y-4">

        <div className="flex items-center justify-between">

            <div>

                <p className="text-xs uppercase tracking-widest text-slate-500">
                    Current Signal
                </p>

                <h2 className="text-2xl font-extrabold text-green-400">
                    {engine.activeGreenLane}
                </h2>

            </div>

            <div className="text-right">

                <p className="text-xs uppercase tracking-widest text-slate-500">
                    Vehicles
                </p>
                <h2 className="text-2xl font-extrabold text-cyan-400">
                    {engine.getTotalVehicles()}
                </h2>

            </div>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#151922] to-[#0F1115] p-5 shadow-inner">

    <div className="mb-4 flex items-center justify-between">

        <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Live Feed
            </p>

            <h3 className="text-lg font-bold text-white">
                AI Traffic Simulation
            </h3>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">

            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-xs font-bold text-green-400">
                LIVE
            </span>

        </div>

    </div>

    <JunctionSimulator
        vehicles={engine.allVehicles}
        activeLane={engine.activeGreenLane}
    />

</div>

    </div>

</Card>
</div>

          <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-6">

	  <Card title="Live Density">

	    <div className="flex items-center justify-between">

    <h3 className="text-lg font-bold">
        Live Density
    </h3>

    <StatusBadge status="live" />

</div>
            <div className="space-y-5">

  {[
    { lane: "North", value: laneCounts.North },
    { lane: "East", value: laneCounts.East },
    { lane: "South", value: laneCounts.South },
    { lane: "West", value: laneCounts.West },
  ].map(({ lane, value }) => {

    const percent = Math.min((value / 10) * 100, 100);

    return (

      <div key={lane}>

        <div className="flex justify-between mb-1">

          <span className="font-semibold text-slate-200">
            {lane}
          </span>

          <span className="font-semibold text-cyan-300">
            {value} Vehicles
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">

          <div
            className={`h-full transition-all duration-700 ${
              percent > 70
                ? "bg-red-500"
                : percent > 40
                ? "bg-yellow-400"
                : "bg-emerald-500"
            }`}
            style={{
              width: `${percent}%`,
            }}
          />

        </div>

      </div>

    );

  })}

</div>
          </Card>

          <Card title="Activity Stream">

	    <PrimaryButton onClick={engine.clearLogs}>
              Clear Logs
            </PrimaryButton>

            {engine.logs.length === 0 ? (
    <div className="flex flex-col items-center justify-center py-8">

        <div className="text-4xl">
            📋
        </div>

        <h3 className="mt-3 text-lg font-bold text-slate-100">
            Activity Timeline
        </h3>

        <p className="mt-2 text-sm text-slate-400">
            System events will appear here.
        </p>

    </div>
) : (
              <ul>
                {engine.logs.map((log) => (
                  <li key={log.id}
		  className="text-slate-200 py-2 border-b border-slate-700"
		  >

                    {log.time} - {log.message}
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <Card title="Data Registry">

            <PrimaryButton
              onClick={engine.saveTrafficMetrics}
            >
              Save
            </PrimaryButton>

	    <p className="text-slate-300 mt-3">
              Save metrics after adding vehicles.
            </p>

            {engine.savedRecords.length === 0 ? (
    <div className="flex flex-col items-center justify-center py-8">

        <div className="text-4xl">
            💾
        </div>

        <h3 className="mt-3 text-lg font-bold text-slate-100">
            No Snapshots
        </h3>

        <p className="mt-2 text-sm text-slate-400">
            Save traffic metrics to create your first record.
        </p>

    </div>
) : (
              <ul>
                {engine.savedRecords.map((record) => (
                  <li key={record.id}>
                    Vehicles: {record.totalVehicles}
                    {" | "}
                    Active Lane: {record.activeLane}
                    {" | "}
                    Mode: {record.controlMode}
                    {" | "}
                    Saved: {record.savedAt}
                  </li>
                ))}
              </ul>
            )}
          </Card>
	  </div>
        </section>
      </main>
      <footer>
        <p>
          NeuralTraffic AI v1.0
        </p>
      </footer>

    </div>
  );
}

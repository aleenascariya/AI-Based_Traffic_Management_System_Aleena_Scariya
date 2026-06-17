import { JunctionSimulator } from "./components/JunctionSimulator";
export default function App() {
	return (
		<div>
		<header>
		<h1>NeuralTraffic AI</h1>
		<p>Dynamic Stream: ONLINE</p>
		</header>

		<main>
		<aside>
		<h3>Control Paradigm</h3>

		<button>
		Adaptive AI
		</button>

		<button>
		Fixed Clock
		</button>

		<div>
		<p>Paused</p>

		<button>
		Play
		</button>
		</div>
		</aside>

		<section>
		<JunctionSimulator />
		</section>
		</main>
		</div>
	);
} 

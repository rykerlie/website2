import Hero from "./components/hero";
import ParticlesComponent from "./components/particles";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-bg-primary">
      <ParticlesComponent id="tsparticles" />
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}

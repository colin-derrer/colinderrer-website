export default function Home() {
  return (
    <main className="min-h-screen px-12 py-8 max-w-6xl flex flex-col mx-auto">
      <header className="text-2xl font-brand">
        <p className="text-muted-foreground text-sm">Hello, I&apos;m</p>
        <p>
          Colin Derrer, a senior software engineer & web developer at{" "}
          <span className="underline">Venelt Studio</span>.
        </p>
        <p>
          I have almost 5 years of experience designing websites and 3 years
          developing applications and services.
        </p>
        <p>
          If you&apos;re interested in starting a project together, let me know.
        </p>
      </header>
      <p className="text-center text-muted-foreground text-xs mt-12">
        I&apos;m currently rewriting this website. Please check back on
        4/26/2024.
      </p>
    </main>
  );
}

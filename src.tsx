import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
        <span className="h-3 w-3 rounded-full border-2 border-primary-foreground" />
      </span>
      StudyLens
    </Link>
  );
}

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <Link to="/dashboard" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ink-foreground hover:opacity-90">
          Try the dashboard
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Github, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">联系我</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          期待与你合作
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          我目前在寻找 <span className="text-foreground font-medium">AI 应用开发</span>方向的校招 / 实习机会，
          欢迎通过邮箱或 GitHub 与我联系，很乐意聊聊 Agent 工程、量化策略或任何有趣的想法。
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-lg shadow-primary/20 transition-all hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden />
            {DATA.contact.email}
          </Link>
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="size-4" aria-hidden />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

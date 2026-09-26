/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import CarShowcase from "@/components/three/car-showcase";
import { ArrowUpRight, Github, Mail, Sparkles } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      {/* ===== Hero：AI 应用开发工程师 + Three.js 车模 3D 展示 ===== */}
      <section
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-24"
      >
        <div className="flex flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Sparkles className="size-4 text-primary" />
              <span>你好，我是 {DATA.name}（{DATA.initials}）</span>
            </div>
          </BlurFade>
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl"
            yOffset={8}
            text="AI 应用开发工程师"
          />
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground max-w-[560px] md:text-lg lg:text-xl leading-relaxed">
              专注 Agent 工程化落地 —— LangGraph 多智能体编排、RAG 记忆系统、
              上下文压缩与长期记忆治理，把大模型能力变成真实可用的产品。
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-lg shadow-primary/20 transition-all hover:opacity-90"
              >
                查看项目
                <ArrowUpRight className="size-4" aria-hidden />
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
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Mail className="size-4" aria-hidden />
                联系我
              </Link>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap gap-2 pt-2">
              {DATA.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border bg-background border-border ring-2 ring-border/20 rounded-xl px-4 py-2 flex flex-col items-center min-w-[92px]"
                >
                  <span className="text-lg font-bold tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-muted-foreground text-center leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Three.js 车模 3D 展示（#car-showcase 锚点） */}
        <div id="car-showcase" className="relative scroll-mt-24">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <CarShowcase />
          </BlurFade>
        </div>
      </section>

      {/* ===== 关于我 ===== */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">关于我</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ===== 实习经历 ===== */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">实习经历</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* ===== 教育背景 ===== */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">教育背景</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 11 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground flex-none">
                        {education.school.slice(0, 2)}
                      </div>
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 专业技能 ===== */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">专业技能</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-8">
            {DATA.skillGroups.map((group, groupIndex) => (
              <div key={group.title} className="flex flex-col gap-y-3">
                <BlurFade delay={BLUR_FADE_DELAY * 13 + groupIndex * 0.05}>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {group.title}
                  </h3>
                </BlurFade>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, id) => (
                    <BlurFade
                      key={skill.name}
                      delay={BLUR_FADE_DELAY * 14 + id * 0.04}
                    >
                      <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-9 w-fit px-4 flex items-center gap-2">
                        {skill.icon && (
                          <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                        )}
                        <span className="text-foreground text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 项目经历 ===== */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* ===== 荣誉奖项 ===== */}
      <section id="awards">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <HackathonsSection />
        </BlurFade>
      </section>

      {/* ===== 联系我 ===== */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}

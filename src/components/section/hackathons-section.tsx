import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Award, Trophy } from "lucide-react";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function AwardsSection() {
  return (
    <section id="awards" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">荣誉奖项</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl flex items-center gap-2">
              <Trophy className="size-7 text-primary" aria-hidden />
              竞赛与认证
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              以赛代练，在编程竞赛、嵌入式设计与工程实践中打磨技术功底；
              同时通过工信部官方认证，具备工业互联网平台开发工程能力。
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.awards.map((award) => (
            <TimelineItem
              key={award.title + award.location}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex items-center justify-center text-primary">
                  <Award className="size-5" aria-hidden />
                </div>
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {award.location && (
                  <span className="text-xs text-muted-foreground">{award.location}</span>
                )}
                {award.title && (
                  <h3 className="font-semibold leading-none">{award.title}</h3>
                )}
                {award.dates && (
                  <p className="text-sm text-muted-foreground">{award.dates}</p>
                )}
                {award.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {award.description}
                  </p>
                )}
                {award.links &&
                  award.links.length > 0 &&
                  (award.links as readonly { icon: React.ReactNode; title: string; href: string }[]).map(
                    (link, idx) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    )
                  )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}

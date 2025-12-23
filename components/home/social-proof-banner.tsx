import { Award, Shield, Users, Zap } from "lucide-react"

const badges = [
  { icon: Award, text: "آموزش پروژه‌محور" },
  { icon: Shield, text: "مبتنی بر روان‌شناسی کودک" },
  { icon: Users, text: "مربیان متخصص رباتیک" },
  { icon: Zap, text: "یادگیری تعاملی و هیجان‌انگیز" },
]

export function SocialProofBanner() {
  return (
    <section className="border-y border-border bg-muted/30 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-sm font-medium text-muted-foreground">
            بیش از <span className="text-primary font-bold">۱۵۰۰ خانواده</span> به امینی روبوکُد اعتماد کرده‌اند
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-background rounded-lg p-3 border border-border"
              >
                <badge.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

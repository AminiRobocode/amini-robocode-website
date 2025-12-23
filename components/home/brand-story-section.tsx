import { Brain, Heart, Lightbulb, Target } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "رویکرد روان‌شناختی",
    description: "آموزش متناسب با سن و مراحل رشد شناختی کودکان و نوجوانان",
  },
  {
    icon: Target,
    title: "یادگیری هدفمند",
    description: "تقویت مهارت حل مسئله، تفکر منطقی و خلاقیت",
  },
  {
    icon: Lightbulb,
    title: "پروژه‌محور و عملی",
    description: "یادگیری از طریق ساخت و طراحی پروژه‌های واقعی",
  },
  {
    icon: Heart,
    title: "محیط امن و حمایتی",
    description: "فضای یادگیری مثبت با تمرکز بر اعتمادبه‌نفس کودکان",
  },
]

export function BrandStorySection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold text-primary mb-2 block">چرا امینی روبوکُد؟</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-balance">
            ترکیب منحصربه‌فرد رباتیک، برنامه‌نویسی و روان‌شناسی
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            ما در امینی روبوکُد معتقدیم که آموزش رباتیک فراتر از یادگیری فناوری است. این مسیری است برای رشد مهارت‌های
            شناختی، تقویت هوش فضایی، و آماده‌سازی کودکان برای آینده‌ای پر از فرصت.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

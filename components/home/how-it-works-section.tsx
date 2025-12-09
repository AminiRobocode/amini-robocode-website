import { Calendar, CheckCircle, FileSearch, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    number: "۱",
    title: "مشاوره و ارزیابی",
    description: "ارزیابی رایگان توانایی‌ها و علایق فرزند شما توسط مشاوران متخصص",
  },
  {
    icon: Calendar,
    number: "۲",
    title: "انتخاب مسیر مناسب",
    description: "انتخاب بهترین مسیر یادگیری متناسب با سن، علایق و اهداف کودک",
  },
  {
    icon: CheckCircle,
    number: "۳",
    title: "شروع دوره",
    description: "شروع کلاس‌های عملی با مربیان مجرب و پشتیبانی کامل در طول دوره",
  },
  {
    icon: TrendingUp,
    number: "۴",
    title: "پیگیری و گزارش",
    description: "ارسال گزارش‌های منظم پیشرفت و دستاوردهای فرزندتان برای والدین",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary mb-2 block">فرآیند یادگیری</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-balance">چگونه کار می‌کنیم؟</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            مسیر یادگیری در آمینی روبوکُد به‌صورت گام‌به‌گام و با پشتیبانی کامل طراحی شده است.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-l from-primary via-accent to-secondary -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  {/* Number badge */}
                  <div className="absolute -top-4 right-1/2 translate-x-1/2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold border-4 border-background">
                      {step.number}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Right side in RTL */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-right order-2 lg:order-1">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                جدید: دوره‌های تابستانه ثبت‌نام شروع شد
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-balance">
              امینی روبوکُد؛ جایی که رباتیک و برنامه‌نویسی با{" "}
              <span className="bg-gradient-to-l from-primary via-accent to-secondary bg-clip-text text-transparent">
                رشد ذهنی کودکان
              </span>{" "}
              گره می‌خورد
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              از بازی با ربات تا حل مسئله‌های واقعی زندگی؛ مسیر آینده‌ساز فرزندتان از اینجا شروع می‌شود. آموزش پروژه‌محور با
              رویکرد روان‌شناسی و تقویت مهارت‌های شناختی.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg h-12 px-8">
                شروع مسیر یادگیری فرزند شما
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-12 px-8 bg-transparent">
                <Play className="ml-2 h-5 w-5" />
                مشاهده معرفی ویدیویی
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">بیش از ۱۲۰۰+ دانش‌آموز فعال</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex text-yellow-500">{"★".repeat(5)}</div>
                <span className="text-muted-foreground">رضایت ۹۸٪ والدین</span>
              </div>
            </div>
          </div>

          {/* Image - Left side in RTL */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative z-10">
                <Image
                  src="/children-learning-robotics-and-coding-with-robots-.jpg"
                  alt="کودکان در حال یادگیری رباتیک"
                  width={600}
                  height={600}
                  className="rounded-3xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-8 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  AI
                </div>
                <div>
                  <p className="font-semibold text-sm">هوش مصنوعی</p>
                  <p className="text-xs text-muted-foreground">و رباتیک</p>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-8 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  پروژه
                </div>
                <div>
                  <p className="font-semibold text-sm">یادگیری پروژه‌محور</p>
                  <p className="text-xs text-muted-foreground">عملی و کاربردی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

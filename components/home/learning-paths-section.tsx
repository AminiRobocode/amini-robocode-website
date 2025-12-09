import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Baby, Bot, Brain, Code, Cpu, FlaskConical, Gamepad2, Users } from "lucide-react"
import Link from "next/link"

const learningPaths = [
  {
    icon: Baby,
    title: "آموزش رباتیک برای کودکان",
    description: "آشنایی کودکان ۶ تا ۱۲ سال با دنیای رباتیک از طریق بازی و پروژه‌های سرگرم‌کننده",
    age: "۶-۱۲ سال",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "آموزش رباتیک برای نوجوانان",
    description: "پروژه‌های پیشرفته رباتیک و طراحی سیستم‌های هوشمند برای نوجوانان ۱۲ تا ۱۸ سال",
    age: "۱۲-۱۸ سال",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "آموزش برنامه‌نویسی",
    description: "یادگیری زبان‌های برنامه‌نویسی از پایه تا پیشرفته با پروژه‌های عملی",
    age: "۸-۱۸ سال",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "روان‌شناسی با رباتیک",
    description: "استفاده از رباتیک برای تقویت مهارت‌های اجتماعی، هیجانی و رشد شخصیتی",
    age: "۶-۱۸ سال",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Gamepad2,
    title: "تقویت هوش فضایی کودکان",
    description: "بازی‌ها و پروژه‌های رباتیک برای تقویت هوش فضایی و درک سه‌بعدی",
    age: "۶-۱۴ سال",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: FlaskConical,
    title: "رفع اختلالات یادگیری با رباتیک",
    description: "برنامه‌های تخصصی برای کمک به کودکان با اختلالات یادگیری از طریق رباتیک",
    age: "۶-۱۶ سال",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Bot,
    title: "هوشمندسازی ربات",
    description: "طراحی و ساخت ربات‌های هوشمند با قابلیت تصمیم‌گیری و یادگیری",
    age: "۱۰-۱۸ سال",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cpu,
    title: "الگوریتم و فلوچارت",
    description: "آموزش تفکر الگوریتمی و حل مسئله با استفاده از فلوچارت‌ها و شبه‌کدها",
    age: "۹-۱۸ سال",
    color: "from-teal-500 to-cyan-500",
  },
]

export function LearningPathsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary mb-2 block">مسیرهای یادگیری</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-balance">
            مسیر مناسب فرزند خود را انتخاب کنید
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            هر کودک منحصربه‌فرد است. ما مسیرهای متنوعی را برای پاسخگویی به نیازها و علایق مختلف طراحی کرده‌ایم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {learningPaths.map((path, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <path.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg font-heading">{path.title}</CardTitle>
                <CardDescription className="text-sm">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium mt-2">
                    {path.age}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{path.description}</p>
              </CardContent>
              <CardFooter>
                <Link href="/learning-paths" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    مشاهده جزئیات مسیر
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/learning-paths">
            <Button size="lg" variant="outline">
              مشاهده همه مسیرهای یادگیری
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

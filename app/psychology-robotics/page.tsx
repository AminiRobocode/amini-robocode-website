import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Brain, Heart, Shield, Smile, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const benefits = [
  {
    icon: Heart,
    title: "تقویت هوش هیجانی",
    description: "کمک به کودکان در شناخت و مدیریت احساسات خود از طریق تعامل با رباتیک",
  },
  {
    icon: Users,
    title: "بهبود مهارت‌های اجتماعی",
    description: "یادگیری کار تیمی، همکاری و ارتباط مؤثر در پروژه‌های گروهی",
  },
  {
    icon: Brain,
    title: "رشد شناختی",
    description: "تقویت حافظه، تمرکز و توانایی حل مسئله از طریق چالش‌های رباتیک",
  },
  {
    icon: Shield,
    title: "افزایش اعتماد به نفس",
    description: "احساس موفقیت از طریق ساخت و کنترل ربات‌های خود",
  },
  {
    icon: Smile,
    title: "کاهش استرس و اضطراب",
    description: "محیط یادگیری مثبت و حمایتی که استرس را کاهش می‌دهد",
  },
  {
    icon: Zap,
    title: "انگیزه و علاقه‌مندی",
    description: "ایجاد علاقه به یادگیری از طریق فعالیت‌های جذاب و تعاملی",
  },
]

const approaches = [
  {
    title: "رویکرد فردی",
    description: "برنامه آموزشی متناسب با نیازها و شخصیت هر کودک",
    image: "/psychology-individual-approach.jpg",
  },
  {
    title: "یادگیری بازی‌محور",
    description: "استفاده از بازی و سرگرمی برای یادگیری مفاهیم پیچیده",
    image: "/psychology-play-based-learning.jpg",
  },
  {
    title: "تقویت مثبت",
    description: "تشویق و پاداش برای تقویت رفتارها و مهارت‌های مثبت",
    image: "/psychology-positive-reinforcement.jpg",
  },
]

export default function PsychologyRoboticsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-bl from-orange-500/10 via-background to-amber-500/10 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-balance">
                  رباتیک برای کودکان و نوجوانان؛ تقویت خلاقیت، تمرکز و{" "}
                  <span className="bg-gradient-to-l from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    هوش فضایی
                  </span>{" "}
                  در یک محیط امن و هیجان‌انگیز
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  ما در امینی روبوکُد از رباتیک به‌عنوان ابزاری قدرتمند برای رشد مهارت‌های روان‌شناختی، اجتماعی و هیجانی
                  کودکان استفاده می‌کنیم. رویکرد ما مبتنی بر آخرین یافته‌های روان‌شناسی رشد کودک است.
                </p>
                <Link href="/contact">
                  <Button size="lg">
                    دریافت مشاوره تخصصی
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
                <Image
                  src="/children-happy-learning-robotics-psychology.jpg"
                  alt="کودکان شاد در حال یادگیری رباتیک"
                  fill
                  className="rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">مزایای روان‌شناختی رباتیک</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                رباتیک فراتر از یک مهارت فنی است؛ ابزاری برای رشد جامع کودکان
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Approaches */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">رویکرد ما</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                متدهای آموزشی ما مبتنی بر روان‌شناسی و علوم اعصاب شناختی است
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approaches.map((approach, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-2xl">
                    <Image
                      src={approach.image || "/placeholder.svg"}
                      alt={approach.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Programs */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">برنامه‌های تخصصی</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">کودکان با اختلالات یادگیری</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    برنامه تخصصی برای کودکان با دیسلکسی، ADHD و سایر چالش‌های یادگیری. رباتیک به‌عنوان ابزار کمکی برای
                    تقویت تمرکز، حافظه و مهارت‌های سازمانی.
                  </p>
                  <Link href="/learning-paths">
                    <Button variant="outline">
                      اطلاعات بیشتر
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">تقویت هوش فضایی</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    بازی‌ها و پروژه‌های رباتیک طراحی‌شده برای تقویت هوش فضایی و درک سه‌بعدی کودکان. این مهارت‌ها در ریاضیات،
                    علوم و حل مسئله کاربرد دارند.
                  </p>
                  <Link href="/learning-paths">
                    <Button variant="outline">
                      اطلاعات بیشتر
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-l from-orange-500 to-amber-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              آیا فرزندتان می‌تواند از این برنامه بهره‌مند شود؟
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              با مشاورین ما تماس بگیرید تا درباره نیازهای خاص فرزندتان صحبت کنید.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                تماس با مشاور
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Heart, Lightbulb, Target, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const values = [
  {
    icon: Heart,
    title: "عشق به یادگیری",
    description: "ما معتقدیم که یادگیری باید لذت‌بخش و هیجان‌انگیز باشد",
  },
  {
    icon: Lightbulb,
    title: "نوآوری و خلاقیت",
    description: "تشویق کودکان به تفکر خلاق و یافتن راه‌حل‌های نوآورانه",
  },
  {
    icon: Target,
    title: "هدفمندی",
    description: "آموزش با هدف رشد جامع کودکان در ابعاد مختلف",
  },
  {
    icon: Users,
    title: "کار تیمی",
    description: "یادگیری همکاری و احترام به نظرات دیگران",
  },
  {
    icon: Award,
    title: "تعالی",
    description: "تلاش برای ارائه بهترین کیفیت آموزشی",
  },
  {
    icon: Zap,
    title: "انگیزه",
    description: "الهام‌بخشی و ایجاد اشتیاق برای یادگیری مداوم",
  },
]

const team = [
  {
    name: "دکتر امیرحسین امینی",
    role: "بنیانگذار و مدیر عامل",
    image: "/team-founder-ceo.jpg",
    bio: "دکترای مهندسی رباتیک با ۱۵ سال تجربه آموزشی",
  },
  {
    name: "دکتر سارا محمدی",
    role: "مدیر آموزش و روان‌شناس",
    image: "/team-education-director.jpg",
    bio: "متخصص روان‌شناسی کودک و نوجوان",
  },
  {
    name: "مهندس علی رضایی",
    role: "مدیر فنی و برنامه‌نویسی",
    image: "/team-tech-director.jpg",
    bio: "مهندس نرم‌افزار با سابقه توسعه برنامه‌های آموزشی",
  },
  {
    name: "خانم فاطمه کریمی",
    role: "سرپرست مربیان",
    image: "/team-instructors-lead.jpg",
    bio: "مربی ارشد رباتیک با ۱۰ سال تجربه",
  },
]

const achievements = [
  {
    year: "۱۳۹۵",
    title: "تاسیس آمینی روبوکُد",
    description: "شروع فعالیت با ۲۰ دانش‌آموز",
  },
  {
    year: "۱۳۹۷",
    title: "گسترش به ۳ شعبه",
    description: "افتتاح شعب جدید و افزایش دانش‌آموزان به ۲۰۰ نفر",
  },
  {
    year: "۱۳۹۹",
    title: "دریافت جایزه بهترین مرکز آموزشی",
    description: "کسب رتبه اول در جشنواره ملی رباتیک",
  },
  {
    year: "۱۴۰۱",
    title: "راه‌اندازی دوره‌های آنلاین",
    description: "دسترسی به دانش‌آموزان در سراسر کشور",
  },
  {
    year: "۱۴۰۳",
    title: "بیش از ۱۵۰۰ دانش‌آموز فعال",
    description: "رشد و توسعه مداوم برنامه‌های آموزشی",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-bl from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-balance">درباره آمینی روبوکُد</h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  آمینی روبوکُد در سال ۱۳۹۵ با هدف ارائه آموزش رباتیک و برنامه‌نویسی با رویکرد روان‌شناختی و پروژه‌محور
                  تاسیس شد. ما معتقدیم که آموزش رباتیک فراتر از یادگیری فناوری است و می‌تواند به رشد جامع کودکان در ابعاد
                  شناختی، اجتماعی و عاطفی کمک کند.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  امروز با بیش از ۱۵۰۰ دانش‌آموز فعال، تیمی متشکل از ۵۰ مربی و مشاور متخصص، و دوره‌های متنوع از مقدماتی تا
                  پیشرفته، به یکی از پیشروترین مراکز آموزش رباتیک در کشور تبدیل شده‌ایم.
                </p>
                <Link href="/contact">
                  <Button size="lg">با ما همراه شوید</Button>
                </Link>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] order-1 lg:order-2">
                <Image
                  src="/about-team-teaching-robotics.jpg"
                  alt="تیم آمینی روبوکُد"
                  fill
                  className="rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">ماموریت ما</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    ماموریت ما ارائه آموزش رباتیک و برنامه‌نویسی با بالاترین کیفیت به کودکان و نوجوانان است. ما می‌خواهیم
                    نسلی خلاق، متفکر و مسئله‌حل پرورش دهیم که برای آینده‌ای پر از فرصت و چالش آماده باشند.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">چشم‌انداز ما</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    چشم‌انداز ما تبدیل شدن به پیشروترین مرکز آموزش STEM در منطقه است. ما می‌خواهیم با ارائه برنامه‌های
                    نوآورانه و مبتنی بر تحقیقات علمی، الگویی برای آموزش کودکان و نوجوانان در عصر دیجیتال باشیم.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">ارزش‌های ما</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                اصول و ارزش‌هایی که در تمام فعالیت‌های ما رعایت می‌شوند
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">مسیر پیشرفت ما</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">سفر آمینی روبوکُد از آغاز تا امروز</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

                <div className="space-y-12">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="text-2xl font-bold text-primary">{achievement.year}</div>
                            </div>
                            <CardTitle className="text-xl">{achievement.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{achievement.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg relative z-10" />
                      <div className="flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">تیم ما</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">افرادی که آمینی روبوکُد را می‌سازند</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-l from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">می‌خواهید بخشی از خانواده ما باشید؟</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              چه به‌عنوان دانش‌آموز، والد یا همکار، ما منتظر شنیدن از شما هستیم.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                تماس با ما
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

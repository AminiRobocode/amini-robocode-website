import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Baby, Bot, Brain, CheckCircle, Code, Cpu, FlaskConical, Gamepad2, Users, Clock } from "lucide-react"
import Link from "next/link"

const learningPaths = [
  {
    id: "robotics-kids",
    icon: Baby,
    title: "مسیر رباتیک برای کودکان",
    description: "یادگیری رباتیک از پایه تا پیشرفته برای کودکان ۶ تا ۱۲ سال",
    age: "۶-۱۲ سال",
    duration: "۱۲ ماه",
    color: "from-blue-500 to-cyan-500",
    levels: [
      {
        title: "سطح مقدماتی",
        duration: "۳ ماه",
        topics: ["آشنایی با قطعات رباتیک", "ساخت ربات‌های ساده", "کنترل ربات با دستورات پایه"],
      },
      {
        title: "سطح متوسط",
        duration: "۴ ماه",
        topics: ["کار با سنسورها", "برنامه‌نویسی بلوکی", "پروژه‌های تعاملی"],
      },
      {
        title: "سطح پیشرفته",
        duration: "۵ ماه",
        topics: ["ربات‌های خودکار", "حل مسئله با رباتیک", "مسابقات و چالش‌ها"],
      },
    ],
    benefits: ["تقویت خلاقیت و نوآوری", "رشد مهارت حل مسئله", "یادگیری کار تیمی", "افزایش اعتماد به نفس"],
  },
  {
    id: "robotics-teens",
    icon: Users,
    title: "مسیر رباتیک برای نوجوانان",
    description: "طراحی و ساخت سیستم‌های رباتیک پیچیده برای نوجوانان ۱۲ تا ۱۸ سال",
    age: "۱۲-۱۸ سال",
    duration: "۱۵ ماه",
    color: "from-purple-500 to-pink-500",
    levels: [
      {
        title: "طراحی مکانیکی",
        duration: "۴ ماه",
        topics: ["طراحی ساختار ربات", "انتخاب موتورها", "سیستم‌های حرکتی"],
      },
      {
        title: "برنامه‌نویسی پیشرفته",
        duration: "۵ ماه",
        topics: ["برنامه‌نویسی Arduino", "پردازش سنسورها", "الگوریتم‌های هوشمند"],
      },
      {
        title: "پروژه نهایی",
        duration: "۶ ماه",
        topics: ["طراحی پروژه شخصی", "ساخت ربات کامل", "ارائه و نمایش"],
      },
    ],
    benefits: [
      "آمادگی برای مسابقات بین‌المللی",
      "یادگیری مهندسی عملی",
      "توسعه مهارت‌های فنی",
      "آشنایی با تکنولوژی‌های جدید",
    ],
  },
  {
    id: "programming",
    icon: Code,
    title: "مسیر برنامه‌نویسی",
    description: "یادگیری برنامه‌نویسی از صفر تا حرفه‌ای",
    age: "۸-۱۸ سال",
    duration: "۱۸ ماه",
    color: "from-green-500 to-emerald-500",
    levels: [
      {
        title: "برنامه‌نویسی بصری",
        duration: "۳ ماه",
        topics: ["Scratch", "ساخت بازی‌های ساده", "مفاهیم پایه"],
      },
      {
        title: "زبان‌های متنی",
        duration: "۶ ماه",
        topics: ["Python", "ساختارهای داده", "الگوریتم‌ها"],
      },
      {
        title: "توسعه پروژه",
        duration: "۹ ماه",
        topics: ["ساخت اپلیکیشن", "وب‌سایت", "هوش مصنوعی"],
      },
    ],
    benefits: ["مهارت‌های قرن ۲۱", "فرصت‌های شغلی آینده", "تفکر منطقی و محاسباتی", "خلاقیت در حل مسئله"],
  },
  {
    id: "psychology-robotics",
    icon: Brain,
    title: "مسیر روان‌شناسی با رباتیک",
    description: "تقویت مهارت‌های اجتماعی و هیجانی از طریق رباتیک",
    age: "۶-۱۸ سال",
    duration: "۶ ماه",
    color: "from-orange-500 to-amber-500",
    levels: [
      {
        title: "خودشناسی",
        duration: "۲ ماه",
        topics: ["شناخت احساسات", "کنترل هیجان", "اعتماد به نفس"],
      },
      {
        title: "مهارت‌های اجتماعی",
        duration: "۲ ماه",
        topics: ["کار تیمی", "ارتباط مؤثر", "همدلی"],
      },
      {
        title: "حل مسئله",
        duration: "۲ ماه",
        topics: ["تفکر خلاق", "مدیریت استرس", "تصمیم‌گیری"],
      },
    ],
    benefits: ["بهبود روابط اجتماعی", "افزایش هوش هیجانی", "کاهش اضطراب", "تقویت شخصیت"],
  },
  {
    id: "spatial-intelligence",
    icon: Gamepad2,
    title: "مسیر تقویت هوش فضایی",
    description: "رشد هوش فضایی و درک سه‌بعدی از طریق رباتیک",
    age: "۶-۱۴ سال",
    duration: "۴ ماه",
    color: "from-cyan-500 to-blue-500",
    levels: [
      {
        title: "درک فضای دوبعدی",
        duration: "۱.۵ ماه",
        topics: ["شکل‌های هندسی", "جهت‌یابی", "نقشه‌خوانی"],
      },
      {
        title: "تفکر سه‌بعدی",
        duration: "۱.۵ ماه",
        topics: ["ساخت مدل", "چرخش و دوران", "پرسپکتیو"],
      },
      {
        title: "کاربردهای عملی",
        duration: "۱ ماه",
        topics: ["ناوبری ربات", "طراحی مسیر", "حل پازل‌های فضایی"],
      },
    ],
    benefits: ["تقویت ریاضیات", "بهبود توانایی طراحی", "درک بهتر محیط", "رشد مهارت حل مسئله"],
  },
  {
    id: "learning-disorders",
    icon: FlaskConical,
    title: "مسیر رفع اختلالات یادگیری",
    description: "برنامه تخصصی برای کودکان با چالش‌های یادگیری",
    age: "۶-۱۶ سال",
    duration: "۹ ماه",
    color: "from-pink-500 to-rose-500",
    levels: [
      {
        title: "ارزیابی و شناسایی",
        duration: "۱ ماه",
        topics: ["تست‌های تخصصی", "شناسایی نقاط قوت", "برنامه شخصی"],
      },
      {
        title: "آموزش تطبیقی",
        duration: "۴ ماه",
        topics: ["یادگیری چندحسی", "تکنیک‌های تمرکز", "تقویت حافظه"],
      },
      {
        title: "تثبیت و استقلال",
        duration: "۴ ماه",
        topics: ["استراتژی‌های یادگیری", "خودکارآمدی", "پیگیری پیشرفت"],
      },
    ],
    benefits: ["بهبود عملکرد تحصیلی", "افزایش تمرکز", "کاهش اضطراب یادگیری", "رشد اعتماد به نفس"],
  },
  {
    id: "smart-robots",
    icon: Bot,
    title: "مسیر هوشمندسازی ربات",
    description: "ساخت ربات‌های هوشمند با AI و یادگیری ماشین",
    age: "۱۳-۱۸ سال",
    duration: "۱۲ ماه",
    color: "from-indigo-500 to-purple-500",
    levels: [
      {
        title: "مبانی هوش مصنوعی",
        duration: "۳ ماه",
        topics: ["مفهوم AI", "یادگیری ماشین", "شبکه‌های عصبی"],
      },
      {
        title: "بینایی ماشین",
        duration: "۴ ماه",
        topics: ["پردازش تصویر", "تشخیص اشیا", "ردیابی"],
      },
      {
        title: "ربات هوشمند",
        duration: "۵ ماه",
        topics: ["تصمیم‌گیری خودکار", "ربات یادگیرنده", "پروژه پیشرفته"],
      },
    ],
    benefits: ["مهارت‌های آینده‌محور", "آشنایی با AI", "توسعه پروژه‌های پیچیده", "آمادگی دانشگاهی"],
  },
  {
    id: "algorithms",
    icon: Cpu,
    title: "مسیر الگوریتم و تفکر محاسباتی",
    description: "یادگیری تفکر الگوریتمی و حل مسئله سیستماتیک",
    age: "۹-۱۸ سال",
    duration: "۸ ماه",
    color: "from-teal-500 to-cyan-500",
    levels: [
      {
        title: "مفاهیم پایه",
        duration: "۲ ماه",
        topics: ["فلوچارت", "شبه‌کد", "تجزیه مسئله"],
      },
      {
        title: "الگوریتم‌های کلاسیک",
        duration: "۳ ماه",
        topics: ["مرتب‌سازی", "جستجو", "بازگشتی"],
      },
      {
        title: "حل مسئله پیشرفته",
        duration: "۳ ماه",
        topics: ["بهینه‌سازی", "الگوریتم‌های گراف", "برنامه‌نویسی پویا"],
      },
    ],
    benefits: ["تفکر منطقی قوی", "آمادگی مسابقات برنامه‌نویسی", "حل مسائل پیچیده", "بنیان محکم برنامه‌نویسی"],
  },
]

export default function LearningPathsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-bl from-accent/10 via-background to-primary/10 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-balance">
                مسیرهای یادگیری امینی روبوکُد
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                هر کودک مسیر منحصربه‌فرد خود را دارد. مسیرهای یادگیری ما به‌صورت گام‌به‌گام طراحی شده‌اند تا فرزندتان از
                مقدماتی تا پیشرفته پیشرفت کند.
              </p>
              <Button size="lg">
                دریافت برنامه آموزشی متناسب با سن فرزند شما
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {learningPaths.map((path, index) => (
                <div
                  key={path.id}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-start`}
                >
                  {/* Path Overview */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center mb-4`}
                      >
                        <path.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold font-heading mb-2">{path.title}</h2>
                      <p className="text-muted-foreground mb-4">{path.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>سن: {path.age}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>مدت: {path.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="font-semibold mb-3">مزایای این مسیر:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {path.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button size="lg">
                        شروع این مسیر
                        <ArrowLeft className="mr-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Levels */}
                  <div className="flex-1 space-y-4">
                    {path.levels.map((level, i) => (
                      <Card key={i} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{level.title}</CardTitle>
                            <span className="text-sm text-muted-foreground">{level.duration}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>
                            <ul className="space-y-2">
                              {level.topics.map((topic, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="text-sm">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-l from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">آماده شروع سفر یادگیری هستید؟</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              با ما تماس بگیرید تا بهترین مسیر یادگیری را برای فرزندتان طراحی کنیم.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                تماس با مشاور آموزشی
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

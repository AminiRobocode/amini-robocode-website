import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Users, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const courses = [
  {
    id: "robotics-kids",
    title: "رباتیک برای کودکان (مقدماتی)",
    description: "آشنایی با مفاهیم پایه رباتیک از طریق بازی و پروژه‌های سرگرم‌کننده",
    image: "/course-robotics-kids-beginner.jpg",
    age: "۶-۹ سال",
    duration: "۳ ماه",
    sessions: "۱۲ جلسه",
    level: "مقدماتی",
    format: "حضوری / آنلاین",
    price: "۲,۵۰۰,۰۰۰ تومان",
    category: "رباتیک کودکان",
  },
  {
    id: "robotics-kids-advanced",
    title: "رباتیک برای کودکان (پیشرفته)",
    description: "ساخت ربات‌های پیچیده‌تر و یادگیری سنسورها و حسگرها",
    image: "/course-robotics-kids-advanced.jpg",
    age: "۹-۱۲ سال",
    duration: "۴ ماه",
    sessions: "۱۶ جلسه",
    level: "پیشرفته",
    format: "حضوری / آنلاین",
    price: "۳,۲۰۰,۰۰۰ تومان",
    category: "رباتیک کودکان",
  },
  {
    id: "robotics-teens",
    title: "رباتیک برای نوجوانان",
    description: "طراحی و برنامه‌نویسی ربات‌های هوشمند و سیستم‌های خودکار",
    image: "/course-robotics-teens.jpg",
    age: "۱۲-۱۵ سال",
    duration: "۵ ماه",
    sessions: "۲۰ جلسه",
    level: "متوسط تا پیشرفته",
    format: "حضوری / آنلاین",
    price: "۴,۰۰۰,۰۰۰ تومان",
    category: "رباتیک نوجوانان",
  },
  {
    id: "programming-scratch",
    title: "برنامه‌نویسی با Scratch",
    description: "یادگیری مفاهیم برنامه‌نویسی به زبان ساده با اسکرچ",
    image: "/course-programming-scratch.jpg",
    age: "۸-۱۲ سال",
    duration: "۳ ماه",
    sessions: "۱۲ جلسه",
    level: "مقدماتی",
    format: "آنلاین",
    price: "۱,۸۰۰,۰۰۰ تومان",
    category: "برنامه‌نویسی",
  },
  {
    id: "programming-python",
    title: "برنامه‌نویسی پایتون",
    description: "آموزش زبان برنامه‌نویسی پایتون برای نوجوانان",
    image: "/course-programming-python.jpg",
    age: "۱۲-۱۸ سال",
    duration: "۶ ماه",
    sessions: "۲۴ جلسه",
    level: "مقدماتی تا متوسط",
    format: "حضوری / آنلاین",
    price: "۴,۵۰۰,۰۰۰ تومان",
    category: "برنامه‌نویسی",
  },
  {
    id: "psychology-robotics",
    title: "روان‌شناسی با رباتیک",
    description: "استفاده از رباتیک برای تقویت مهارت‌های اجتماعی و هیجانی",
    image: "/course-psychology-robotics.jpg",
    age: "۶-۱۴ سال",
    duration: "۴ ماه",
    sessions: "۱۶ جلسه",
    level: "همه سطوح",
    format: "حضوری",
    price: "۳,۸۰۰,۰۰۰ تومان",
    category: "روان‌شناسی",
  },
  {
    id: "spatial-intelligence",
    title: "تقویت هوش فضایی",
    description: "بازی‌ها و پروژه‌های رباتیک برای رشد هوش فضایی",
    image: "/course-spatial-intelligence.jpg",
    age: "۶-۱۲ سال",
    duration: "۳ ماه",
    sessions: "۱۲ جلسه",
    level: "مقدماتی",
    format: "حضوری / آنلاین",
    price: "۲,۸۰۰,۰۰۰ تومان",
    category: "تقویت مهارت‌ها",
  },
  {
    id: "learning-disorders",
    title: "رفع اختلالات یادگیری",
    description: "برنامه تخصصی برای کمک به کودکان با اختلالات یادگیری",
    image: "/course-learning-disorders.jpg",
    age: "۶-۱۴ سال",
    duration: "۶ ماه",
    sessions: "۲۴ جلسه",
    level: "تخصصی",
    format: "حضوری",
    price: "۵,۵۰۰,۰۰۰ تومان",
    category: "تخصصی",
  },
  {
    id: "smart-robots",
    title: "هوشمندسازی ربات",
    description: "ساخت ربات‌های هوشمند با قابلیت تصمیم‌گیری و یادگیری",
    image: "/course-smart-robots.jpg",
    age: "۱۳-۱۸ سال",
    duration: "۵ ماه",
    sessions: "۲۰ جلسه",
    level: "پیشرفته",
    format: "حضوری",
    price: "۵,۰۰۰,۰۰۰ تومان",
    category: "رباتیک پیشرفته",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-bl from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-balance">
                دوره‌های آموزشی امینی روبوکُد
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                از بین دوره‌های متنوع ما، مناسب‌ترین را برای فرزندتان انتخاب کنید. همه دوره‌ها با رویکرد پروژه‌محور و تعاملی
                طراحی شده‌اند.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg">
                  رزرو مشاوره رایگان
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  مقایسه دوره‌ها
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">{course.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>سن: {course.age}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>مدت: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{course.sessions}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Video className="h-4 w-4 text-primary" />
                      <span>{course.format}</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-2xl font-bold text-primary">{course.price}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link href={`/courses/${course.id}`} className="flex-1">
                      <Button className="w-full">
                        مشاهده جزئیات
                        <ArrowLeft className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-l from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">مطمئن نیستید کدام دوره مناسب است؟</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              مشاوران ما به شما کمک می‌کنند بهترین مسیر یادگیری را برای فرزندتان پیدا کنید.
            </p>
            <Button size="lg" variant="secondary">
              درخواست مشاوره رایگان
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

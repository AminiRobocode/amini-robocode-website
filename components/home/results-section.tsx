import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Smile, Trophy } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Smile, value: "۱۵۰۰+", label: "دانش‌آموز فعال" },
  { icon: BookOpen, value: "۲۸۰+", label: "پروژه تکمیل شده" },
  { icon: Award, value: "۹۸٪", label: "رضایت والدین" },
  { icon: Trophy, value: "۴۵+", label: "جوایز و افتخارات" },
]

const projects = [
  {
    title: "ربات مسیریاب هوشمند",
    student: "علی رضایی - ۱۴ ساله",
    image: "/smart-robot-navigating-maze-educational-project.jpg",
  },
  {
    title: "سیستم خانه هوشمند",
    student: "سارا احمدی - ۱۲ ساله",
    image: "/smart-home-automation-system-student-project.jpg",
  },
  {
    title: "بازوی رباتیک کنترلی",
    student: "محمد کریمی - ۱۵ ساله",
    image: "/robotic-arm-controlled-by-student-educational.jpg",
  },
]

export function ResultsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects showcase */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary mb-2 block">نتایج و پروژه‌ها</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-balance">پروژه‌های دانش‌آموزان ما</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            ببینید دانش‌آموزان ما چه پروژه‌های شگفت‌انگیزی ساخته‌اند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.student}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">مشاهده همه پروژه‌ها</Button>
        </div>
      </div>
    </section>
  )
}

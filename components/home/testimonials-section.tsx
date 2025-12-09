import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "خانم محمدی",
    role: "والد",
    avatar: "/parent-woman-persian-testimonial.jpg",
    text: "پسرم در کلاس‌های رباتیک آمینی روبوکُد شرکت می‌کند. تغییراتی که در تمرکز و اعتمادبه‌نفس او دیدم باورنکردنی بود. واقعاً حرفه‌ای‌ترین مرکز آموزش رباتیک است.",
    rating: 5,
  },
  {
    name: "آقای رضایی",
    role: "والد",
    avatar: "/parent-man-persian-testimonial.jpg",
    text: "دخترم عاشق کلاس‌های برنامه‌نویسی شده است. مربیان بسیار صبور و حرفه‌ای هستند و محیط یادگیری فوق‌العاده‌ای دارند.",
    rating: 5,
  },
  {
    name: "علی احمدی",
    role: "دانش‌آموز ۱۴ ساله",
    avatar: "/teenage-boy-student-persian-happy.jpg",
    text: "من الان می‌تونم ربات‌های خودم رو بسازم و برنامه‌نویسی کنم. کلاس‌ها خیلی جذاب و سرگرم‌کننده‌اند و هر جلسه چیزهای جدید یاد می‌گیرم.",
    rating: 5,
  },
  {
    name: "خانم کریمی",
    role: "والد",
    avatar: "/parent-woman-persian-happy-testimonial.jpg",
    text: "پسرم اختلال یادگیری داشت. با برنامه تخصصی رفع اختلالات یادگیری آمینی روبوکُد، پیشرفت چشمگیری کرده است. از تیم آمینی روبوکُد بی‌نهایت سپاسگزارم.",
    rating: 5,
  },
  {
    name: "سارا موسوی",
    role: "دانش‌آموز ۱۲ ساله",
    avatar: "/teenage-girl-student-persian-smiling.jpg",
    text: "دوست دارم در کلاس‌های رباتیک پروژه بسازم. معلم‌ها خیلی مهربون هستند و به ما کمک می‌کنند تا ایده‌های خودمون رو پیاده کنیم.",
    rating: 5,
  },
  {
    name: "آقای صادقی",
    role: "والد",
    avatar: "/parent-man-persian-satisfied-testimonial.jpg",
    text: "بهترین سرمایه‌گذاری برای آینده فرزندم بود. او الان می‌داند که چطور مسائل پیچیده را حل کند و خلاقیتش بی‌نهایت رشد کرده است.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary mb-2 block">نظرات والدین و دانش‌آموزان</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-balance">آنها چه می‌گویند؟</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            تجربه خانواده‌های دیگر را بخوانید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{testimonial.text}</p>
                <div className="flex text-yellow-500 mb-4">{"★".repeat(testimonial.rating)}</div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

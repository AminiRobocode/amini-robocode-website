import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "آیا فرزند من برای شرکت در دوره‌ها نیاز به دانش قبلی دارد؟",
    answer:
      "خیر، دوره‌های ما از سطح مقدماتی شروع می‌شوند و نیازی به دانش قبلی نیست. ما با ارزیابی اولیه، سطح مناسب را برای هر دانش‌آموز تعیین می‌کنیم.",
  },
  {
    question: "محدوده سنی دانش‌آموزان چقدر است؟",
    answer: "ما دوره‌های مختلفی برای بازه سنی ۶ تا ۱۸ سال داریم. هر مسیر یادگیری برای گروه سنی خاصی طراحی شده است.",
  },
  {
    question: "آیا کلاس‌ها به‌صورت حضوری یا آنلاین برگزار می‌شوند؟",
    answer:
      "ما هر دو گزینه را ارائه می‌دهیم. کلاس‌های حضوری در مرکز آموزشی ما و کلاس‌های آنلاین از طریق پلتفرم تعاملی برگزار می‌شوند.",
  },
  {
    question: "مدت زمان هر دوره چقدر است؟",
    answer: "مدت زمان دوره‌ها بسته به سطح و موضوع متفاوت است، اما معمولاً بین ۳ تا ۶ ماه است با جلسات هفتگی.",
  },
  {
    question: "هزینه دوره‌ها چگونه است؟",
    answer:
      "هزینه‌ها بسته به نوع دوره و مدت زمان متفاوت است. برای اطلاعات دقیق می‌توانید با ما تماس بگیرید یا فرم مشاوره را تکمیل کنید.",
  },
  {
    question: "آیا گواهینامه بعد از اتمام دوره ارائه می‌شود؟",
    answer: "بله، دانش‌آموزانی که دوره را با موفقیت به پایان برسانند، گواهینامه معتبر دریافت می‌کنند.",
  },
  {
    question: "آیا برای والدین گزارش پیشرفت ارائه می‌شود؟",
    answer: "بله، والدین به‌صورت منظم گزارش‌های پیشرفت دریافت می‌کنند و می‌توانند با مربیان در ارتباط باشند.",
  },
  {
    question: "آیا امکان جبران کلاس‌های از دست رفته وجود دارد؟",
    answer:
      "بله، در صورت غیبت با هماهنگی قبلی، کلاس جبرانی برگزار می‌شود یا ویدیوی ضبط‌شده کلاس در اختیار دانش‌آموز قرار می‌گیرد.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary mb-2 block">سوالات متداول</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-balance">پاسخ سوالات شما</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              پاسخ رایج‌ترین سوالات والدین و دانش‌آموزان را در اینجا بیابید
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-right hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">سوال دیگری دارید؟</p>
            <Link href="/contact">
              <Button size="lg">تماس با ما</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

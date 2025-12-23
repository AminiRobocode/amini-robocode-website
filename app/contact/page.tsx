import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "آدرس دفتر مرکزی",
    content: "تهران، خیابان ولیعصر، پلاک ۱۲۳۴",
    link: "#",
  },
  {
    icon: Phone,
    title: "تلفن تماس",
    content: "۰۲۱-۱۲۳۴۵۶۷۸",
    link: "tel:+982112345678",
  },
  {
    icon: Mail,
    title: "ایمیل",
    content: "info@aminirobocode.com",
    link: "mailto:info@aminirobocode.com",
  },
  {
    icon: Clock,
    title: "ساعات کاری",
    content: "شنبه تا پنج‌شنبه، ۹ صبح تا ۶ عصر",
    link: "#",
  },
]

const branches = [
  {
    name: "شعبه مرکزی - تهران",
    address: "تهران، خیابان ولیعصر، پلاک ۱۲۳۴",
    phone: "۰۲۱-۱۲۳۴۵۶۷۸",
  },
  {
    name: "شعبه شمال - تهران",
    address: "تهران، میدان تجریش، خیابان شریعتی",
    phone: "۰۲۱-۲۲۳۳۴۴۵۵",
  },
  {
    name: "شعبه غرب - تهران",
    address: "تهران، میدان آزادی، خیابان آزادی",
    phone: "۰۲۱-۶۶۷۷۸۸۹۹",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-bl from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-balance">تماس با امینی روبوکُد</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                سوال، نظر یا پیشنهادی دارید؟ ما همیشه خوشحال می‌شویم که از شما بشنویم. از طریق فرم زیر با ما در ارتباط
                باشید.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link !== "#" ? (
                      <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6">فرم تماس</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>پیام خود را برای ما بنویسید</CardTitle>
                    <CardDescription>ما در اسرع وقت با شما تماس خواهیم گرفت</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">نام</Label>
                          <Input id="firstName" placeholder="نام خود را وارد کنید" className="text-right" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">نام خانوادگی</Label>
                          <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" className="text-right" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">ایمیل</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@email.com"
                          className="text-right"
                          dir="ltr"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">شماره تماس</Label>
                        <Input id="phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" className="text-right" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">موضوع</Label>
                        <Select dir="rtl">
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="موضوع را انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">درخواست مشاوره</SelectItem>
                            <SelectItem value="registration">ثبت‌نام در دوره</SelectItem>
                            <SelectItem value="info">اطلاعات عمومی</SelectItem>
                            <SelectItem value="collaboration">همکاری</SelectItem>
                            <SelectItem value="feedback">نظرات و پیشنهادات</SelectItem>
                            <SelectItem value="other">سایر</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">پیام</Label>
                        <Textarea
                          id="message"
                          placeholder="پیام خود را اینجا بنویسید..."
                          rows={6}
                          className="text-right"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        ارسال پیام
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Branches Info */}
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6">شعبه‌های ما</h2>
                <div className="space-y-6">
                  {branches.map((branch, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{branch.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-muted-foreground">{branch.address}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                          <a href={`tel:${branch.phone}`} className="text-sm text-muted-foreground hover:text-primary">
                            {branch.phone}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Map Placeholder */}
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground text-sm">نقشه شعبه‌ها</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-heading mb-4">سوالات متداول</h2>
              <p className="text-muted-foreground mb-8">شاید پاسخ سوال شما در بخش سوالات متداول موجود باشد</p>
              <Button size="lg" variant="outline" asChild>
                <a href="/#faq">مشاهده سوالات متداول</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-l from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">ترجیح می‌دهید تماس تلفنی داشته باشید؟</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              مشاوران ما آماده پاسخگویی به سوالات شما از ساعت ۹ صبح تا ۶ عصر هستند.
            </p>
            <a href="tel:+982112345678">
              <Button size="lg" variant="secondary">
                تماس با مشاور
              </Button>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

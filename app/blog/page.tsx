import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, Clock, Search, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: "benefits-robotics-kids",
    title: "فواید آموزش رباتیک برای کودکان: چرا فرزند شما به رباتیک نیاز دارد؟",
    excerpt:
      "آموزش رباتیک فراتر از یادگیری فناوری است. در این مقاله بررسی می‌کنیم که چگونه رباتیک به رشد مهارت‌های شناختی، اجتماعی و عاطفی کودکان کمک می‌کند.",
    image: "/blog-benefits-robotics-kids.jpg",
    category: "رباتیک",
    author: "دکتر سارا احمدی",
    date: "۱۵ اسفند ۱۴۰۳",
    readTime: "۷ دقیقه",
  },
  {
    id: "programming-problem-solving",
    title: "نقش برنامه‌نویسی در تقویت مهارت حل مسئله کودکان",
    excerpt:
      "برنامه‌نویسی به کودکان می‌آموزد که چگونه مسائل پیچیده را به قسمت‌های کوچک‌تر تقسیم کنند و گام‌به‌گام به سمت راه‌حل پیش بروند.",
    image: "/blog-programming-problem-solving.jpg",
    category: "برنامه‌نویسی",
    author: "مهندس علی رضایی",
    date: "۱۲ اسفند ۱۴۰۳",
    readTime: "۵ دقیقه",
  },
  {
    id: "robotics-learning-disorders",
    title: "رباتیک و کمک به رفع اختلالات یادگیری: نگاهی علمی",
    excerpt:
      "تحقیقات نشان می‌دهد که آموزش رباتیک می‌تواند به کودکان با دیسلکسی، ADHD و سایر اختلالات یادگیری کمک کند. در این مقاله به بررسی این موضوع می‌پردازیم.",
    image: "/blog-robotics-learning-disorders.jpg",
    category: "روان‌شناسی",
    author: "دکتر محمد کریمی",
    date: "۸ اسفند ۱۴۰۳",
    readTime: "۹ دقیقه",
  },
  {
    id: "spatial-intelligence-games",
    title: "هوش فضایی و بازی‌های آموزشی: راهنمای والدین",
    excerpt:
      "هوش فضایی یکی از مهم‌ترین توانایی‌های شناختی است که در ریاضیات، علوم و مهندسی کاربرد دارد. با بازی‌های رباتیک می‌توان این مهارت را تقویت کرد.",
    image: "/blog-spatial-intelligence-games.jpg",
    category: "تقویت مهارت‌ها",
    author: "خانم زهرا موسوی",
    date: "۵ اسفند ۱۴۰۳",
    readTime: "۶ دقیقه",
  },
  {
    id: "ai-future-education",
    title: "هوش مصنوعی و آینده آموزش: چه چیزی کودکان باید یاد بگیرند؟",
    excerpt:
      "با پیشرفت هوش مصنوعی، کودکان امروز باید برای آینده‌ای متفاوت آماده شوند. این مقاله به بررسی مهارت‌های آینده‌محور می‌پردازد.",
    image: "/blog-ai-future-education.jpg",
    category: "آینده آموزش",
    author: "دکتر حسین صادقی",
    date: "۱ اسفند ۱۴۰۳",
    readTime: "۸ دقیقه",
  },
  {
    id: "parent-guide-stem",
    title: "راهنمای والدین برای تشویق کودکان به یادگیری STEM",
    excerpt:
      "چگونه می‌توانید کودکان را به یادگیری علوم، فناوری، مهندسی و ریاضیات علاقه‌مند کنید؟ راهکارهای عملی برای والدین.",
    image: "/blog-parent-guide-stem.jpg",
    category: "راهنمای والدین",
    author: "خانم فاطمه محمدی",
    date: "۲۸ بهمن ۱۴۰۳",
    readTime: "۶ دقیقه",
  },
  {
    id: "teamwork-robotics",
    title: "یادگیری کار تیمی از طریق پروژه‌های رباتیک",
    excerpt:
      "کار تیمی یکی از مهم‌ترین مهارت‌های قرن ۲۱ است. پروژه‌های رباتیک محیطی ایده‌آل برای یادگیری این مهارت را فراهم می‌کنند.",
    image: "/blog-teamwork-robotics.jpg",
    category: "مهارت‌های اجتماعی",
    author: "مهندس رضا نوری",
    date: "۲۵ بهمن ۱۴۰۳",
    readTime: "۵ دقیقه",
  },
  {
    id: "coding-creativity",
    title: "برنامه‌نویسی و خلاقیت: آیا کدنویسی خلاقانه است؟",
    excerpt:
      "بسیاری فکر می‌کنند برنامه‌نویسی فقط منطق و ریاضی است، اما در واقع برنامه‌نویسی یکی از خلاقانه‌ترین فعالیت‌هاست.",
    image: "/blog-coding-creativity.jpg",
    category: "برنامه‌نویسی",
    author: "خانم نیلوفر امینی",
    date: "۲۲ بهمن ۱۴۰۳",
    readTime: "۷ دقیقه",
  },
  {
    id: "girls-robotics",
    title: "دختران و رباتیک: شکستن کلیشه‌ها",
    excerpt: "چرا دختران باید به رباتیک و برنامه‌نویسی علاقه‌مند شوند؟ بررسی کلیشه‌های جنسیتی و راهکارهای تشویق دختران.",
    image: "/blog-girls-robotics.jpg",
    category: "رباتیک",
    author: "دکتر مریم احمدی",
    date: "۱۸ بهمن ۱۴۰۳",
    readTime: "۶ دقیقه",
  },
]

const categories = ["همه", "رباتیک", "برنامه‌نویسی", "روان‌شناسی", "تقویت مهارت‌ها", "راهنمای والدین"]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-bl from-primary/10 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-balance">بلاگ آمینی روبوکُد</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                مقالات، راهنماها و آخرین اخبار دنیای رباتیک، برنامه‌نویسی و آموزش کودکان
              </p>

              {/* Search */}
              <div className="flex gap-2 max-w-xl mx-auto">
                <Button size="lg">
                  <Search className="h-5 w-5" />
                </Button>
                <Input type="search" placeholder="جستجو در مقالات..." className="text-right h-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button key={category} variant={category === "همه" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold font-heading mb-2">مقاله ویژه</h2>
              <div className="h-1 w-20 bg-gradient-to-l from-primary to-accent rounded-full" />
            </div>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{blogPosts[0].category}</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl font-heading mb-4 leading-tight">
                      {blogPosts[0].title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{blogPosts[0].excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mb-6">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Link href={`/blog/${blogPosts[0].id}`}>
                      <Button size="lg">
                        مطالعه مقاله
                        <ArrowLeft className="mr-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold font-heading mb-2">آخرین مقالات</h2>
              <div className="h-1 w-20 bg-gradient-to-l from-primary to-accent rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground w-full">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        مطالعه مقاله
                        <ArrowLeft className="mr-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                مشاهده مقالات بیشتر
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-l from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">مقالات جدید را از دست ندهید</h2>
              <p className="text-lg mb-8 opacity-90">
                با عضویت در خبرنامه ما، جدیدترین مقالات و نکات آموزشی را دریافت کنید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Button size="lg" variant="secondary" className="sm:w-auto">
                  عضویت در خبرنامه
                </Button>
                <Input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="text-right h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

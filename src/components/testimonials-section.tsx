import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Родригес",
    role: "Head of Marketing, Quantum Dynamics",
    avatar: "/professional-woman-scientist.png",
    content:
      "С Fable 5 мы стали выпускать в 4 раза больше контента. Тексты и картинки под наш бренд — за минуты, а не за дни.",
  },
  {
    name: "Маркус Уильямс",
    role: "CTO, Stellar Analytics",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Fable 5 ускорил нашу разработку в разы. Модель отлично пишет и объясняет код, а огромный контекст держит весь проект целиком.",
  },
  {
    name: "Анна Ковальски",
    role: "Product Lead, Nova Industries",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Загружаем большие отчёты и получаем чёткие выжимки за секунды. Fable 5 понимает контекст лучше всех моделей, что мы пробовали.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нас уже выбирают команды</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто уже работает с Fable 5 каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
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
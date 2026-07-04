import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Генерация текста",
    description: "Пишет статьи, посты, письма и сценарии на 90+ языках. Понимает контекст и держит единый стиль в длинных документах.",
    icon: "brain",
    badge: "Текст",
  },
  {
    title: "Создание изображений",
    description: "Превращает описание в фотореалистичные картинки и иллюстрации за секунды. Полный контроль над стилем и композицией.",
    icon: "target",
    badge: "Картинки",
  },
  {
    title: "Помощь с кодом",
    description: "Пишет, объясняет и исправляет код на 40+ языках программирования. Ускоряет разработку в разы.",
    icon: "zap",
    badge: "Код",
  },
  {
    title: "Огромный контекст",
    description: "Обрабатывает до 1 млн токенов за раз — целые книги, отчёты и кодовые базы без потери деталей.",
    icon: "globe",
    badge: "1M токенов",
  },
  {
    title: "Мгновенный отклик",
    description: "Ответы в реальном времени благодаря оптимизированной архитектуре. В 3 раза быстрее предыдущей версии.",
    icon: "link",
    badge: "Скорость",
  },
  {
    title: "Безопасность данных",
    description: "Ваши запросы не используются для обучения. Шифрование и полный контроль над конфиденциальностью.",
    icon: "lock",
    badge: "Приватность",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё, что умеет Fable 5</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Одна нейросеть для текста, изображений и кода — быстрее и умнее прошлого поколения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
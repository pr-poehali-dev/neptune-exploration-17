import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Чем Fable 5 отличается от прошлой версии?",
      answer:
        "Fable 5 работает в 3 раза быстрее, понимает контекст до 1 млн токенов и генерирует не только текст, но и изображения. Качество ответов и код заметно точнее.",
    },
    {
      question: "На каких языках работает нейросеть?",
      answer:
        "Fable 5 понимает и генерирует контент на 90+ языках, включая русский, и умеет переводить между ними без потери смысла.",
    },
    {
      question: "Безопасны ли мои данные?",
      answer:
        "Да. Ваши запросы не используются для обучения модели. Все данные передаются в зашифрованном виде, а вы полностью контролируете конфиденциальность.",
    },
    {
      question: "Можно ли использовать Fable 5 в бизнесе?",
      answer:
        "Конечно. Fable 5 подходит для маркетинга, разработки, аналитики и поддержки клиентов. Есть API для интеграции в ваши продукты и рабочие процессы.",
    },
    {
      question: "Нужны ли навыки программирования?",
      answer:
        "Нет. Достаточно описать задачу обычными словами — Fable 5 сам поймёт, что нужно сделать. Для разработчиков доступен API и расширенные настройки.",
    },
    {
      question: "Как получить доступ к Fable 5?",
      answer:
        "Оставьте заявку на ранний доступ, и мы пришлём приглашение. Доступны бесплатный тариф для знакомства и расширенные планы для команд.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о возможностях Fable 5, безопасности и доступе.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
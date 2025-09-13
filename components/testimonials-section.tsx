import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content:
        "Networthwars transformed how I think about money. The gamified approach made learning about investments actually fun!",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "College Student",
      content:
        "Finally, a finance course that doesn't put me to sleep. The daily quizzes keep me motivated and the hackathons are amazing.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Marketing Manager",
      content:
        "I went from knowing nothing about finance to confidently managing my portfolio. The chapter-based system is brilliant.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">What Our Learners Say</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join thousands of satisfied learners who have transformed their financial future with Networthwars.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

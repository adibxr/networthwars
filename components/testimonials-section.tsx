import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aditya Sharma",
      role: "Software Engineer",
      content:
        "Networthwars made finance so simple! The gamified approach helped me understand mutual funds and SIPs perfectly. Now I'm confidently investing!",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "College Student",
      content:
        "Finally, a finance course that doesn't bore me to death. The daily quizzes and hackathons keep me motivated. Best investment in my education!",
      rating: 5,
    },
    {
      name: "Abhinav Singh",
      role: "Marketing Manager",
      content:
        "From zero financial knowledge to managing my portfolio like a pro. The chapter-based system is brilliant and easy to follow.",
      rating: 5,
    },
    {
      name: "Aksh Gupta",
      role: "Startup Founder",
      content:
        "This platform transformed my understanding of business finance. The interactive lessons and real-world examples are incredibly valuable.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      role: "Data Analyst",
      content:
        "Love how Networthwars breaks down complex financial concepts. The community challenges make learning fun and competitive!",
      rating: 5,
    },
    {
      name: "Arjun Kumar",
      role: "Engineering Student",
      content:
        "Best decision I made was joining Networthwars. Now I understand stocks, crypto, and personal finance better than my friends!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">What Our Learners Say</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join thousands of satisfied learners who have transformed their financial future with Networthwars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
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

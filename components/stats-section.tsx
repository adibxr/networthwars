import { Card } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    { number: "10K+", label: "Active Learners" },
    { number: "50+", label: "Finance Chapters" },
    { number: "1000+", label: "Daily Quizzes Completed" },
    { number: "25+", label: "Hackathons Hosted" },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Join the Finance Revolution</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Thousands of learners are already building their financial future with Networthwars.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

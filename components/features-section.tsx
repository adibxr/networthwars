import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Brain, Target, Rocket } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Why Choose Networthwars?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            We've reimagined finance education to be engaging, interactive, and effective.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-card">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Gamepad2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Gamified Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience finance education like never before with our Duolingo-inspired approach. Earn points,
                  unlock achievements, and track your progress through interactive lessons.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-card">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Smart Curriculum</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our expertly crafted curriculum adapts to your learning pace. From basic budgeting to advanced
                  investment strategies, we've got you covered.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-card">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Daily Challenges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stay engaged with daily quizzes and challenges that reinforce your learning. Build consistent habits
                  that lead to financial mastery.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-card">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Hackathons & Events</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Participate in finance hackathons, compete with peers, and apply your knowledge to real-world
                  scenarios. Win prizes and build your portfolio.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

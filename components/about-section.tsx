import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Revolutionizing Finance Education</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Founded by Eeshit Mishra, Networthwars is on a mission to make financial literacy accessible, engaging, and
            effective for everyone. We believe that understanding money shouldn't be boring or complicated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover-lift">
            <div className="bg-primary/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">10K+</h3>
            <p className="text-muted-foreground">Active Learners</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover-lift">
            <div className="bg-primary/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">Interactive Chapters</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover-lift">
            <div className="bg-primary/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">95%</h3>
            <p className="text-muted-foreground">Completion Rate</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover-lift">
            <div className="bg-primary/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">4.9/5</h3>
            <p className="text-muted-foreground">User Rating</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Networthwars was born from a simple observation: traditional finance education is broken. Complex jargon,
              boring textbooks, and theoretical concepts that don't translate to real-world success.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our founder, Eeshit Mishra, experienced this firsthand and decided to create something different. By
              combining gamification principles with proven educational methodologies, we've created a platform that
              makes learning finance as addictive as your favorite mobile game.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, thousands of learners worldwide use Networthwars to build their financial literacy, from complete
              beginners to seasoned investors looking to sharpen their skills.
            </p>
          </div>
          <div className="relative">
            <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-4">What Makes Us Different</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Bite-sized lessons that fit your schedule</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Real-world scenarios and practical applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Community-driven learning with peer support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Regular hackathons and competitive challenges</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

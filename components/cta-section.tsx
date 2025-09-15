import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <Card className="p-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners who are already mastering finance through our interactive platform. Start your
            journey today - it's completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6 animate-glow">
              <a href="https://join.networthwars.com/" target="_blank" rel="noopener noreferrer">
                Start Learning Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
              <a href="https://docs.networthwars.com" target="_blank" rel="noopener noreferrer">
                Explore Documentation
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

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
            Join the Next Tech Revolution by joining our team and be an early member of a unicorn startup.
            We're looking for passionate innovators, builders, and visionaries to help shape the future of finance.
            If you're ready to make an impact, collaborate with top talent, and grow with us from the ground up, we want to hear from you!
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6 animate-glow">
              <a href="https://join.networthwars.com" target="_blank" rel="noopener noreferrer">
                Join Our Team
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
              <a href="https://docs.networthwars.com" target="_blank" rel="noopener noreferrer">
                Explore More
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

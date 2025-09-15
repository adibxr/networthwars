"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, BookOpen, Trophy, Users, Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-simple-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-simple-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/2 rounded-full blur-3xl animate-simple-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-scale">
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-6 py-3 glass-effect">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold tracking-wide text-sm">Founded by Eeshit Mishra</span>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6">Master Finance the Fun Way</h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 leading-relaxed animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Learn finance through interactive, chapter-based lessons with daily quizzes and hackathons. Join thousands
              of learners building their financial literacy.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in-up p-4 glass-card max-w-md mx-auto"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white hover-lift transition-all duration-200 shadow-lg hover:shadow-xl rounded-2xl"
            >
              <a href="https://join.networthwars.com/" target="_blank" rel="noopener noreferrer">
                <Zap className="mr-2 h-5 w-5" />
                Join Now - It's Free
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-transparent border-2 border-primary hover:bg-primary hover:text-primary-foreground hover-lift transition-all duration-200 rounded-2xl"
            >
              <a href="https://docs.networthwars.com" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-5 w-5" />
                Read Docs
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Chapter-Based Learning",
                description: "Progress through structured finance lessons at your own pace",
                delay: "0.9s",
              },
              {
                icon: Trophy,
                title: "Daily Quizzes",
                description: "Test your knowledge with engaging daily challenges",
                delay: "1.1s",
              },
              {
                icon: TrendingUp,
                title: "Hackathons",
                description: "Compete in finance hackathons and win exciting prizes",
                delay: "1.3s",
              },
              {
                icon: Users,
                title: "Community",
                description: "Join a vibrant community of finance enthusiasts",
                delay: "1.5s",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 glass-card animate-slide-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="bg-primary/10 backdrop-blur-sm p-4 rounded-2xl border border-primary/20">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

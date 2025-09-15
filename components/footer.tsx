import { Separator } from "@/components/ui/separator"
import { Instagram, Github, Mail, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary/10 backdrop-blur-sm p-2 rounded-2xl border border-primary/20">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">Networthwars</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Revolutionizing finance education through interactive, gamified learning. Founded by Eeshit Mishra to make
              financial literacy accessible and engaging for everyone.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:admin@networthwars.com"
                className="text-muted-foreground hover:text-primary transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20 hover:bg-white/15"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/networthwars/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20 hover:bg-white/15"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/adibxr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20 hover:bg-white/15"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="https://docs.networthwars.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://join.networthwars.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Join Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:admin@networthwars.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  admin@networthwars.com
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">Founded by Eeshit Mishra</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">© 2024 Networthwars. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

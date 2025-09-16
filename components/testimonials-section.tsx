import { Badge } from "@/components/ui/badge"

export function Collab() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          >
            Our Collaborators
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Who We Work With</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Proudly supported by leading institutions in education and technology.
          </p>
        </div>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* ASOSE School */}
          <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              <img 
                className="max-w-full max-h-full object-contain" 
                src="https://hackathon.networthwars.com/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fadibxr%2Fpublic%2Frefs%2Fheads%2Fmain%2Fschoollogo.png&w=256&q=75" 
                alt="ASOSE School Logo" 
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-center">ASOSE School</h3>
          </div>

          {/* IHFC */}
          <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              <img 
                className="max-w-full max-h-full object-contain" 
                src="https://hackathon.networthwars.com/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fadibxr%2Fpublic%2Frefs%2Fheads%2Fmain%2Fihfc.png&w=256&q=75" 
                alt="IHFC Logo" 
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-center">IHFC</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collab;
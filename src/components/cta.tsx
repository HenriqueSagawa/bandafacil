import { Button } from "@/components/ui/button"
import { ArrowRight, Music } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Pronto para encontrar sua banda?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Junte-se a milhares de músicos que já encontraram seus parceiros musicais. Crie seu perfil gratuitamente e
            comece a fazer música hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group">
              Criar Perfil Grátis
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              <Music className="mr-2 h-4 w-4" />
              Explorar Músicos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

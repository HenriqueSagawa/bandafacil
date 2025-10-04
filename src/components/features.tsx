import { Card } from "@/components/ui/card"
import { Music, Users, Calendar, MessageSquare, MapPin, Trophy } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Busca por Instrumento",
    description:
      "Encontre músicos específicos para cada instrumento que sua banda precisa, de guitarristas a bateristas.",
  },
  {
    icon: Users,
    title: "Perfis Detalhados",
    description: "Veja portfólios completos com experiência, gêneros musicais, influências e gravações dos músicos.",
  },
  {
    icon: MapPin,
    title: "Busca por Localização",
    description: "Encontre músicos na sua região para facilitar ensaios e apresentações presenciais.",
  },
  {
    icon: MessageSquare,
    title: "Chat em Tempo Real",
    description: "Converse diretamente com músicos, compartilhe ideias e marque ensaios através do nosso chat.",
  },
  {
    icon: Calendar,
    title: "Agenda de Ensaios",
    description: "Organize ensaios, apresentações e eventos com calendário integrado e notificações.",
  },
  {
    icon: Trophy,
    title: "Oportunidades",
    description: "Descubra vagas em bandas estabelecidas, audições e oportunidades de colaboração musical.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Tudo que você precisa para encontrar sua banda
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Ferramentas poderosas para conectar músicos e criar a formação perfeita para seu projeto musical.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-border/50">
              <feature.icon className="h-10 w-10 mb-4 text-primary" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

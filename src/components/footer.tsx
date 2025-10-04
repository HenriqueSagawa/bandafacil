import Link from "next/link"
import { Music } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Plataforma: ["Encontrar Músicos", "Criar Banda", "Eventos", "Comunidade"],
    Recursos: ["Como Funciona", "Blog Musical", "Dicas para Bandas", "Suporte"],
    Empresa: ["Sobre Nós", "Carreiras", "Imprensa", "Parceiros"],
    Legal: ["Privacidade", "Termos de Uso", "Cookies", "Diretrizes"],
  }

  return (
    <footer className="border-t border-border/40 py-12 md:py-16 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
              <Music className="h-6 w-6 text-primary" />
              <span>BandFácil</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Conectando músicos e criando bandas incríveis desde 2025.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 BandaFácil. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              YouTube
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Music, Search, Calendar, Guitar, Mic2 } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Music className="h-6 w-6 text-primary" />
            <span>BandaFácil</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent cursor-pointer">Encontrar Músicos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#instrumento"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <Guitar className="h-4 w-4" />
                            Por Instrumento
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Encontre guitarristas, baixistas, bateristas e mais
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#genero"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <Mic2 className="h-4 w-4" />
                            Por Gênero Musical
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Rock, Jazz, Pop, Metal e outros estilos
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#disponibilidade"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <Calendar className="h-4 w-4" />
                            Por Disponibilidade
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Músicos disponíveis para ensaios e shows
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#proximidade"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <Search className="h-4 w-4" />
                            Próximos a Você
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Descubra talentos na sua região
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#bandas" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground disabled:pointer-events-none disabled:opacity-50">
                    Bandas
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#eventos" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground disabled:pointer-events-none disabled:opacity-50">
                    Eventos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#comunidade" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground disabled:pointer-events-none disabled:opacity-50">
                    Comunidade
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Criar Perfil</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

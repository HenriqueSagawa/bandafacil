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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Search, Calendar, Guitar, Mic2, Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Image
              width={100}
              height={100}
              src={"/logo.webp"}
              alt="Logo do site"
              className="w-32 sm:w-40"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent cursor-pointer">
                  Encontrar Músicos
                </NavigationMenuTrigger>
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
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground disabled:pointer-events-none disabled:opacity-50">
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

          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/register" className="hidden sm:block">
              <Button size="sm">Criar Perfil</Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] px-4 ">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-8">
                  <Link
                    href="/"
                    className="text-base font-medium py-2 hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >Início</Link>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="musicians" className="border-b">
                      <AccordionTrigger className="text-base font-medium">
                        Encontrar Músicos
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-3 pl-2">
                          <Link
                            href="#instrumento"
                            className="flex items-center gap-2 py-2 text-sm hover:text-foreground"
                            onClick={() => setOpen(false)}
                          >
                            <Guitar className="h-4 w-4" />
                            Por Instrumento
                          </Link>
                          <Link
                            href="#genero"
                            className="flex items-center gap-2 py-2 text-sm hover:text-foreground"
                            onClick={() => setOpen(false)}
                          >
                            <Mic2 className="h-4 w-4" />
                            Por Gênero Musical
                          </Link>
                          <Link
                            href="#disponibilidade"
                            className="flex items-center gap-2 py-2 text-sm hover:text-foreground"
                            onClick={() => setOpen(false)}
                          >
                            <Calendar className="h-4 w-4" />
                            Por Disponibilidade
                          </Link>
                          <Link
                            href="#proximidade"
                            className="flex items-center gap-2 py-2 text-sm hover:text-foreground"
                            onClick={() => setOpen(false)}
                          >
                            <Search className="h-4 w-4" />
                            Próximos a Você
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link
                    href="#bandas"
                    className="text-base font-medium py-2 hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Bandas
                  </Link>
                  <Link
                    href="#eventos"
                    className="text-base font-medium py-2 hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Eventos
                  </Link>
                  <Link
                    href="#comunidade"
                    className="text-base font-medium py-2 hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Comunidade
                  </Link>

                  <div className="flex flex-col gap-3 mt-6 pt-6 border-t">
                    <Link href="/login" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Entrar
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setOpen(false)}>
                      <Button className="w-full">Criar Perfil</Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
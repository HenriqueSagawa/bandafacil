'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isViewPassword, setIsViewPassword] = useState(false);

  const handleViewPassword = () => {
    setIsViewPassword(!isViewPassword);
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Acesse sua conta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Digite seu email e senha para acessar sua conta
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Senha</FieldLabel>
            <Link
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </Link>
          </div>
          <div className="relative">
            <Input id="password" type={isViewPassword ? "text" : "password"} className="pr-10" required />
            <button
              type="button"
              onClick={handleViewPassword}
              className="absolute right-3 top-[10px] cursor-pointer"
              aria-label={isViewPassword ? "Mostrar senha" : "Ocultar senha"}
            >
              {isViewPassword ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeClosed className="h-4 w-4" />
              )}
            </button>
          </div>

        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Ou continue com</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <Image src="/google-icon.svg" width={100} height={100} alt="Logo do google" className="w-4 h-4" />
            Login com Google
          </Button>
          <FieldDescription className="text-center">
            Não possui conta ainda? {" "}
            <Link href="/register" className="underline underline-offset-4">
              Criar conta
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8">
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Entrar na sua conta</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Digite seu email e senha para acessar sua conta.
                                </p>
                            </div>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="axelrose@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center justify-between">
                                    <FieldLabel htmlFor="password">Senha</FieldLabel>
                                    <Link href="/esqueci-senha" className="text-sm text-muted-foreground hover:underline">
                                        Esqueceu a senha?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </Field>
                            <Field>
                                <Button type="submit" className="w-full">Entrar</Button>
                            </Field>
                            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                                Ou continue com
                            </FieldSeparator>
                            <Field>
                                <Button variant="outline" type="button" className="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span>Entrar com Google</span>
                                </Button>
                            </Field>
                            <FieldDescription className="text-center">
                                Não tem uma conta? <Link href="/register">Criar conta</Link>
                            </FieldDescription>
                            <Field>
                                <div style={{ height: '56px' }}></div>
                            </Field>
                        </FieldGroup>
                    </form>
                    <div className="bg-muted relative hidden md:block">
                        <Image
                            src="/form-image.png"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
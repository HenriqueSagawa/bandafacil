export function AppShowcase() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                            Encontre músicos onde estiver
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Nosso app mobile permite que você busque músicos, converse com bandas e organize ensaios diretamente do
                            seu smartphone. Música na palma da sua mão.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg
                                        className="w-4 h-4 text-primary-foreground"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Busca Inteligente</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Filtros avançados por instrumento, gênero, experiência e localização
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg
                                        className="w-4 h-4 text-primary-foreground"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Portfólio Musical</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Ouça samples, veja vídeos e avalie a compatibilidade musical
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg
                                        className="w-4 h-4 text-primary-foreground"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Notificações Instantâneas</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Receba alertas de novos músicos, mensagens e oportunidades
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* iPhone Mockup */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-72 h-[600px] rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900">
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[90px] h-[22px] bg-zinc-900 rounded-full z-20">
                            </div>

                            <div className="absolute -inset-[1px] border-[3px] border-zinc-700 border-opacity-40 rounded-[37px] pointer-events-none"></div>


                            <div className="relative w-full h-full  rounded-[37px] overflow-hidden flex items-center justify-center  bg-zinc-900/10">
                                <div className="pt-12 px-6 pb-6 h-full overflow-hidden">
                                    {/* App Header */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold">Músicos Próximos</h3>
                                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground">15 guitarristas na sua região</p>
                                    </div>

                                    {/* Musician Cards */}
                                    <div className="space-y-3">
                                        {[
                                            { name: "Carlos Silva", instrument: "Guitarrista", genre: "Rock/Blues", distance: "2.5 km" },
                                            { name: "Ana Costa", instrument: "Baterista", genre: "Jazz/Fusion", distance: "3.8 km" },
                                            { name: "Pedro Lima", instrument: "Baixista", genre: "Rock/Metal", distance: "5.2 km" },
                                        ].map((musician, i) => (
                                            <div key={i} className="bg-muted rounded-xl p-4">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                        <svg
                                                            className="w-6 h-6 text-primary"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-semibold truncate">{musician.name}</div>
                                                        <div className="text-xs text-muted-foreground">{musician.instrument}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-muted-foreground">{musician.genre}</span>
                                                    <span className="text-primary font-medium">{musician.distance}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Navigation */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-background border-t border-border">
                                    <div className="flex items-center justify-around h-full px-6 pb-4">
                                        {[
                                            {
                                                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                            },
                                            {
                                                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                            },
                                            {
                                                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                                            },
                                            { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                                        ].map((item, i) => (
                                            <button key={i} className={i === 0 ? "text-primary" : "text-muted-foreground"}>
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>

                            <div className="absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>

                            <div className="absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>

                            <div className="absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Stats() {
  const stats = [
    { value: "10K+", label: "Músicos Ativos" },
    { value: "2.5K+", label: "Bandas Formadas" },
    { value: "50+", label: "Gêneros Musicais" },
    { value: "100+", label: "Cidades" },
  ]

  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

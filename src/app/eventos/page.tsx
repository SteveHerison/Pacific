'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Users, Music, Sparkles, CheckCircle, Star, Clock, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EventosPage() {
  const eventTypes = [
    {
      icon: Users,
      title: 'Eventos Corporativos',
      description: 'Conferências, workshops e eventos empresariais que impressionam',
      features: ['Planejamento estratégico', 'Gestão completa', 'Tecnologia audiovisual']
    },
    {
      icon: Sparkles,
      title: 'Eventos Sociais',
      description: 'Casamentos, aniversários e celebrações inesquecíveis',
      features: ['Decoração personalizada', 'Coordenação no dia', 'Fotografia inclusa']
    },
    {
      icon: Music,
      title: 'Lançamentos',
      description: 'Eventos de lançamento de produtos e marcas',
      features: ['Conceito criativo', 'Experiências imersivas', 'Cobertura digital']
    },
    {
      icon: Calendar,
      title: 'Eventos Digitais',
      description: 'Webinars, lives e experiências online engajantes',
      features: ['Plataforma própria', 'Interatividade', 'Métricas detalhadas']
    }
  ]

  const successStories = [
    {
      title: 'Lançamento TechCorp 2024',
      client: 'TechCorp Solutions',
      attendees: '500+',
      satisfaction: '98%',
      description: 'Evento de lançamento de produto com experiência imersiva e tecnologia de ponta.',
      highlights: ['Realidade aumentada', 'Live streaming', '15 palestrantes'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Casamento Marina & João',
      client: 'Casal Marina & João',
      attendees: '200',
      satisfaction: '100%',
      description: 'Celebração elegante com decoração personalizada e coordenação perfeita.',
      highlights: ['Decoração única', 'Menu personalizado', 'Música ao vivo'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Summit Marketing Digital',
      client: 'Marketing Association',
      attendees: '1000+',
      satisfaction: '96%',
      description: 'Conferência híbrida com transmissão online e networking presencial.',
      highlights: ['Híbrido online/presencial', '20 palestrantes', 'App exclusivo'],
      image: '/api/placeholder/600/400'
    }
  ]

  const services = [
    {
      category: 'Planejamento',
      items: [
        'Consultoria inicial',
        'Cronograma detalhado',
        'Orçamento transparente',
        'Timeline de execução'
      ]
    },
    {
      category: 'Produção',
      items: [
        'Gestão de fornecedores',
        'Coordenação geral',
        'Controle de qualidade',
        'Logística completa'
      ]
    },
    {
      category: 'Tecnologia',
      items: [
        'Sistema de som profissional',
        'Iluminação cênica',
        'Transmissão online',
        'Apps personalizados'
      ]
    },
    {
      category: 'Marketing',
      items: [
        'Divulgação digital',
        'Gestão de inscrições',
        'Cobertura em tempo real',
        'Relatórios pós-evento'
      ]
    }
  ]

  const packages = [
    {
      name: 'Starter',
      price: 'R$ 2.997',
      capacity: 'Até 50 pessoas',
      description: 'Ideal para eventos íntimos e workshops',
      includes: [
        'Consultoria e planejamento',
        'Coordenação no dia',
        'Decoração básica',
        'Sistema de som',
        'Fotografia do evento',
        'Relatório pós-evento'
      ],
      duration: '4 horas',
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 7.997',
      capacity: 'Até 200 pessoas',
      description: 'Perfeito para eventos corporativos',
      includes: [
        'Tudo do plano Starter',
        'Decoração personalizada',
        'Iluminação profissional',
        'Filmagem do evento',
        'App personalizado',
        'Transmissão online',
        'Catering coordenado',
        'Suporte técnico 24h'
      ],
      duration: '8 horas',
      popular: true
    },
    {
      name: 'Premium',
      price: 'R$ 19.997',
      capacity: 'Até 500 pessoas',
      description: 'Eventos de grande porte e alta complexidade',
      includes: [
        'Tudo do plano Professional',
        'Cenografia exclusiva',
        'Múltiplas experiências',
        'Cobertura completa (foto/vídeo)',
        'Realidade aumentada/VR',
        'Múltiplas transmissões',
        'Gestão completa de convidados',
        'Equipe dedicada',
        'Pós-produção premium'
      ],
      duration: '12 horas',
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Ana Silva',
      company: 'Diretora - TechCorp',
      content: 'A Pacific Movement superou nossas expectativas. O evento foi um sucesso absoluto e recebemos feedback incrível dos participantes.',
      rating: 5,
      event: 'Lançamento de Produto'
    },
    {
      name: 'Carlos Mendes',
      company: 'CEO - StartupXYZ',
      content: 'Profissionalismo total do início ao fim. Cada detalhe foi pensado e executado perfeitamente.',
      rating: 5,
      event: 'Evento Corporativo'
    },
    {
      name: 'Marina Costa',
      company: 'Noiva',
      content: 'Meu casamento foi exatamente como sonhei. A equipe cuidou de tudo e pude aproveitar cada momento.',
      rating: 5,
      event: 'Casamento'
    }
  ]

  const stats = [
    { number: '150+', label: 'Eventos Realizados' },
    { number: '98%', label: 'Satisfação dos Clientes' },
    { number: '50K+', label: 'Participantes Atendidos' },
    { number: '24/7', label: 'Suporte Disponível' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Badge className="gradient-bg text-white px-6 py-2 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Eventos
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Eventos que
              <span className="gradient-text block">Marcam História</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Do planejamento à execução, criamos experiências memoráveis que conectam pessoas 
              e fortalecem marcas. Eventos corporativos, sociais e digitais de alto impacto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white text-lg px-8 py-4">
                <Sparkles className="w-5 h-5 mr-2" />
                Planejar Meu Evento
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Ver Cases de Sucesso
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Eventos
            </h2>
            <p className="text-xl text-gray-600">
              Especializamos em diferentes formatos para atender suas necessidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Eventos que deixaram marca e geraram resultados excepcionais
            </p>
          </div>
          
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`bg-gray-200 aspect-video lg:aspect-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="w-full h-full flex items-center justify-center">
                        <Calendar className="w-24 h-24 text-gray-400" />
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary" className="text-primary">
                          {story.client}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-1" />
                          {story.attendees} participantes
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award className="w-4 h-4 mr-1" />
                          {story.satisfaction} satisfação
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {story.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {story.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600">
              Cobertura completa para eventos de qualquer porte
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-center gradient-text">
                      {service.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pacotes de Eventos
            </h2>
            <p className="text-xl text-gray-600">
              Soluções flexíveis para eventos de todos os tamanhos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${pkg.popular ? 'scale-105' : ''}`}
              >
                <Card className={`h-full ${pkg.popular ? 'gradient-border shadow-2xl' : 'shadow-lg'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="gradient-bg text-white px-4 py-1">
                        Mais Escolhido
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </CardTitle>
                    <div className="mb-2">
                      <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center justify-center">
                        <Users className="w-4 h-4 mr-1" />
                        {pkg.capacity}
                      </div>
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      {pkg.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${pkg.popular ? 'gradient-bg text-white' : ''}`} 
                      variant={pkg.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      Escolher {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Depoimentos
            </h2>
            <p className="text-xl text-gray-600">
              Feedback real de quem confiou em nosso trabalho
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                      <div className="text-xs text-primary mt-1">
                        {testimonial.event}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos Criar Seu Próximo Evento de Sucesso?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Entre em contato e vamos planejar juntos uma experiência inesquecível
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Sparkles className="w-5 h-5 mr-2" />
                Planejar Meu Evento
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Agendar Consultoria
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
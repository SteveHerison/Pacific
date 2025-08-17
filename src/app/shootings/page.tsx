'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Camera, Image, Palette, Clock, CheckCircle, Star, Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ShootingsPage() {
  const portfolioCategories = [
    {
      title: 'Produtos',
      description: 'Fotografias que destacam o melhor dos seus produtos',
      image: '/api/placeholder/400/300',
      count: '50+ projetos'
    },
    {
      title: 'Pessoas',
      description: 'Retratos profissionais que capturam personalidade',
      image: '/api/placeholder/400/300',
      count: '80+ sessões'
    },
    {
      title: 'Corporativo',
      description: 'Imagens institucionais para fortalecer sua marca',
      image: '/api/placeholder/400/300',
      count: '30+ empresas'
    },
    {
      title: 'Lifestyle',
      description: 'Captamos momentos autênticos e naturais',
      image: '/api/placeholder/400/300',
      count: '100+ fotos'
    }
  ]

  const services = [
    {
      icon: Camera,
      title: 'Fotografia Profissional',
      description: 'Equipamentos de ponta e técnicas avançadas para resultados excepcionais',
      features: [
        'Câmeras full-frame profissionais',
        'Iluminação estudada',
        'Múltiplos ângulos',
        'Alta resolução'
      ]
    },
    {
      icon: Image,
      title: 'Edição Avançada',
      description: 'Pós-produção detalhada para entregar imagens perfeitas',
      features: [
        'Correção de cores',
        'Retoque profissional',
        'Ajustes de luz/sombra',
        'Finalização premium'
      ]
    },
    {
      icon: Palette,
      title: 'Direção de Arte',
      description: 'Conceituação visual alinhada com a identidade da sua marca',
      features: [
        'Moodboard personalizado',
        'Cenários elaborados',
        'Props e styling',
        'Conceito criativo'
      ]
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Cronograma otimizado sem comprometer a qualidade',
      features: [
        'Pré-visualização em 24h',
        'Entrega final em 3-5 dias',
        'Galeria online',
        'Múltiplos formatos'
      ]
    }
  ]

  const packages = [
    {
      name: 'Essential',
      price: 'R$ 497',
      duration: '2 horas',
      description: 'Ideal para pequenos projetos e testes',
      includes: [
        'Até 15 fotos editadas',
        '1 look/cenário',
        'Entrega em 5 dias úteis',
        'Galeria online privada',
        'Fotos em alta resolução'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 997',
      duration: '4 horas',
      description: 'Perfeito para campanhas e catálogos',
      includes: [
        'Até 40 fotos editadas',
        '3 looks/cenários',
        'Direção de arte básica',
        'Entrega em 3 dias úteis',
        'Galeria online privada',
        'Fotos em múltiplos formatos',
        'Retoque avançado'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'R$ 1.997',
      duration: '8 horas',
      description: 'Solução completa para grandes projetos',
      includes: [
        'Até 80 fotos editadas',
        'Looks/cenários ilimitados',
        'Direção de arte completa',
        'Entrega em 24h',
        'Galeria online com branding',
        'Todos os formatos',
        'Retoque premium',
        'Making-of em vídeo',
        'Assistente incluso'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Carla Mendes',
      company: 'Loja Boutique',
      content: 'As fotos dos produtos ficaram incríveis! Nossas vendas online aumentaram 80% após o shooting.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Roberto Silva',
      company: 'Chef Executivo',
      content: 'Profissionalismo total. As fotos capturaram exatamente o que eu queria transmitir.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Marina Costa',
      company: 'Arquiteta',
      content: 'Superou minhas expectativas. A atenção aos detalhes foi impressionante.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Briefing',
      description: 'Entendemos seus objetivos, estilo e necessidades específicas'
    },
    {
      step: '02',
      title: 'Planejamento',
      description: 'Criamos moodboard, definimos locação e preparamos a produção'
    },
    {
      step: '03',
      title: 'Shooting',
      description: 'Execução profissional com direção criativa e técnica apurada'
    },
    {
      step: '04',
      title: 'Pós-Produção',
      description: 'Seleção e edição das melhores imagens com retoque profissional'
    },
    {
      step: '05',
      title: 'Entrega',
      description: 'Galeria online com todas as fotos em alta resolução'
    }
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
                <Camera className="w-5 h-5 mr-2" />
                Shootings
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fotografias que
              <span className="gradient-text block">Vendem e Inspiram</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Criamos imagens profissionais que destacam o melhor da sua marca. 
              Produtos, pessoas e momentos capturados com técnica e criatividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white text-lg px-8 py-4">
                <Camera className="w-5 h-5 mr-2" />
                Agendar Shooting
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Ver Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Trabalhos que demonstram nossa qualidade e versatilidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{category.description}</p>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para ter fotografias excepcionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600">
              Processo estruturado para garantir resultados excepcionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
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
              Pacotes e Preços
            </h2>
            <p className="text-xl text-gray-600">
              Opções flexíveis para todas as necessidades
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
                      <div className="text-sm text-gray-600 mt-1">{pkg.duration} de sessão</div>
                    </div>
                    <p className="text-gray-600 text-sm">
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
              O que nossos clientes falam sobre nosso trabalho
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
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                        <span className="text-gray-500 text-sm font-medium">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.company}
                        </div>
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
              Pronto para Criar Imagens Incríveis?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Vamos conversar sobre seu projeto e criar fotografias que fazem a diferença
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Camera className="w-5 h-5 mr-2" />
                Agendar Shooting
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Ver Mais Trabalhos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
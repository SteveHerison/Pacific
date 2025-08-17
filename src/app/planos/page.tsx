'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, X, Star, Zap, Crown, Shield, ArrowRight, Instagram, Camera, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PlanosPage() {
  const [selectedService, setSelectedService] = useState('social-media')

  const services = [
    { id: 'social-media', name: 'Social Media', icon: Instagram },
    { id: 'shootings', name: 'Shootings', icon: Camera },
    { id: 'eventos', name: 'Eventos', icon: Calendar }
  ]

  const socialMediaPlans = [
    {
      name: 'Starter',
      price: 'R$ 997',
      period: '/mês',
      description: 'Ideal para pequenas empresas iniciando nas redes sociais',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      features: [
        '15 posts por mês',
        '3 stories por semana',
        'Gestão de 2 redes sociais',
        'Relatório mensal básico',
        'Suporte via WhatsApp',
        'Planejamento de conteúdo'
      ],
      notIncluded: [
        'Tráfego pago',
        'Análise de concorrência',
        'Suporte 24/7'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 1.997',
      period: '/mês',
      description: 'Para empresas que querem acelerar o crescimento',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      features: [
        '30 posts por mês',
        '5 stories por semana',
        'Gestão de 4 redes sociais',
        'Relatório quinzenal detalhado',
        'Suporte prioritário',
        'Planejamento estratégico',
        '2 campanhas de tráfego pago',
        'Análise de concorrência',
        'Consultoria mensal'
      ],
      notIncluded: [
        'Landing pages',
        'Suporte 24/7'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'R$ 3.497',
      period: '/mês',
      description: 'Solução completa para grandes empresas',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      features: [
        '50 posts por mês',
        'Stories ilimitados',
        'Gestão completa (todas as redes)',
        'Relatório semanal',
        'Suporte 24/7',
        'Estratégia personalizada',
        '5 campanhas de tráfego pago',
        'Análise competitiva avançada',
        'Consultoria estratégica semanal',
        'Criação de landing pages',
        'Automações personalizadas'
      ],
      notIncluded: [],
      popular: false
    }
  ]

  const shootingPlans = [
    {
      name: 'Essential',
      price: 'R$ 497',
      period: '/sessão',
      description: 'Ideal para testes e projetos pequenos',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Até 15 fotos editadas',
        '2 horas de sessão',
        '1 look/cenário',
        'Entrega em 5 dias úteis',
        'Galeria online privada',
        'Fotos em alta resolução'
      ],
      notIncluded: [
        'Direção de arte',
        'Making-of',
        'Entrega expressa'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 997',
      period: '/sessão',
      description: 'Perfeito para campanhas e catálogos',
      icon: Star,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Até 40 fotos editadas',
        '4 horas de sessão',
        '3 looks/cenários',
        'Direção de arte básica',
        'Entrega em 3 dias úteis',
        'Galeria online privada',
        'Múltiplos formatos',
        'Retoque avançado'
      ],
      notIncluded: [
        'Making-of em vídeo',
        'Assistente incluso'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'R$ 1.997',
      period: '/sessão',
      description: 'Solução completa para grandes produções',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Até 80 fotos editadas',
        '8 horas de sessão',
        'Looks/cenários ilimitados',
        'Direção de arte completa',
        'Entrega em 24h',
        'Galeria com branding',
        'Todos os formatos',
        'Retoque premium',
        'Making-of em vídeo',
        'Assistente incluso',
        'Backup em nuvem'
      ],
      notIncluded: [],
      popular: false
    }
  ]

  const eventPlans = [
    {
      name: 'Starter',
      price: 'R$ 2.997',
      period: '/evento',
      description: 'Para eventos íntimos e workshops',
      icon: Zap,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Até 50 pessoas',
        '4 horas de evento',
        'Consultoria e planejamento',
        'Coordenação no dia',
        'Decoração básica',
        'Sistema de som',
        'Fotografia do evento',
        'Relatório pós-evento'
      ],
      notIncluded: [
        'Transmissão online',
        'App personalizado',
        'Filmagem'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 7.997',
      period: '/evento',
      description: 'Ideal para eventos corporativos',
      icon: Star,
      color: 'from-emerald-500 to-teal-600',
      features: [
        'Até 200 pessoas',
        '8 horas de evento',
        'Tudo do plano Starter',
        'Decoração personalizada',
        'Iluminação profissional',
        'Filmagem do evento',
        'App personalizado',
        'Transmissão online',
        'Catering coordenado',
        'Suporte técnico 24h'
      ],
      notIncluded: [
        'Realidade aumentada',
        'Múltiplas transmissões'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'R$ 19.997',
      period: '/evento',
      description: 'Para eventos de grande porte',
      icon: Crown,
      color: 'from-rose-500 to-pink-600',
      features: [
        'Até 500 pessoas',
        '12 horas de evento',
        'Tudo do plano Professional',
        'Cenografia exclusiva',
        'Múltiplas experiências',
        'Cobertura completa',
        'Realidade aumentada/VR',
        'Múltiplas transmissões',
        'Gestão completa de convidados',
        'Equipe dedicada',
        'Pós-produção premium'
      ],
      notIncluded: [],
      popular: false
    }
  ]

  const getCurrentPlans = () => {
    switch (selectedService) {
      case 'shootings':
        return shootingPlans
      case 'eventos':
        return eventPlans
      default:
        return socialMediaPlans
    }
  }

  const faqs = [
    {
      question: 'Posso cancelar meu plano a qualquer momento?',
      answer: 'Sim, nossos planos não possuem fidelidade. Você pode cancelar a qualquer momento com aviso prévio de 30 dias.'
    },
    {
      question: 'Há taxa de setup ou instalação?',
      answer: 'Não cobramos nenhuma taxa adicional. O setup inicial está incluído em todos os nossos planos.'
    },
    {
      question: 'Posso mudar de plano durante o contrato?',
      answer: 'Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações entram em vigor no próximo ciclo.'
    },
    {
      question: 'Oferecem planos personalizados?',
      answer: 'Sim, criamos soluções sob medida para necessidades específicas. Entre em contato para discutirmos suas necessidades.'
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte via WhatsApp, email e telefone. Planos superiores têm prioridade no atendimento.'
    },
    {
      question: 'Há desconto para contratos anuais?',
      answer: 'Sim! Oferecemos até 15% de desconto para pagamentos anuais à vista. Consulte condições especiais.'
    }
  ]

  const addOns = [
    {
      name: 'Consultoria Estratégica Extra',
      description: 'Sessões adicionais de consultoria personalizada',
      price: 'R$ 297/hora'
    },
    {
      name: 'Campanhas de Tráfego Pago',
      description: 'Gestão profissional de anúncios pagos',
      price: 'R$ 497/campanha'
    },
    {
      name: 'Criação de Landing Page',
      description: 'Páginas de conversão otimizadas',
      price: 'R$ 997/página'
    },
    {
      name: 'Análise de Concorrência',
      description: 'Relatório detalhado da concorrência',
      price: 'R$ 397/relatório'
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Planos que
              <span className="gradient-text block">Fazem Sua Marca Crescer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Escolha o plano ideal para o seu negócio. Soluções flexíveis e transparentes 
              para Social Media, Shootings e Eventos.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Sem taxa de setup
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Sem fidelidade
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Suporte incluído
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-2 rounded-2xl shadow-sm">
              <div className="flex space-x-2">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                        selectedService === service.id
                          ? 'gradient-bg text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {service.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentPlans().map((plan, index) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${plan.popular ? 'scale-105' : ''}`}
                >
                  <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary shadow-2xl' : 'shadow-lg'}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="gradient-bg text-white px-6 py-2 text-sm font-semibold">
                          Mais Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-8 pt-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </CardTitle>
                      <div className="mb-4">
                        <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {plan.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center opacity-50">
                            <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${plan.popular ? 'gradient-bg text-white' : ''}`} 
                        variant={plan.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        Escolher {plan.name}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Adicionais
            </h2>
            <p className="text-xl text-gray-600">
              Complemente seu plano com serviços extras
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {addon.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold gradient-text">
                        {addon.price}
                      </span>
                      <Button size="sm" variant="outline">
                        Adicionar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos planos
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Garantia de Satisfação
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Não ficou satisfeito? Devolvemos seu dinheiro nos primeiros 30 dias, 
              sem perguntas ou burocracias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                30 dias de garantia
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Sem burocracias
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                100% do valor de volta
              </div>
            </div>
          </motion.div>
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
              Pronto para Começar?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Escolha seu plano e comece a transformar sua presença digital hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Falar com Especialista
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Ver Demonstração
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
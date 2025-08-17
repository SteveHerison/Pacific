'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Instagram, TrendingUp, Users, BarChart3, Calendar, Zap, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SocialMediaPage() {
  const plans = [
    {
      name: 'Essencial',
      price: 'R$ 997',
      period: '/mês',
      description: 'Ideal para pequenas empresas que querem começar nas redes sociais',
      features: [
        '15 posts por mês',
        '3 stories por semana',
        'Gestão de 2 redes sociais',
        'Relatório mensal básico',
        'Suporte via WhatsApp',
        'Planejamento de conteúdo'
      ],
      popular: false
    },
    {
      name: 'Profissional',
      price: 'R$ 1.997',
      period: '/mês',
      description: 'Para empresas que querem acelerar seu crescimento digital',
      features: [
        '30 posts por mês',
        '5 stories por semana',
        'Gestão de 4 redes sociais',
        'Relatório detalhado quinzenal',
        'Suporte prioritário',
        'Planejamento estratégico',
        '2 campanhas de tráfego pago',
        'Análise de concorrência'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'R$ 3.497',
      period: '/mês',
      description: 'Solução completa para empresas que querem dominar o digital',
      features: [
        '50 posts por mês',
        'Stories ilimitados',
        'Gestão completa (todas as redes)',
        'Relatório semanal detalhado',
        'Suporte 24/7',
        'Estratégia personalizada',
        '5 campanhas de tráfego pago',
        'Análise competitiva avançada',
        'Consultoria estratégica mensal',
        'Criação de landing pages'
      ],
      popular: false
    }
  ]

  const services = [
    {
      icon: Instagram,
      title: 'Gestão de Perfis',
      description: 'Gerenciamos suas redes sociais de forma estratégica e profissional'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Orgânico',
      description: 'Estratégias comprovadas para aumentar seus seguidores e engajamento'
    },
    {
      icon: Users,
      title: 'Engajamento',
      description: 'Criamos conexões genuínas entre sua marca e sua audiência'
    },
    {
      icon: BarChart3,
      title: 'Análise e Métricas',
      description: 'Relatórios detalhados para acompanhar o crescimento da sua marca'
    },
    {
      icon: Calendar,
      title: 'Planejamento',
      description: 'Cronograma estratégico de publicações para máximo impacto'
    },
    {
      icon: Zap,
      title: 'Conteúdo Viral',
      description: 'Criamos conteúdos que geram buzz e amplificam seu alcance'
    }
  ]

  const results = [
    { metric: '300%', description: 'Aumento médio no engajamento' },
    { metric: '150%', description: 'Crescimento de seguidores' },
    { metric: '200%', description: 'Aumento no alcance orgânico' },
    { metric: '95%', description: 'Taxa de satisfação dos clientes' }
  ]

  const process = [
    {
      step: '01',
      title: 'Diagnóstico',
      description: 'Analisamos seu perfil atual e identificamos oportunidades de melhoria'
    },
    {
      step: '02',
      title: 'Estratégia',
      description: 'Desenvolvemos um planejamento personalizado para seus objetivos'
    },
    {
      step: '03',
      title: 'Criação',
      description: 'Produzimos conteúdo de alta qualidade alinhado com sua marca'
    },
    {
      step: '04',
      title: 'Gestão',
      description: 'Publicamos e gerenciamos suas redes sociais de forma consistente'
    },
    {
      step: '05',
      title: 'Otimização',
      description: 'Analisamos resultados e otimizamos continuamente a estratégia'
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
                <Instagram className="w-5 h-5 mr-2" />
                Social Media
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme suas
              <span className="gradient-text block">Redes Sociais</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Estratégias comprovadas para fazer sua marca crescer nas redes sociais. 
              Criação de conteúdo, gestão profissional e resultados mensuráveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white text-lg px-8 py-4">
                <Target className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Ver Cases de Sucesso
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados que Comprovam nossa Eficácia
            </h2>
            <p className="text-xl text-gray-600">
              Dados reais de clientes que cresceram conosco
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-600 font-medium">
                  {result.description}
                </div>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para transformar sua presença digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600">
              Nossa metodologia comprovada em 5 etapas
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos e Preços
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                <Card className={`h-full ${plan.popular ? 'gradient-border shadow-2xl' : 'shadow-lg'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="gradient-bg text-white px-4 py-1">
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
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
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Todos os planos incluem setup inicial gratuito e não possuem taxa de cancelamento
            </p>
            <Button variant="outline" size="lg">
              Precisa de algo personalizado? Entre em contato
            </Button>
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
              Pronto para Transformar suas Redes Sociais?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Agende uma consultoria gratuita e descubra como podemos ajudar sua marca a crescer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Target className="w-5 h-5 mr-2" />
                Agendar Consultoria Gratuita
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
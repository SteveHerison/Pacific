'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Star, Clock, Camera, Palette, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Pacotes() {
  const packages = [
    {
      title: 'Pacote Opção 1',
      subtitle: 'Ideal para iniciantes',
      price: 'R$ 649,00',
      installments: '6x de R$ 108,32',
      image: '/fotos/IMG_0379 copiar.jpg',
      features: [
        'Ensaio de 30 minutos',
        '2 trocas de looks',
        'Fundo branco profissional',
        '10 fotos editadas em alta resolução',
        'Entrega digital das fotos',
        'Prazo de entrega: 15 dias'
      ],
      highlighted: false
    },
    {
      title: 'Pacote Opção 2',
      subtitle: 'Mais popular',
      price: 'R$ 745,00',
      installments: '6x de R$ 124,17',
      image: '/fotos/IMG_0792.jpg',
      features: [
        'Ensaio de 60 minutos',
        '3 trocas de looks',
        '2 cenários diferentes',
        '15 fotos editadas em alta resolução',
        'Entrega digital das fotos',
        'Prazo de entrega: 15 dias'
      ],
      highlighted: true
    },
    {
      title: 'Pacote Opção 3',
      subtitle: 'Experiência completa',
      price: 'R$ 940,00',
      installments: '6x de R$ 156,67',
      image: '/fotos/IMG_6776 copiar.jpg',
      features: [
        'Ensaio de 90 minutos',
        '2 cenários e troca de luz',
        '4 trocas de looks',
        '20 fotos editadas em alta resolução',
        'Entrega digital das fotos',
        'Prazo de entrega: 15 dias'
      ],
      highlighted: false
    }
  ]

  const additionalInfo = [
    {
      icon: Clock,
      title: 'Agendamento',
      description: 'Confirmado após entrada de 50% do valor'
    },
    {
      icon: Camera,
      title: 'Prazo de Seleção',
      description: 'Envio das fotos para seleção em 24h'
    },
    {
      icon: Palette,
      title: 'Edição Profissional',
      description: 'Tratamento premium em todas as fotos'
    },
    {
      icon: ImageIcon,
      title: 'Alta Resolução',
      description: 'Fotos em qualidade máxima para impressão'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/fotos/IMG_6885.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 pm-text-elegant">
              Pacotes Fotográficos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Escolha o pacote perfeito para eternizar seus momentos especiais
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${pkg.highlighted ? 'border-2 border-yellow-400 shadow-xl' : 'border border-gray-200'}`}>
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-light mb-1">{pkg.title}</h3>
                      <p className="text-sm opacity-80">{pkg.subtitle}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="text-3xl font-light text-black mb-1">{pkg.price}</div>
                      <div className="text-sm text-gray-600">ou {pkg.installments}</div>
                      <div className="text-xs text-gray-500 mt-1">À vista</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="https://wa.me/558592733553">
                      <Button className={`w-full ${pkg.highlighted ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-black text-white hover:bg-gray-800'}`}>
                        Reservar Agora
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Informações Importantes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa saber sobre nossos pacotes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Formas de Pagamento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-light mb-2 text-yellow-400">PIX</h3>
              <p className="text-sm opacity-80">Pagamento instantâneo com desconto</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-2 text-yellow-400">Cartão de Crédito</h3>
              <p className="text-sm opacity-80">Parcelamento em até 6x sem juros</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-2 text-yellow-400">Transferência</h3>
              <p className="text-sm opacity-80">Direto para nossa conta bancária</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Tem alguma dúvida?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Fale comigo no WhatsApp! Estou aqui para te ajudar no que for preciso.
            </p>
            <Link href="https://wa.me/558592733553">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-12 py-4">
                Falar no WhatsApp
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Contato() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp',
      description: 'Resposta rápida e direta',
      action: 'Enviar mensagem',
      link: 'https://wa.me/558592733553',
      primary: true
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@pacificmoviment',
      action: 'Seguir no Instagram',
      link: 'https://www.instagram.com/pacificmoviment',
      primary: false
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'agenciapacificmoviment@gmail.com',
      action: 'Enviar e-mail',
      link: 'mailto:agenciapacificmoviment@gmail.com',
      primary: false
    }
  ]

  const info = [
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      details: [
        'Segunda a Sexta: 9h às 18h',
        'Sábado: 9h às 14h',
        'Domingo: Fechado'
      ]
    },
    {
      icon: MapPin,
      title: 'Localização',
      details: [
        'Fortaleza, CE',
        'Atendimento em estúdio',
        'Ensaios externos disponíveis'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Tempo de Resposta',
      details: [
        'WhatsApp: Em até 2 horas',
        'E-mail: Em até 24 horas',
        'Instagram: Em até 12 horas'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/fotos/IMG_6339 copiar.jpg"
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
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Vamos conversar sobre seu ensaio fotográfico e criar momentos inesquecíveis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Escolha como prefere falar conosco</h2>
            <p className="text-gray-600">Estamos sempre prontos para atender você</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full ${method.primary ? 'border-2 border-yellow-400 shadow-xl' : 'border border-gray-200'}`}>
                  {method.primary && (
                    <div className="bg-yellow-400 text-black text-center py-2 text-sm font-medium">
                      Recomendado
                    </div>
                  )}
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                      <method.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-6">{method.description}</p>
                    <Link href={method.link} target="_blank">
                      <Button className={method.primary ? 'bg-green-500 hover:bg-green-600 text-white w-full' : 'bg-black text-white hover:bg-gray-800 w-full'}>
                        {method.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {info.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <ul className="space-y-1">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600">{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Nossa Localização</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estúdio localizado em Fortaleza, com fácil acesso e estacionamento disponível
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3556961836763!2d-38.5854!3d-3.7327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74991204f2b15%3A0x38e3b25bd5d38768!2sAv.%20C%2C%20236A%20-%20Conj.%20Cear%C3%A1%2C%20Fortaleza%20-%20CE%2C%2060533-500!5e0!3m2!1spt-BR!2sbr!4v1702920438709!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Localização do Pacific Movement em Fortaleza"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
                <h3 className="font-medium mb-2">Endereço</h3>
                <p className="text-sm text-gray-600">
                  Av. C, 236A<br />
                  Conjunto Ceará, Fortaleza - CE<br />
                  CEP: 60533-500
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
                <h3 className="font-medium mb-2">Horário do Estúdio</h3>
                <p className="text-sm text-gray-600">
                  Segunda a Sexta: 9h às 20h<br />
                  Sábado: 9h às 18h<br />
                  Domingo: Mediante agendamento
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
                <h3 className="font-medium mb-2">Contato Direto</h3>
                <p className="text-sm text-gray-600">
                  WhatsApp: (85) 9273-3553<br />
                  Instagram: @pacificmoviment<br />
                  agenciapacificmoviment@gmail.com
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link 
              href="https://maps.app.goo.gl/XYnQFrGhQNtV3PmG9" 
              target="_blank"
            >
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                <MapPin className="mr-2 h-4 w-4" />
                Obter Direções no Google Maps
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600">Tire suas dúvidas sobre nossos serviços</p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-2">Como funciona o agendamento?</h3>
              <p className="text-gray-600 text-sm">
                Após escolher seu pacote, o ensaio será confirmado mediante pagamento de 50% do valor total. 
                O restante pode ser pago no dia do ensaio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-2">Qual o prazo de entrega das fotos?</h3>
              <p className="text-gray-600 text-sm">
                Em 24h enviamos as fotos para seleção. Após a escolha, as fotos editadas são entregues em até 15 dias úteis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-2">Posso parcelar o pagamento?</h3>
              <p className="text-gray-600 text-sm">
                Sim! Aceitamos parcelamento em até 6x sem juros no cartão de crédito. 
                Também oferecemos pagamento via PIX, transferência e dinheiro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-2">Vocês fazem ensaios externos?</h3>
              <p className="text-gray-600 text-sm">
                Sim! Além do nosso estúdio completo, realizamos ensaios em locações externas. 
                Consulte disponibilidade e valores adicionais para deslocamento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Pronto para agendar seu ensaio?
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Não perca tempo! Entre em contato agora mesmo e garanta sua data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/558592733553">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-12 py-4">
                  <MessageCircle className="mr-2" />
                  Falar no WhatsApp
                </Button>
              </Link>
              <Link href="/pacotes">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-12 py-4">
                  Ver Pacotes
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
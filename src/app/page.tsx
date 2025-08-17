"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Camera,
  Heart,
  Users,
  Star,
  CheckCircle,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: Camera,
      title: "Ensaios Individuais",
      description:
        "Sessões fotográficas personalizadas com cenários e iluminação profissional.",
      price: "A partir de R$ 649",
      image: "/fotos/IMG_0309 copiar2.jpg",
      href: "/pacotes",
    },
    {
      icon: Heart,
      title: "Gestantes",
      description:
        "Ensaios especiais para gestantes, celebrando esse momento único.",
      price: "A partir de R$ 745",
      image: "/fotos/IMG_6612 copiar.jpg",
      href: "/gestantes",
    },
    {
      icon: Users,
      title: "Corporativo",
      description:
        "Fotografia profissional para empresas, perfis e documentação.",
      price: "Sob consulta",
      image: "/fotos/WhatsApp Image 2025-08-17 at 2.36.54 PM.jpeg",
      href: "/corporativo",
    },
  ];

  const stats = [
    { number: "500+", label: "Ensaios Realizados" },
    { number: "2000+", label: "Fotos Editadas" },
    { number: "98%", label: "Satisfação" },
    { number: "24h", label: "Prazo de Seleção" },
  ];

  const testimonials = [
    {
      name: "Ana Carolina",
      content:
        "Ensaio maravilhoso! As fotos ficaram perfeitas e a experiência foi incrível do início ao fim.",
      rating: 5,
      type: "Ensaio Individual",
    },
    {
      name: "Mariana Santos",
      content:
        "O ensaio gestante foi emocionante! Cada foto capturou perfeitamente esse momento especial.",
      rating: 5,
      type: "Gestante",
    },
    {
      name: "João Silva",
      content:
        "Fotos corporativas profissionais e de alta qualidade. Superou minhas expectativas!",
      rating: 5,
      type: "Corporativo",
    },
  ];

  const packages = [
    {
      title: "Opção 1",
      price: "R$ 649,00",
      installments: "6x de R$ 108,32",
      features: [
        "Ensaio de 30 min",
        "2 trocas de looks",
        "Fundo branco",
        "10 fotos editadas",
      ],
    },
    {
      title: "Opção 2",
      price: "R$ 745,00",
      installments: "6x de R$ 124,17",
      features: [
        "Ensaio de 60 min",
        "3 trocas de looks",
        "2 cenários",
        "15 fotos editadas",
      ],
    },
    {
      title: "Opção 3",
      price: "R$ 940,00",
      installments: "6x de R$ 156,67",
      features: [
        "Ensaio de 90 min",
        "2 cenários e troca de luz",
        "4 trocas de looks",
        "20 fotos editadas",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/fotos/IMG_9333 - Copia.JPG"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="pm-text-elegant"
          >
            <div className="mb-8">
              <div className="text-7xl md:text-9xl font-light pm-hero-text text-white tracking-wider mb-2">
                pacific
              </div>
              <div className="text-6xl md:text-8xl font-light pm-hero-text text-white tracking-wider mb-6">
                moviment
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Fotografia profissional que captura emoções e momentos únicos.
              <br />
              Ensaios individuais, personalizados, gestantes e corporativo.
              <br />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-light pm-text-gold mb-3 pm-text-elegant">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-light pm-text-elegant tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 pm-bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="pm-section-title text-black mb-6 pm-text-elegant">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light pm-text-elegant">
              Capturamos momentos especiais com profissionalismo e arte
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="text-white font-light pm-text-elegant text-lg mb-1">
                        {service.title}
                      </div>
                      <div className="text-yellow-400 font-light pm-text-elegant">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-600 mb-8 font-light pm-text-elegant leading-relaxed">
                      {service.description}
                    </p>
                    <Link href={service.href}>
                      <Button className="w-full pm-bg-black text-white font-light pm-text-elegant hover:bg-gray-800 group">
                        Ver Detalhes
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="pm-section-title text-white mb-6 pm-text-elegant">
              Pacotes Fotográficos
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light pm-text-elegant">
              Escolha o pacote ideal para seu ensaio
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-light mb-2 pm-text-elegant">
                      {pkg.title}
                    </h3>
                    <div className="mb-6">
                      <div className="text-4xl font-light pm-text-gold mb-1">
                        {pkg.price}
                      </div>
                      <div className="text-sm opacity-80">
                        ou {pkg.installments}
                      </div>
                      <div className="text-xs opacity-60 mt-1">À vista</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/pacotes">
                      <Button className="w-full bg-white text-black hover:bg-gray-100 font-light">
                        Escolher Pacote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="pm-section-title text-black mb-6 pm-text-elegant">
              Depoimentos
            </h2>
            <p className="text-lg text-gray-600 pm-text-elegant font-light">
              Experiências reais de quem confiou em nosso trabalho
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-50 border-0">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic font-light pm-text-elegant leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <div className="font-normal text-black pm-text-elegant">
                        {testimonial.name}
                      </div>
                      <div className="text-sm pm-text-gold uppercase tracking-wide">
                        {testimonial.type}
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
      <section className="py-32 pm-bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pm-text-elegant"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
              Pronto para seu
              <br />
              <span className="pm-text-gold">momento único?</span>
            </h2>
            <p className="text-lg opacity-80 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Agende seu ensaio fotográfico e eternize momentos especiais
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-12 py-4 pm-text-elegant font-light"
              >
                <Instagram className="mr-2 h-5 w-5" />
                @pacificmovement
              </Button>
              <Button
                size="lg"
                className="text-lg px-12 py-4 bg-white text-black hover:bg-gray-100 pm-text-elegant font-light"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

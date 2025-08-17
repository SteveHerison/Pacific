"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Award,
  Users,
  Camera,
  CheckCircle,
  Building,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Corporativo() {
  const services = [
    {
      icon: Briefcase,
      title: "Perfil Profissional",
      description: "Fotos para LinkedIn, currículos e perfis corporativos",
      features: ["Fundo neutro", "Iluminação profissional", "Múltiplas poses"],
    },
    {
      icon: Users,
      title: "Equipes",
      description: "Sessões fotográficas para toda a equipe da empresa",
      features: [
        "Padronização visual",
        "Fotos individuais e grupo",
        "No local da empresa",
      ],
    },
    {
      icon: Building,
      title: "Eventos Corporativos",
      description: "Cobertura completa de eventos, palestras e workshops",
      features: [
        "Cobertura completa",
        "Entrega rápida",
        "Fotos para marketing",
      ],
    },
  ];

  const benefits = [
    "Melhore sua imagem profissional",
    "Transmita credibilidade e confiança",
    "Destaque-se no mercado",
    "Material para marketing e comunicação",
    "Padronização visual da equipe",
    "Atendimento no local da empresa",
  ];

  const clients = [
    { name: "Tech Solutions", sector: "Tecnologia" },
    { name: "Finance Corp", sector: "Finanças" },
    { name: "Health Plus", sector: "Saúde" },
    { name: "Marketing Pro", sector: "Marketing" },
    { name: "Law Partners", sector: "Advocacia" },
    { name: "Consulting Group", sector: "Consultoria" },
  ];

  const portfolioImages = [
    "/fotos/IMG_1411.JPG",
    "/fotos/IMG_4808.jpg",
    "/fotos/IMG_1475.JPG",
    "/fotos/IMG_4810.JPG",
    "/fotos/IMG_1488.JPG",
    "/fotos/IMG_4811.JPG",
    "/fotos/IMG_9302.JPG",
    "/fotos/IMG_4807.JPG",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/fotos/IMG_1430.JPG"
            alt="Corporativo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl text-gray-300 font-light mb-6 pm-text-elegant">
              Fotografia Corporativa
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Imagem profissional que transmite credibilidade e excelência
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Nossos Serviços Corporativos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções fotográficas completas para empresas e profissionais
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
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

      {/* Benefits Section */}
      <section className="py-20 pm-bg-beige">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light mb-6">
                Por que investir em fotografia corporativa?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Em um mundo cada vez mais visual, a imagem profissional é
                fundamental para o sucesso. Fotos corporativas de qualidade
                transmitem profissionalismo, credibilidade e cuidado com os
                detalhes.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contato">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                  Solicitar Orçamento
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <Image
                src="/fotos/IMG_1430.JPG"
                alt="Fotografia Corporativa"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Nosso Portfólio Corporativo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exemplos de nosso trabalho com empresas e profissionais
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              >
                <Image
                  src={image}
                  alt={`Fotografia Corporativa ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Cada sessão é única e personalizada para transmitir a identidade e
              valores da sua empresa
            </p>
            <Link href="/contato">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                <Camera className="mr-2 h-4 w-4" />
                Agendar Sessão Corporativa
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Empresas que Confiam em Nosso Trabalho
            </h2>
            <p className="text-gray-600">
              Atendemos diversos setores com excelência
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-lg font-medium mb-1">{client.name}</div>
                <div className="text-sm text-gray-500">{client.sector}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-600">Processo simples e eficiente</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-center"
            >
              <div className="text-5xl font-light pm-text-gold mb-4">01</div>
              <h3 className="text-lg font-medium mb-2">Briefing</h3>
              <p className="text-sm text-gray-600">
                Entendemos suas necessidades e objetivos
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-light pm-text-gold mb-4">02</div>
              <h3 className="text-lg font-medium mb-2">Agendamento</h3>
              <p className="text-sm text-gray-600">
                Definimos data e local da sessão
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-light pm-text-gold mb-4">03</div>
              <h3 className="text-lg font-medium mb-2">Sessão</h3>
              <p className="text-sm text-gray-600">
                Fotografias profissionais com agilidade
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-light pm-text-gold mb-4">04</div>
              <h3 className="text-lg font-medium mb-2">Entrega</h3>
              <p className="text-sm text-gray-600">
                Fotos editadas em alta resolução
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
              Eleve a imagem da sua empresa
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Solicite um orçamento personalizado para sua necessidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-12 py-4"
                >
                  Solicitar Orçamento
                </Button>
              </Link>
              <Link href="/pacotes">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-12 py-4"
                >
                  Ver Pacotes
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

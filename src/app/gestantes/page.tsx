"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Camera, Clock, Calendar, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gestantes() {
  const benefits = [
    {
      icon: Heart,
      title: "Momento Único",
      description:
        "Celebre a beleza e força da maternidade em fotos emocionantes",
    },
    {
      icon: Camera,
      title: "Cenários Especiais",
      description: "Ambientes preparados especialmente para gestantes",
    },
    {
      icon: Clock,
      title: "Melhor Período",
      description: "Ideal entre 28 e 32 semanas de gestação",
    },
    {
      icon: Calendar,
      title: "Flexibilidade",
      description: "Horários e datas adaptados ao seu conforto",
    },
  ];

  const gallery = [
    "/fotos/IMG_6612 copiar.jpg",
    "/fotos/IMG_6339 copiar.jpg",
    "/fotos/IMG_5381 copiar.jpg",
    "/fotos/IMG_6286 copiar.jpg",
    "/fotos/IMG_6253.jpg",
    "/fotos/IMG_1181 copiar.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pm-bg-beige overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/fotos/IMG_1181 copiar.jpg"
            alt="Gestante"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 pm-text-elegant">
              Ensaio Gestante
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
              Um momento mágico que merece ser eternizado com delicadeza e arte
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light mb-6">
                A beleza da maternidade
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O ensaio gestante é uma celebração única da vida e do amor. Cada
                foto captura a conexão especial entre mãe e bebê, criando
                memórias que serão tesouros para toda a vida.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Com técnicas especializadas e um olhar sensível, transformamos
                esse momento em arte, destacando a beleza natural e a força
                feminina durante a gestação.
              </p>
              <Link href="/pacotes">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                  Ver Pacotes Disponíveis
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              <Image
                src="/fotos/IMG_4913.jpg"
                alt="Ensaio Gestante"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 pm-bg-beige">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Por que fazer um ensaio gestante?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada detalhe é pensado para proporcionar conforto e resultados
              incríveis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Galeria de Ensaios
            </h2>
            <p className="text-gray-600">
              Alguns momentos especiais que já capturamos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`Ensaio Gestante ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Pacotes Especiais para Gestantes
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Valores a partir de R$ 745,00 com parcelamento em até 6x
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pacotes">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-12 py-4"
                >
                  Ver Todos os Pacotes
                </Button>
              </Link>
              <Link href="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-12 py-4"
                >
                  Agendar Ensaio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

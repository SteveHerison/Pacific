"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  Users,
  Heart,
  Star,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Ensaios() {
  const ensaioTypes = [
    {
      title: "Individual",
      description:
        "Ensaios personalizados que destacam sua personalidade única",
      image: "/fotos/IMG_0285 copiar3.jpg",
      features: ["Múltiplos looks", "Cenários variados", "Edição profissional"],
    },
    {
      title: "Aniversários",
      description: "Celebre o amor com fotos românticas e autênticas",
      image: "/fotos/IMG_5504 copiar.jpg",
      features: [
        "Momentos espontâneos",
        "Locações especiais",
        "História de vida",
      ],
    },
    {
      title: "Família",
      description: "Momentos preciosos com quem você mais ama",
      image: "/fotos/IMG_5411.jpg",
      features: [
        "Todos os membros",
        "Ambiente descontraído",
        "Memórias eternas",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Conversamos sobre suas ideias e expectativas para o ensaio",
    },
    {
      step: "02",
      title: "Planejamento",
      description: "Definimos cenários, looks e todos os detalhes do ensaio",
    },
    {
      step: "03",
      title: "Dia do Ensaio",
      description: "Momento de relaxar e aproveitar enquanto criamos arte",
    },
    {
      step: "04",
      title: "Edição e Entrega",
      description: "Suas fotos editadas com cuidado e atenção aos detalhes",
    },
  ];

  const gallery = [
    "/fotos/IMG_0792.jpg",
    "/fotos/IMG_5539 copiar.jpg",
    "/fotos/IMG_6776 copiar.jpg",
    "/fotos/IMG_6885.jpg",
    "/fotos/IMG_4808.jpg",
    "/fotos/IMG_5411.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/fotos/IMG_4810.jpg"
            alt="Background"
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
              Ensaios Fotográficos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Transformamos momentos em arte através de ensaios únicos e
              personalizados
            </p>
          </motion.div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Tipos de Ensaios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escolha o estilo que mais combina com você
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ensaioTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-light mb-2">{type.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <Sparkles className="h-4 w-4 text-yellow-500" />
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
      <section className="py-20 pm-bg-beige">
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
            <p className="text-gray-600">
              Do primeiro contato até a entrega das fotos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-light pm-text-gold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-light mb-4">Portfolio</h2>
            <p className="text-gray-600">
              Alguns dos nossos trabalhos recentes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg group"
              >
                <Image
                  src={image}
                  alt={`Ensaio ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
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
              Vamos criar algo incrível juntos?
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Escolha seu pacote e agende seu ensaio fotográfico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pacotes">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-12 py-4"
                >
                  Ver Pacotes
                </Button>
              </Link>
              <Link href="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-12 py-4"
                >
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/fotos/Logotipo Bege (sem fundo) (1).png"
              alt="Pacific Movement"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 font-light">
              Fotografia profissional que captura emoções e momentos únicos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pacotes" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pacotes Fotográficos
                </Link>
              </li>
              <li>
                <Link href="/gestantes" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Ensaio Gestante
                </Link>
              </li>
              <li>
                <Link href="/corporativo" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Fotografia Corporativa
                </Link>
              </li>
              <li>
                <Link href="/ensaios" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Ensaios Individuais
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gray-400" />
                <a href="https://wa.me/558592733553" className="text-sm text-gray-400 hover:text-white transition-colors">
                  WhatsApp: (85) 9273-3553
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:agenciapacificmoviment@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  agenciapacificmoviment@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400">Fortaleza, CE</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pacificmoviment"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-600 rounded-full hover:border-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">
                Pagamento via Pix, Transferência ou Cartão
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Parcelamento em até 6x sem juros
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Pacific Movement. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
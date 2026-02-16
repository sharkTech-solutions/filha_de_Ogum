import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Star, Sun, Moon } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="w-full bg-linear-to-b from-blue-900 to-blue-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-amber-400">
            Filha de Ogum - Ajuda Espiritual
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Há mais de 35 anos guiando caminhos e unindo destinos.
          </p>
          <Link
            href="https://wa.me/554196865804?text=Ol%C3%A1%2C%20quero%20uma%20consulta%20espiritual."
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-xl flex items-center gap-2"
          >
            <span className="uppercase tracking-widest">Agendar Consulta</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/50">
            <Image
              src="/images/oxossi.png"
              alt="Orixá Oxóssi"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold font-cinzel text-amber-400">Oxóssi</h3>
              <p>O caçador de uma flecha só.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 border-l-4 border-red-700 pl-4">
              Quem Sou Eu
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Há mais de <span className="font-bold text-red-700">35 anos</span>, eu trabalho como filha de Ogum, sou graduada e raspada. Autora do livro <em>&quot;As Bruxas de Madelyn&quot;</em>, publicado há mais de 28 anos.
              </p>
              <p>
                Faço leituras de cartas de tarô, adoçamento, amarração para o amor, afastamento de rival e libertação espiritual. Sou do Paraná e atendo o Brasil inteiro.
              </p>
              <p className="font-semibold text-blue-800 italic">
                &quot;Te dou uma resposta e você decide o que vai fazer da sua vida.&quot;
              </p>
            </div>
            <Link
              href="https://wa.me/554196865804"
              className="inline-block mt-4 text-red-700 font-bold border-b-2 border-red-700 hover:text-red-900 transition-colors"
            >
              Saiba mais sobre minha história &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Problems/Solutions Section */}
      <section className="w-full py-16 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-12">Por que sua vida não anda?</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-blue-900">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Muitas vezes você trabalha e seu dinheiro não rende, as contas não fecham... não é porque você gasta demais ou não sabe se controlar.
              Pode ser que tenha um <span className="font-bold text-red-700">Egum</span> na sua casa, se alimentando da sua energia, causando a separação do seu casamento, atormentando a sua vida, ou influenciando sua família e seus filhos em vícios.
            </p>
            <p className="text-xl font-bold text-blue-900 mb-8">
              Tudo isso é muito sério.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Através da leitura das cartas, nós poderemos saber exatamente o que acontece com você. Para isso, estou à sua disposição.
            </p>
            <Link
              href="https://wa.me/554196865804?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20o%20que%20est%C3%A1%20acontecendo."
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg shadow-md transition-colors inline-block whitespace-normal text-center leading-tight max-w-full"
            >
              Quero descobrir o que está acontecendo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 px-6 bg-linear-to-b from-blue-900 to-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-400">Meus Trabalhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Star className="w-10 h-10 text-amber-400" />}
              title="Leitura de Cartas"
              desc="Revelações precisas sobre seu passado, presente e futuro."
            />
            <ServiceCard
              icon={<Heart className="w-10 h-10 text-pink-500" />}
              title="Amarração Amorosa"
              desc="Traga seu amor de volta e fortaleça a união."
            />
            <ServiceCard
              icon={<Shield className="w-10 h-10 text-blue-400" />}
              title="Afastamento de Rival"
              desc="Afaste quem quer destruir sua felicidade."
            />
            <ServiceCard
              icon={<Sun className="w-10 h-10 text-amber-300" />}
              title="Adoçamento"
              desc="Suavize corações endurecidos e traga paz ao relacionamento."
            />
            <ServiceCard
              icon={<Moon className="w-10 h-10 text-purple-400" />}
              title="Libertação Espiritual"
              desc="Limpeza de cargas negativas e proteção contra o mal."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-400 py-10 px-6 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Filha de Ogum - Ajuda Espiritual. Todos os direitos reservados.
        </p>
        <p className="text-sm">
          WhatsApp: <a href="https://wa.me/554196865804" className="text-green-500 hover:underline">+55 41 9686-5804</a>
        </p>
      </footer>
    </main>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-amber-400/50 transition-all hover:bg-white/15">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}

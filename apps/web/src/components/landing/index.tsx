'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Calendar, Menu, X, ArrowRight, Clock, CheckCircle2, Sparkles, Star, Shield, Zap, Users, BarChart3, Bell, ChevronDown, Heart } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '#features', label: 'Fonctionnalités' },
    { href: '#how-it-works', label: 'Comment ça marche' },
    { href: '#pricing', label: 'Tarifs' },
    { href: '#faq', label: 'FAQ' },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-600 to-blue-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-xl group-hover:shadow-primary-500/40 transition-all duration-300 group-hover:scale-105">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">Book<span className="gradient-text">Easy</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/admin/login"><Button variant="ghost" size="sm">Admin</Button></Link>
            <Link href="/booking"><Button size="sm"><Sparkles className="w-4 h-4" />Réserver</Button></Link>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
          </button>
        </nav>
        <div className={cn('md:hidden overflow-hidden transition-all duration-300', isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0')}>
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map(l => <a key={l.href} href={l.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-xl transition-colors">{l.label}</a>)}
            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100">
              <Link href="/admin/login" className="flex-1"><Button variant="secondary" className="w-full" size="sm">Admin</Button></Link>
              <Link href="/booking" className="flex-1"><Button className="w-full" size="sm">Réserver</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary-100/60 via-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-8 animate-fade-in shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Simplifiez vos réservations dès aujourd'hui</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 animate-slide-up leading-tight">
            Réservez en{' '}
            <span className="gradient-text relative">
              30 secondes
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 4 298 10" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#2563eb"/><stop offset="100%" stopColor="#3b82f6"/></linearGradient></defs>
              </svg>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 animate-slide-up leading-relaxed" style={{ animationDelay: '100ms' }}>
            BookEasy permet à vos clients de réserver leurs rendez-vous en ligne, <span className="text-slate-900 font-semibold">24h/24</span>. Fini les appels manqués.
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link href="/booking">
              <Button size="lg" className="group text-base">
                Réserver un créneau
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="secondary" size="lg" className="text-base">Voir comment ça marche</Button>
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {[
              { icon: Calendar, text: 'Réservation 24/7' },
              { icon: Clock, text: 'Confirmation instantanée' },
              { icon: CheckCircle2, text: '100% gratuit' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Preview */}
        <div className="mt-20 md:mt-28 relative animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none h-40 bottom-0 top-auto"></div>
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200 overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1.5 bg-white rounded-lg text-sm text-slate-500 border border-slate-200 font-medium">easybook-web.onrender.com/booking</div>
                </div>
              </div>
              <div className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: 'Consultation découverte', price: 'Gratuit', duration: '30 min', color: 'from-emerald-500 to-teal-500' },
                    { name: 'Coaching individuel', price: '80€', duration: '1h', color: 'from-primary-500 to-blue-500' },
                    { name: 'Coaching premium', price: '120€', duration: '1h30', color: 'from-purple-500 to-pink-500' },
                  ].map((service, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                      <div className={cn('w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5 shadow-lg', service.color)}>
                        <Calendar className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg">{service.name}</h3>
                      <p className="text-sm text-slate-500 mb-5">{service.price} • {service.duration}</p>
                      <div className={cn('h-12 rounded-xl bg-gradient-to-r', service.color)}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    { icon: Calendar, title: 'Réservation en ligne', desc: 'Vos clients réservent directement depuis votre site, à toute heure du jour et de la nuit.', color: 'from-primary-500 to-blue-500' },
    { icon: Clock, title: 'Gestion des disponibilités', desc: 'Définissez vos horaires, vos jours off et vos exceptions en quelques clics.', color: 'from-emerald-500 to-teal-500' },
    { icon: Bell, title: 'Notifications automatiques', desc: 'Confirmations et rappels envoyés automatiquement à vos clients.', color: 'from-amber-500 to-orange-500' },
    { icon: Users, title: 'Multi-services', desc: 'Proposez différentes prestations avec des durées et tarifs personnalisés.', color: 'from-purple-500 to-pink-500' },
    { icon: BarChart3, title: 'Tableau de bord', desc: 'Suivez vos réservations, analysez votre activité et exportez vos données.', color: 'from-rose-500 to-red-500' },
    { icon: Shield, title: 'Simple et fiable', desc: "Interface intuitive, pas de formation nécessaire. Ça marche, tout simplement.", color: 'from-cyan-500 to-blue-500' },
  ];
  
  return (
    <section id="features" className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Fonctionnalités
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tout ce dont vous avez besoin</h2>
          <p className="text-xl text-slate-600">BookEasy simplifie la gestion de vos rendez-vous avec des fonctionnalités pensées pour les professionnels.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="card-hover p-8 group">
              <div className={cn('w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300', f.color)}>
                <f.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { num: '01', title: 'Choisissez votre prestation', desc: 'Parcourez les services disponibles et sélectionnez celui qui vous convient.', icon: Sparkles },
    { num: '02', title: 'Réservez votre créneau', desc: "Consultez les disponibilités en temps réel et choisissez la date et l'heure.", icon: Calendar },
    { num: '03', title: "C'est confirmé !", desc: 'Recevez instantanément votre confirmation avec tous les détails.', icon: CheckCircle2 },
  ];
  
  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Simple comme bonjour
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comment ça marche ?</h2>
          <p className="text-xl text-slate-600">3 étapes, 30 secondes, c'est fait.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 -translate-y-1/2 mx-32"></div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="card p-8 text-center relative z-10 hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-primary-600 to-blue-500 text-white text-sm font-bold rounded-full shadow-lg">{s.num}</div>
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center mb-6 mt-4">
                    <s.icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Tarification simple
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Gratuit pour commencer</h2>
          <p className="text-xl text-slate-600">Pas de frais cachés, pas de surprises.</p>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Plan Gratuit</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-bold gradient-text">0€</span>
                  <span className="text-slate-500 text-lg">/mois</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {['Réservations illimitées', 'Gestion des services', 'Tableau de bord complet', 'Export CSV', 'Support par email'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/booking"><Button className="w-full" size="lg">Commencer gratuitement</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: 'Comment fonctionne la réservation en ligne ?', a: 'Les clients accèdent à votre page de réservation, choisissent un service et un créneau disponible, puis renseignent leurs coordonnées. Ils reçoivent une confirmation instantanée.' },
    { q: 'Puis-je personnaliser mes horaires ?', a: 'Oui, vous pouvez définir vos horaires pour chaque jour de la semaine, créer des exceptions pour les jours fériés ou congés.' },
    { q: 'Comment sont gérées les annulations ?', a: 'Vous pouvez annuler une réservation depuis votre tableau de bord. Le client est automatiquement notifié.' },
    { q: "Y a-t-il une limite de réservations ?", a: 'Non, toutes les formules permettent des réservations illimitées.' },
  ];
  
  return (
    <section id="faq" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Questions fréquentes</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={cn('w-5 h-5 text-slate-400 transition-transform flex-shrink-0', openIndex === i && 'rotate-180')} />
              </button>
              <div className={cn('overflow-hidden transition-all duration-300', openIndex === i ? 'max-h-40' : 'max-h-0')}>
                <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">BookEasy</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/booking" className="text-slate-400 hover:text-white transition-colors">Réserver</Link>
            <Link href="/admin/login" className="text-slate-400 hover:text-white transition-colors">Admin</Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} BookEasy. Tous droits réservés.</p>
          <p className="text-slate-400 text-sm flex items-center gap-1">Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en France</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import Image from 'next/image';
import { 
  Zap, 
  Plane, 
  ThermometerSun, 
  Target, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sun,
  Mountain,
  Building2,
  HardHat,
  Phone,
  Mail,
  MapPin,
  Map,
  Award,
  Cloud,
  BarChart3
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden text-neutral-900 bg-white">
      
      {/* 1. HEADER (Dark Theme, Sticky) */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#030712]/90 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image src="/logo.svg" alt="SafeAura AI Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                SafeAura<span className="text-cyan-400"> AI</span>
              </span>
              <span className="text-[10px] text-neutral-400 font-medium tracking-wider mt-1">
                Inspection • Intelligence • Compliance
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#services" className="hover:text-white transition-colors">Industries</a>
            <a href="#services" className="hover:text-white transition-colors">About Us</a>
            <a href="#services" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#services" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              Get a Quote
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (Dark Theme, Full-Width Background Photo on Mobile, Right-Aligned on Desktop) */}
      <section className="relative min-h-screen pt-32 pb-24 flex items-center justify-start text-white overflow-hidden bg-[#030712]">
        {/* Background Image placed on the right side for desktop, full screen for mobile */}
        <div className="absolute inset-0 z-0 lg:left-1/3 xl:left-1/2">
          <Image 
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200" 
            alt="Drone flying over site" 
            fill 
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center lg:object-left"
          />
          {/* Gradients to fade out the image smoothly */}
          {/* Left-to-right fade for desktop: fades the left side of the image into the solid dark background */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent z-10 hidden lg:block"></div>
          {/* Overlays for mobile (spans the entire image) */}
          <div className="absolute inset-0 bg-[#030712]/85 z-10 lg:hidden"></div>
          {/* Bottom fade for both */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-4 text-white">
              SafeAura<span className="text-cyan-400"> AI</span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              See risk before they escalate
            </h2>
            
            <p className="text-lg text-neutral-300 mb-10 max-w-xl leading-relaxed">
              SafeAura AI combines drone technology, thermal imaging and engineering intelligence to deliver accurate insights, reduce risk and protect your projects.
            </p>

            {/* Inline 4 features with subtext */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl">
              <div className="flex gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <Plane className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Drone Intelligence</h4>
                  <p className="text-xs text-neutral-400">High-resolution mapping & analytics</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <ThermometerSun className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Thermal Insights</h4>
                  <p className="text-xs text-neutral-400">Detect issues before they grow</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <Target className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Engineering Accuracy</h4>
                  <p className="text-xs text-neutral-400">Civil 3D analysis & precise reporting</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <ShieldCheck className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Safety First</h4>
                  <p className="text-xs text-neutral-400">WHS focused risk management</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4">
              <button className="px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Our Services
              </button>
              <button className="px-8 py-3.5 text-sm font-semibold text-white bg-transparent border border-white/30 rounded-full hover:bg-white/10 transition-all">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE SERVICES (Light Theme) */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-neutral-500 font-semibold uppercase tracking-widest text-sm">
              Data. Analysis. Actionable Intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-16">
            
            {/* Solar Card */}
            <div className="relative bg-white rounded-3xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 pt-10 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
              <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-md border-4 border-white z-20">
                <Sun className="h-6 w-6" />
              </div>
              <div className="aspect-[16/10] w-full relative bg-neutral-100 rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600" 
                  alt="Solar Asset Intelligence" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">Solar Asset Intelligence</h3>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  Thermal anomaly detection
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Hotspot identification
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Performance issue investigation
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Bird nesting assessment
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Maintenance recommendations
                </li>
              </ul>
              <a href="#" className="inline-flex items-center gap-1.5 text-amber-500 font-bold hover:text-amber-600 transition-colors text-sm mt-auto">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Earthworks Card */}
            <div className="relative bg-white rounded-3xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 pt-10 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
              <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md border-4 border-white z-20">
                <Mountain className="h-6 w-6" />
              </div>
              <div className="aspect-[16/10] w-full relative bg-neutral-100 rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=600" 
                  alt="Earthworks & Stockpile Analytics" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">Earthworks & Stockpile Analytics</h3>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Cut & Fill calculations
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Stockpile volume measurement
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Progress quantity verification
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Contractor claim validation
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Survey-grade reporting
                </li>
              </ul>
              <a href="#" className="inline-flex items-center gap-1.5 text-amber-500 font-bold hover:text-amber-600 transition-colors text-sm mt-auto">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Construction Card */}
            <div className="relative bg-white rounded-3xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 pt-10 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
              <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md border-4 border-white z-20">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="aspect-[16/10] w-full relative bg-neutral-100 rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600" 
                  alt="Construction Progress Monitoring" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">Construction Progress Monitoring</h3>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Weekly drone surveys
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Orthomosaic & 3D mapping
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Progress tracking
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  As-built validation
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Time-lapse visualisation
                </li>
              </ul>
              <a href="#" className="inline-flex items-center gap-1.5 text-amber-500 font-bold hover:text-amber-600 transition-colors text-sm mt-auto">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Safety Card */}
            <div className="relative bg-white rounded-3xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 pt-10 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
              <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-md border-4 border-white z-20">
                <HardHat className="h-6 w-6" />
              </div>
              <div className="aspect-[16/10] w-full relative bg-neutral-100 rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600" 
                  alt="Safety & Compliance Intelligence" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">Safety & Compliance Intelligence</h3>
              <ul className="space-y-3 mb-6 flex-1">
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Site safety inspections
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Hazard identification
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Risk assessments
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Compliance observations
                </li>
                <li className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  Corrective action tracking
                </li>
              </ul>
              <a href="#" className="inline-flex items-center gap-1.5 text-amber-500 font-bold hover:text-amber-600 transition-colors text-sm mt-auto">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <section className="bg-[#05142b] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center md:divide-x divide-white/10 py-12">
            <div className="flex items-center justify-center gap-4 py-4 px-6">
              <Plane className="h-10 w-10 text-cyan-400 shrink-0" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-neutral-400 text-xs tracking-wide uppercase font-semibold">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-4 px-6">
              <Map className="h-10 w-10 text-cyan-400 shrink-0" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">10M+ m²</div>
                <div className="text-neutral-400 text-xs tracking-wide uppercase font-semibold">Area Mapped</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-4 px-6">
              <Award className="h-10 w-10 text-cyan-400 shrink-0" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-neutral-400 text-xs tracking-wide uppercase font-semibold">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-4 px-6">
              <ShieldCheck className="h-10 w-10 text-cyan-400 shrink-0" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">0</div>
                <div className="text-neutral-400 text-xs tracking-wide uppercase font-semibold">Safety Incidents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (Light Theme) */}
      <section id="how-it-works" className="py-24 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-4">How It Works</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 relative max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl relative">
              <div className="absolute -top-5 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-md border-4 border-white">
                1
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 mt-2 text-blue-600">
                <Plane className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">We Capture</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">High-quality drone, thermal and site data.</p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl relative">
              <div className="absolute -top-5 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-md border-4 border-white">
                2
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 mt-2 text-blue-600">
                <Cloud className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">We Process</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Advanced AI & engineering analysis for accurate results.</p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl relative">
              <div className="absolute -top-5 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-md border-4 border-white">
                3
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 mt-2 text-blue-600">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">We Deliver</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Clear reports, dashboards and actionable insights.</p>
            </div>

            {/* Step 4 */}
            <div className="flex-1 flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl relative">
              <div className="absolute -top-5 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-md border-4 border-white">
                4
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 mt-2 text-blue-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">You Decide</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">Make confident decisions and reduce risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER (Dark Theme) */}
      <footer className="bg-[#030712] text-white pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Left */}
            <div className="lg:pr-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative h-10 w-10">
                  <Image src="/logo.svg" alt="SafeAura AI Logo" fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white leading-none">
                    SafeAura<span className="text-cyan-400"> AI</span>
                  </span>
                  <span className="text-[10px] text-neutral-400 font-medium tracking-wider mt-1">
                    Inspection • Intelligence • Compliance
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                We help construction, infrastructure and asset owners see the unseen, understand the risk and take action with confidence.
              </p>
            </div>

            {/* Center-Left */}
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Solar Asset Intelligence</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Earthworks & Stockpile Analytics</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Construction Progress Monitoring</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Safety & Compliance Intelligence</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Building Diagnostics</a></li>
              </ul>
            </div>

            {/* Center-Right */}
            <div>
              <h4 className="text-white font-bold mb-6">Industries</h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Construction</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Infrastructure</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Solar & Energy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Mining & Resources</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Commercial & Industrial</a></li>
              </ul>
            </div>

            {/* Right */}
            <div>
              <h4 className="text-white font-bold mb-6">Get in Touch</h4>
              <ul className="space-y-4 text-sm text-neutral-400 mb-6">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-neutral-500" />
                  +61 4XX XXX XXX
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-neutral-500" />
                  info@safeauraai.com.au
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-neutral-500 shrink-0 mt-0.5" />
                  Sydney, NSW, Australia
                </li>
              </ul>
              <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                Get a Quote
              </button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2024 SafeAura AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

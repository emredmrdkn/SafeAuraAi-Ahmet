import React from 'react';
import Image from 'next/image';
import { 
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
  BarChart3,
  Menu,
  ChevronDown
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden text-neutral-900 bg-white">
      
      {/* 1. HEADER (Dark Theme, Sticky) */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#030712]/90 backdrop-blur-md transition-all duration-300">
        {/* Hidden Checkbox for pure-CSS menu toggle */}
        <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

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

          {/* Desktop Navigation Links (Visible on lg and up) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#" className="text-blue-400 font-semibold">Home</a>
            <a href="#services" className="hover:text-white transition-colors inline-flex items-center gap-1">Services <ChevronDown className="h-3.5 w-3.5" /></a>
            <a href="#industries" className="hover:text-white transition-colors">Industries</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop Get a Quote Button (Visible on lg and up) */}
            <a 
              href="tel:+61421781826"
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-400 transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
              Get a Quote
            </a>

            {/* Hamburger Button for Mobile/Tablet (Visible below lg) */}
            <label 
              htmlFor="mobile-menu-toggle" 
              className="lg:hidden p-2 text-neutral-300 hover:text-white cursor-pointer select-none"
            >
              <Menu className="h-6 w-6" />
            </label>
          </div>
        </div>

        {/* Mobile/Tablet Menu Drawer (Visible below lg when peer checkbox is checked) */}
        <div className="absolute top-20 left-0 right-0 bg-[#030712]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4 transition-all duration-300 origin-top scale-y-0 opacity-0 pointer-events-none peer-checked:scale-y-100 peer-checked:opacity-100 peer-checked:pointer-events-auto lg:hidden">
          <a href="#services" className="text-neutral-300 hover:text-white py-2.5 text-base border-b border-white/5">Home</a>
          <a href="#services" className="text-neutral-300 hover:text-white py-2.5 text-base border-b border-white/5">Services</a>
          <a href="#services" className="text-neutral-300 hover:text-white py-2.5 text-base border-b border-white/5">Industries</a>
          <a href="#services" className="text-neutral-300 hover:text-white py-2.5 text-base border-b border-white/5">About Us</a>
          <a href="#services" className="text-neutral-300 hover:text-white py-2.5 text-base border-b border-white/5">Case Studies</a>
          <a href="#services" className="text-neutral-300 hover:text-white py-2.5 text-base border-b border-white/5">Contact</a>
          <div className="pt-4">
            <a 
              href="tel:+61421781826"
              className="w-full flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-400 transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (Dark Theme, Compact, Right-Aligned Photo) */}
      <section className="relative min-h-[85vh] pt-28 pb-16 lg:pt-32 lg:pb-20 flex items-center justify-center md:justify-start text-white overflow-hidden bg-[#030712]">
        
        {/* Full-screen Background Image with gradients for readability */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/assets/hero_drone_new.jpg" 
            alt="Drone pilot inspecting construction site" 
            fill 
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[75%_38%] md:object-[right_38%]"
          />
          {/* Dark overlay gradients to ensure content readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/85 md:via-[#030712]/50 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl w-full md:pr-[42%] lg:pr-0 lg:max-w-2xl xl:max-w-3xl text-center md:text-left flex flex-col items-center md:items-start">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-4">
              See Risks <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Before They Escalate
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-neutral-300 mb-6 max-w-xl leading-relaxed mx-auto md:mx-0">
              SafeAura AI combines drone technology, thermal imaging and engineering intelligence to deliver accurate insights, reduce risk and protect your projects.
            </p>

            {/* Horizontal inline features row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 w-full max-w-sm md:max-w-none mx-auto md:mx-0">
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Plane className="h-5 w-5 text-blue-400 shrink-0" />
                  <h4 className="font-bold text-white text-xs md:text-sm">Drone Intelligence</h4>
                </div>
                <p className="text-[11px] text-neutral-400 leading-tight">High-resolution mapping & analytics</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <ThermometerSun className="h-5 w-5 text-orange-400 shrink-0" />
                  <h4 className="font-bold text-white text-xs md:text-sm">Thermal Insights</h4>
                </div>
                <p className="text-[11px] text-neutral-400 leading-tight">Detect issues before they grow</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Target className="h-5 w-5 text-emerald-400 shrink-0" />
                  <h4 className="font-bold text-white text-xs md:text-sm">Engineering Accuracy</h4>
                </div>
                <p className="text-[11px] text-neutral-400 leading-tight">Civil 3D analysis & precise reporting</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <ShieldCheck className="h-5 w-5 text-purple-400 shrink-0" />
                  <h4 className="font-bold text-white text-xs md:text-sm">Safety First</h4>
                </div>
                <p className="text-[11px] text-neutral-400 leading-tight">WHS focused risk management</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center md:justify-start gap-4 w-full">
              <button className="px-8 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-[0_4px_14px_rgba(37,99,235,0.3)]">
                Our Services
              </button>
              <a 
                href="tel:+61421781826"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white bg-transparent border border-white/20 rounded-lg hover:bg-white/10 transition-all"
              >
                Get a Quote
              </a>
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

          <div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-6 gap-y-10 lg:gap-y-12 mt-12">
            
            {/* Solar Card */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)] min-w-[280px] max-w-[360px] relative bg-white rounded-[24px] border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col hover:shadow-[0_16px_40px_rgba(8,112,184,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/10] w-full relative bg-neutral-50 overflow-hidden">
                <Image 
                  src="/assets/solar_asset_inspect.jpg" 
                  alt="Solar Asset Intelligence - Drone thermal inspection of solar panels" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover" 
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md border border-white/20 z-10">
                  <Sun className="h-5.5 w-5.5 text-amber-500" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">Solar Asset Intelligence</h3>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thermal anomaly detection</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hotspot identification</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Performance issue investigation</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bird nesting assessment</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maintenance recommendations</span>
                  </li>
                </ul>
                <a 
                  href="tel:+61421781826"
                  className="group/btn inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 text-xs font-semibold text-blue-600 bg-blue-50/50 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-200 border border-blue-100/50 mt-auto"
                >
                  Get a Quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Earthworks Card */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)] min-w-[280px] max-w-[360px] relative bg-white rounded-[24px] border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col hover:shadow-[0_16px_40px_rgba(8,112,184,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/10] w-full relative bg-neutral-50 overflow-hidden">
                <Image 
                  src="/assets/earthworks_analytics.jpg" 
                  alt="Earthworks & Stockpile Analytics - Volume measurements and site mapping" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover" 
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md border border-white/20 z-10">
                  <Mountain className="h-5.5 w-5.5 text-emerald-600" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">Earthworks & Stockpile Analytics</h3>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cut & Fill calculations</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stockpile volume measurement</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Progress verification</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contractor claim validation</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Survey-grade reporting</span>
                  </li>
                </ul>
                <a 
                  href="tel:+61421781826"
                  className="group/btn inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 text-xs font-semibold text-blue-600 bg-blue-50/50 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-200 border border-blue-100/50 mt-auto"
                >
                  Get a Quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Construction Card */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)] min-w-[280px] max-w-[360px] relative bg-white rounded-[24px] border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col hover:shadow-[0_16px_40px_rgba(8,112,184,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/10] w-full relative bg-neutral-50 overflow-hidden">
                <Image 
                  src="/assets/construction_monitor.jpg" 
                  alt="Construction Progress Monitoring - Drone aerial survey with progress overlay" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover" 
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md border border-white/20 z-10">
                  <Building2 className="h-5.5 w-5.5 text-blue-600" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">Construction Progress Monitoring</h3>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekly drone surveys</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Orthomosaic & 3D mapping</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>As-built validation</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Time-lapse visualisation</span>
                  </li>
                </ul>
                <a 
                  href="tel:+61421781826"
                  className="group/btn inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 text-xs font-semibold text-blue-600 bg-blue-50/50 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-200 border border-blue-100/50 mt-auto"
                >
                  Get a Quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Safety Card */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)] min-w-[280px] max-w-[360px] relative bg-white rounded-[24px] border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col hover:shadow-[0_16px_40px_rgba(8,112,184,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/10] w-full relative bg-neutral-50 overflow-hidden">
                <Image 
                  src="/assets/safety_compliance.jpg" 
                  alt="Safety & Compliance Intelligence - Hazard identification and risk assessment" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover" 
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md border border-white/20 z-10">
                  <HardHat className="h-5.5 w-5.5 text-purple-600" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">Safety & Compliance Intelligence</h3>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Site safety inspections</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hazard identification</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Risk assessments</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compliance observations</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Corrective action tracking</span>
                  </li>
                </ul>
                <a 
                  href="tel:+61421781826"
                  className="group/btn inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 text-xs font-semibold text-blue-600 bg-blue-50/50 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-200 border border-blue-100/50 mt-auto"
                >
                  Get a Quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Building Diagnostics Card */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)] min-w-[280px] max-w-[360px] relative bg-white rounded-[24px] border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col hover:shadow-[0_16px_40px_rgba(8,112,184,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/10] w-full relative bg-neutral-50 overflow-hidden">
                <Image 
                  src="/assets/building_diagnostics.jpg" 
                  alt="Building Diagnostics - Drone thermal diagnostic inspection" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover" 
                />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md border border-white/20 z-10">
                  <ThermometerSun className="h-5.5 w-5.5 text-cyan-600" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">Building Diagnostics</h3>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Moisture ingress detection</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Water damage assessment</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thermal insulation audits</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Moisture level mapping</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-600">
                    <svg className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Defect reporting & advice</span>
                  </li>
                </ul>
                <a 
                  href="tel:+61421781826"
                  className="group/btn inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 text-xs font-semibold text-blue-600 bg-blue-50/50 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-200 border border-blue-100/50 mt-auto"
                >
                  Get a Quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <section className="bg-[#05142b] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center md:divide-x divide-white/10 py-12">
            <div className="flex items-center justify-center gap-4 py-5 px-6">
              <Plane className="h-10 w-10 text-cyan-400 shrink-0" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-neutral-400 text-xs tracking-wide uppercase font-semibold">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-5 px-6">
              <Map className="h-10 w-10 text-cyan-400 shrink-0" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">10M+ m²</div>
                <div className="text-neutral-400 text-xs tracking-wide uppercase font-semibold">Area Mapped</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-5 px-6">
              <Award className="h-10 w-10 text-cyan-400 shrink-0" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-neutral-400 text-xs tracking-wide uppercase font-semibold">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 py-5 px-6">
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
          
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 relative max-w-6xl mx-auto">
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

            {/* Arrow 1→2 */}
            <div className="hidden md:flex items-center justify-center shrink-0 text-neutral-300">
              <ArrowRight className="h-6 w-6" />
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

            {/* Arrow 2→3 */}
            <div className="hidden md:flex items-center justify-center shrink-0 text-neutral-300">
              <ArrowRight className="h-6 w-6" />
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

            {/* Arrow 3→4 */}
            <div className="hidden md:flex items-center justify-center shrink-0 text-neutral-300">
              <ArrowRight className="h-6 w-6" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            {/* Left */}
            <div className="lg:pr-4 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
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
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-neutral-300 hover:bg-blue-600 hover:text-white transition-all">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-neutral-300 hover:bg-pink-500 hover:text-white transition-all">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-neutral-300 hover:bg-blue-500 hover:text-white transition-all">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="tel:+61421781826" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-neutral-300 hover:bg-emerald-500 hover:text-white transition-all">
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Center-Left */}
            <div className="flex flex-col items-center md:items-start">
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
            <div className="flex flex-col items-center md:items-start">
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
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold mb-6">Get in Touch</h4>
              <ul className="space-y-4 text-sm text-neutral-400 mb-6">
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="h-4 w-4 text-neutral-500" />
                  <a href="tel:+61421781826" className="hover:text-blue-400 transition-colors">+61 421 781 826</a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="h-4 w-4 text-neutral-500" />
                  info@safeauraai.com.au
                </li>
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <MapPin className="h-4 w-4 text-neutral-500 shrink-0 mt-0.5" />
                  Sydney, NSW, Australia
                </li>
              </ul>
              <a 
                href="tel:+61421781826"
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-400 transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              >
                Get a Quote
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2026 SafeAura AI. All rights reserved.</p>
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

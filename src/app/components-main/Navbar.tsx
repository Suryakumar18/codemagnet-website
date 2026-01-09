"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { 
  Code2, 
  Target, 
  Layout, 
  Smartphone, 
  Globe, 
  MessageSquare, 
  Bot, 
  Users, 
  Camera, 
  BarChart3, 
  BookOpen, 
  MessageCircle,
  ChevronDown 
} from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-8" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();

  // Helper to highlight active links
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "cursor-pointer text-sm font-medium transition-colors duration-200",
      isActive ? "text-[#aff0e6]" : "text-white hover:text-[#aff0e6]"
    );
  };

  const isSectionActive = (prefix: string) => pathname?.startsWith(prefix);

  return (
    <>
      {/* =======================================================================
        DESKTOP & LARGE LAPTOP NAVBAR 
        Visible only on screens LARGER than 1024px (lg:flex)
        =======================================================================
      */}
      <div
        className={cn(
          "hidden lg:flex fixed inset-x-0 top-10 z-50 mx-auto max-w-fit rounded-full",
          "bg-neutral-950 border border-white/10 shadow-lg shadow-black/50 px-6", // Increased px for logo space
          className
        )}
      >
        <Menu setActive={setActive}>
          <div className="flex items-center justify-center w-full gap-8">
            
            {/* LOGO (Desktop) */}
            <Link href="/" className="flex items-center mr-2">
              <Image 
                 src="/kodemagnet-logo.png" // Make sure file is in public folder
                 alt="CodeMagnet" 
                 width={140} 
                 height={40} 
                 className="h-8 w-auto object-contain" // Adjust h-8 to size properly
              />
            </Link>

            {/* 1. Home */}
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>

            {/* 2. What We Do (With Icons) */}
            <div className={isSectionActive("/solutions") ? "text-[#aff0e6]" : ""}>
                <MenuItem setActive={setActive} active={active} item="What We Do">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-6 p-4 text-sm w-[450px] bg-neutral-900 rounded-xl">
                    
                    <HoveredLink href="/solutions/software">
                       <div className="flex items-center gap-3 group">
                          <Code2 className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                          <span>Software Solutions</span>
                       </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/point">
                       <div className="flex items-center gap-3 group">
                          <Target className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                          <span>Point Solutions</span>
                       </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/websites">
                       <div className="flex items-center gap-3 group">
                          <Layout className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                          <span>Websites</span>
                       </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/mobile-apps">
                       <div className="flex items-center gap-3 group">
                          <Smartphone className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform" />
                          <span>Mobile Apps</span>
                       </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/web-apps">
                       <div className="flex items-center gap-3 group">
                          <Globe className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                          <span>Web Applications</span>
                       </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/chatbot">
                       <div className="flex items-center gap-3 group">
                          <MessageSquare className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                          <span>Chatbot</span>
                       </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/ai">
                       <div className="flex items-center gap-3 group">
                          <Bot className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
                          <span>AI Solutions</span>
                       </div>
                    </HoveredLink>

                    <HoveredLink href="/solutions/hire-train-deploy">
                       <div className="flex items-center gap-3 group">
                          <Users className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                          <span>Hire, Train & Deploy</span>
                       </div>
                    </HoveredLink>

                  </div>
                </MenuItem>
            </div>

            {/* 3. Our Products (With Colorful Icons) */}
            <div className={isSectionActive("/products") ? "text-[#aff0e6]" : ""}>
                <MenuItem setActive={setActive} active={active} item="Our Products">
                   <div className="grid grid-cols-2 gap-4 p-4 text-sm w-[550px] bg-neutral-900 rounded-xl">
                      
                      <ProductCard 
                         title="Kodegraphy"
                         href="/products/kodegraphy"
                         desc="Event photography with instant QR scanning."
                         icon={<Camera className="w-6 h-6 text-fuchsia-500" />}
                      />
                      
                      <ProductCard 
                         title="CodeLeads"
                         href="/products/codeleads"
                         desc="Sales CRM for lead tracking."
                         icon={<BarChart3 className="w-6 h-6 text-emerald-500" />}
                      />

                      <ProductCard 
                         title="CodeMagnet LMS"
                         href="/products/kodemagnet-lms"
                         desc="Advanced coding education platform."
                         icon={<BookOpen className="w-6 h-6 text-indigo-500" />}
                      />

                      <ProductCard 
                         title="KodeChat"
                         href="/products/kodechat"
                         desc="Automated DM & comment engagement."
                         icon={<MessageCircle className="w-6 h-6 text-rose-500" />}
                      />

                   </div>
                </MenuItem>
            </div>

            {/* 4. About Us */}
            <Link href="/about" className={getLinkClass("/about")}>
              About Us
            </Link>
            
            {/* 5. Contact Us */}
            <Link href="/contact" className={getLinkClass("/contact")}>
              Contact Us
            </Link>

            {/* 6. Learn From Us Button */}
            <Link 
                href="/learn" 
                className={cn(
                    "px-5 py-2 rounded-full border text-xs font-bold transition-all duration-300",
                    pathname === "/learn" 
                        ? "bg-[#aff0e6] border-[#aff0e6] text-black" 
                        : "border-white text-white hover:bg-[#aff0e6] hover:border-[#aff0e6] hover:text-black"
                )}
            >
              Learn From Us
            </Link>

          </div>
        </Menu>
      </div>

      {/* =======================================================================
        MOBILE NAVBAR
        =======================================================================
      */}
      <div className={cn("lg:hidden fixed inset-x-0 top-4 z-50 mx-4", className?.replace("top-8", ""))}>
        <div className="flex items-center justify-between bg-neutral-950 border border-white/10 rounded-full px-6 py-4 shadow-lg shadow-black/50">
           {/* LOGO (Mobile) */}
           <Link href="/">
              <Image 
                 src="/kodemagnet-logo.png" 
                 alt="CodeMagnet" 
                 width={120} 
                 height={40} 
                 className="h-8 w-auto object-contain"
              />
           </Link>

           <button 
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="text-white p-1 focus:outline-none"
           >
             {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
           </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-neutral-950 border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden flex flex-col gap-4"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={cn("text-lg font-medium p-2", pathname === "/" && "text-[#aff0e6]")}>Home</Link>

              <MobileAccordion title="What We Do">
                  <div className="flex flex-col gap-4 pl-4 border-l border-white/10 ml-2 mt-2">
                    <MobileLink href="/solutions/software" icon={<Code2 className="w-4 h-4 text-blue-500"/>}>Software Solutions</MobileLink>
                    <MobileLink href="/solutions/point" icon={<Target className="w-4 h-4 text-red-500"/>}>Point Solutions</MobileLink>
                    <MobileLink href="/solutions/websites" icon={<Layout className="w-4 h-4 text-green-500"/>}>Websites</MobileLink>
                    <MobileLink href="/solutions/mobile-apps" icon={<Smartphone className="w-4 h-4 text-purple-500"/>}>Mobile Apps</MobileLink>
                    <MobileLink href="/solutions/ai" icon={<Bot className="w-4 h-4 text-cyan-500"/>}>AI Solutions</MobileLink>
                  </div>
              </MobileAccordion>

              <MobileAccordion title="Our Products">
                  <div className="flex flex-col gap-4 pl-4 border-l border-white/10 ml-2 mt-2">
                      <MobileLink href="/products/kodegraphy" icon={<Camera className="w-4 h-4 text-fuchsia-500"/>}>Kodegraphy</MobileLink>
                      <MobileLink href="/products/codeleads" icon={<BarChart3 className="w-4 h-4 text-emerald-500"/>}>CodeLeads CRM</MobileLink>
                      <MobileLink href="/products/kodemagnet-lms" icon={<BookOpen className="w-4 h-4 text-indigo-500"/>}>CodeMagnet LMS</MobileLink>
                      <MobileLink href="/products/kodechat" icon={<MessageCircle className="w-4 h-4 text-rose-500"/>}>KodeChat</MobileLink>
                  </div>
              </MobileAccordion>

              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={cn("text-lg font-medium p-2", pathname === "/about" && "text-[#aff0e6]")}>About Us</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={cn("text-lg font-medium p-2", pathname === "/contact" && "text-[#aff0e6]")}>Contact Us</Link>
              <Link href="/learn" onClick={() => setMobileMenuOpen(false)} className="mt-2 text-center w-full py-3 rounded-xl bg-[#aff0e6] text-black font-bold">Learn From Us</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// --- Custom Product Card for Menu ---
const ProductCard = ({ title, desc, href, icon }: { title: string, desc: string, href: string, icon: React.ReactNode }) => {
  return (
    <Link href={href} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="text-white font-bold text-sm mb-1 group-hover:text-[#aff0e6] transition-colors">{title}</h4>
        <p className="text-neutral-500 text-xs leading-tight">{desc}</p>
      </div>
    </Link>
  )
}

// --- Helper Components ---

const MobileAccordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between text-lg font-medium text-white p-2 hover:text-[#aff0e6]">
        {title}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
           <ChevronDown className="w-5 h-5 text-neutral-400" />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
             {children}
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileLink = ({ href, children, icon }: { href: string, children: React.ReactNode, icon?: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={cn("text-sm transition-colors flex items-center gap-3", isActive ? "text-[#aff0e6] font-medium" : "text-neutral-400 hover:text-white")}>
      {icon}
      {children}
    </Link>
  )
}

// --- Icons ---
const MenuIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>)
const CloseIcon = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>)

export default NavbarDemo;
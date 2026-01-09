"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus, IconArrowRight } from "@tabler/icons-react";
import { NavbarDemo } from "@/app/components-main/Navbar";
// Import Spline (ensure you run: npm install @splinetool/react-spline @splinetool/runtime)
import Spline from '@splinetool/react-spline';

export default function PointSolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#aff0e6] selection:text-black">
      {/* Navbar Wrapper */}
      <div className="relative w-full flex items-center justify-center">
         <NavbarDemo />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-40 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Point <span className="text-[#aff0e6]">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Specific problems require specific expertise. We deploy targeted squads to solve critical bottlenecks in your software lifecycle.
          </motion.p>
        </div>
      </section>

      {/* --- SPLIT CONTENT SECTION --- */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* LEFT SIDE: FAQ / Accordion Solutions */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col gap-4"
          >
            <div className="mb-8">
               <h2 className="text-2xl font-bold text-white mb-2">Targeted Expertise</h2>
               <p className="text-neutral-500 text-sm">Select a domain to see how we intervene.</p>
            </div>

            <AccordionItem 
              title="DevOps & Infrastructure Audit" 
              number="01"
              isOpen={true} // Open by default
            >
              <p>We analyze your CI/CD pipelines and cloud architecture. Our team identifies bottlenecks, security gaps, and cost inefficiencies, implementing automated workflows that reduce deployment time by up to 60%.</p>
            </AccordionItem>

            <AccordionItem title="UI/UX & Accessibility Review" number="02">
              <p>A comprehensive audit of your user interface against WCAG standards and modern design principles. We provide a detailed remediation roadmap to ensure your product is usable, accessible, and compliant.</p>
            </AccordionItem>

            <AccordionItem title="Legacy Code Refactoring" number="03">
              <p>Don't rewrite from scratch. We modernize critical modules of your legacy monolith, wrapping them in modern APIs or refactoring them into microservices to improve maintainability without business disruption.</p>
            </AccordionItem>

            <AccordionItem title="Performance Optimization" number="04">
              <p>Slow apps lose users. We deep-dive into database queries, frontend bundle sizes, and server response times to shave off milliseconds that turn into millions in revenue.</p>
            </AccordionItem>

            <AccordionItem title="QA Automation Setup" number="05">
              <p>We build robust end-to-end testing frameworks (Cypress/Playwright) that sit alongside your development, catching bugs before they hit production and ensuring regression safety.</p>
            </AccordionItem>

          </motion.div>

          {/* RIGHT SIDE: Robot Animation */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-neutral-900/20 border border-white/10 shadow-[0_0_50px_rgba(175,240,230,0.05)]"
          >
             {/* 1. Install Spline: npm install @splinetool/react-spline @splinetool/runtime
                2. Replace the 'scene' prop below with your specific Robot Animation URL from Spline.design 
             */}
             <div className="absolute inset-0 w-full h-full">
                {/* Placeholder for the Robot Scene */}
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
                
                {/* Fallback Overlay (in case Spline takes time to load) */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
             </div>

             {/* Aesthetic Details around the frame */}
             <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
             </div>
             <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-[#aff0e6]/20 text-[#aff0e6] text-xs font-mono">
                System Status: ONLINE
             </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}

// --- ACCORDION COMPONENT ---

const AccordionItem = ({ title, children, number, isOpen: defaultOpen = false }: { title: string, children: React.ReactNode, number: string, isOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 group text-left focus:outline-none"
      >
        <div className="flex items-center gap-6">
          <span className={`font-mono text-sm ${isOpen ? 'text-[#aff0e6]' : 'text-neutral-600'} transition-colors duration-300`}>
            {number}
          </span>
          <span className={`text-xl font-medium ${isOpen ? 'text-white' : 'text-neutral-400'} group-hover:text-white transition-colors duration-300`}>
            {title}
          </span>
        </div>
        <div className={`p-2 rounded-full border ${isOpen ? 'border-[#aff0e6] text-[#aff0e6]' : 'border-white/10 text-white'} transition-all duration-300`}>
           {isOpen ? <IconMinus className="w-4 h-4" /> : <IconPlus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-12 pr-4 pb-8 text-neutral-400 leading-relaxed text-sm md:text-base border-l border-[#aff0e6]/20 ml-3">
              {children}
              <div className="mt-4 flex items-center gap-2 text-[#aff0e6] text-xs font-bold uppercase tracking-wider cursor-pointer hover:underline">
                Explore Solution <IconArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
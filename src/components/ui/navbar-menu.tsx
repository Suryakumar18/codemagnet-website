"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm font-medium text-white hover:text-[#aff0e6] transition-colors"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4">
              <motion.div
                transition={{ type: "spring", duration: 0.5 }}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-xl shadow-black/50 backdrop-blur-sm"
              >
                <motion.div
                  layout
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-8 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <Link href={href} className="flex space-x-4 group block p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
      <div>
        <h4 className="mb-1 text-lg font-bold text-white group-hover:text-[#aff0e6] transition-colors">
          {title}
        </h4>
        <p className="max-w-[14rem] text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-300 hover:text-[#aff0e6] transition-colors block py-1"
    >
      {children}
    </Link>
  );
};
"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
  logo,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  logo?: {
    src?: string;
    text?: string;
    link?: string;
  };
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Split nav items for desktop centered layout
  const midPoint = Math.ceil(navItems.length / 2);
  const leftItems = navItems.slice(0, midPoint);
  const rightItems = navItems.slice(midPoint);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "fixed z-[5000] top-4 inset-x-0 mx-auto max-w-fit",
            className
          )}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center w-full max-w-7xl mx-auto px-6 gap-4">
            {/* Logo in Left Corner */}
            {logo && (
              <Link
                href={logo.link || "/"}
                className="flex items-center justify-center w-32 h-12 rounded-xl border border-white/10 shadow-lg backdrop-blur-md bg-black/80 hover:bg-white/5 transition-all duration-200 flex-shrink-0"
              >
                {logo.src && (
                  <Image
                    src={logo.src}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                )}
                {logo.text && (
                  <span className="text-white font-semibold text-lg">
                    {logo.text}
                  </span>
                )}
              </Link>
            )}

            {/* Navigation Items - Each in uniform long box */}
            <div className="flex items-center gap-4 flex-1 justify-center">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  className="relative text-neutral-300 hover:text-white items-center flex justify-center w-32 h-12 rounded-xl border border-white/10 shadow-lg backdrop-blur-md bg-black/80 transition-all duration-200 hover:bg-white/10"
                >
                  <span className="text-sm font-medium">
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between w-screen px-4 py-3 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md bg-black/80 mx-4">
            {/* Logo */}
            {logo && (
              <Link
                href={logo.link || "/"}
                className="flex items-center"
              >
                {logo.src && (
                  <Image
                    src={logo.src}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                )}
                {logo.text && (
                  <span className="text-white font-semibold text-lg ml-2">
                    {logo.text}
                  </span>
                )}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4999] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 space-y-2">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={idx}
                    href={navItem.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-neutral-300 hover:text-white px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200"
                  >
                    {navItem.icon && (
                      <span className="text-lg">{navItem.icon}</span>
                    )}
                    <span className="text-base font-medium">{navItem.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
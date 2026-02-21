import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

interface PolicyLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  children: ReactNode;
}

export function PolicyLayout({ title, description, heroImage, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F1F8F4]">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden">
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/95 via-[#2E7D32]/90 to-[#1F5620]/95" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-36 h-36 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Content */}
        <div className="relative h-full app-container flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 sm:mb-6 group text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"
              fill="white"
              opacity="0.1"
            />
            <path
              d="M0,70 Q360,30 720,70 T1440,70 L1440,100 L0,100 Z"
              fill="#F1F8F4"
            />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-white">
        <div className="app-container py-8 sm:py-12 md:py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-5xl mx-auto px-4 sm:px-6"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl sm:shadow-[#2E7D32]/10 overflow-hidden border border-gray-200">
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 lg:p-16">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
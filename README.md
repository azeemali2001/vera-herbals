# VERA - Premium Moringa Powder B2B Landing Page

A modern, premium B2B landing page for VERA Moringa Powder built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Extract the project files** to a folder on your computer

2. **Open Terminal/Command Prompt** in the project folder

3. **Install dependencies:**
   ```bash
   npm install
   ```
   Or if you're using yarn:
   ```bash
   yarn install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

5. **Open your browser** and visit:
   ```
   http://localhost:5173
   ```

## 📦 Project Structure

```
vera-moringa-landing/
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── Navigation.tsx         # Top navigation bar
│   ├── HeroSection.tsx        # Hero section
│   ├── AboutSection.tsx       # About VERA section
│   ├── ProductFeatures.tsx    # Product features section
│   ├── WhyChooseSection.tsx   # Why choose section
│   ├── IndustriesSection.tsx  # Industries section
│   ├── QualitySection.tsx     # Quality & compliance section
│   ├── CTASection.tsx         # Call-to-action section
│   ├── ContactForm.tsx        # Contact form
│   └── Footer.tsx             # Footer
├── styles/
│   └── globals.css            # Global styles and Tailwind config
├── App.tsx                    # Main app component
├── main.tsx                   # App entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.ts             # Vite configuration
└── tsconfig.json              # TypeScript configuration
```

## 🛠️ Build Commands

- **Development:** `npm run dev` - Start development server
- **Build:** `npm run build` - Build for production
- **Preview:** `npm run preview` - Preview production build locally

## 🎨 Features

- ✅ Fully responsive design (Desktop, Tablet, Mobile)
- ✅ Smooth scroll navigation
- ✅ Glassmorphism effects
- ✅ Motion animations
- ✅ Contact form with validation
- ✅ Premium B2B design
- ✅ SEO-friendly structure

## 🌐 Sections

1. **Navigation** - Sticky top nav with smooth scroll
2. **Hero** - Eye-catching hero with trust indicators
3. **About VERA** - Brand story and values
4. **Features** - Product features and highlights
5. **Why Choose** - B2B value proposition
6. **Industries** - Target industries and use cases
7. **Quality** - Certifications and quality process
8. **CTA** - Call-to-action section
9. **Contact** - Contact form for B2B enquiries
10. **Footer** - Company information

## 📝 Customization

### Update Company Information
Edit the following files to add your actual company details:
- `components/ContactForm.tsx` - Update email, phone, location
- `components/Footer.tsx` - Update footer contact details

### Change Colors
All colors are defined in `styles/globals.css` using CSS variables. You can easily customize the color scheme there.

### Modify Content
Each section is a separate component in the `components/` folder. Edit the content directly in each component file.

## 🤝 Support

For any issues or questions, please contact the development team.

## 📄 License

© 2026 VERA. All rights reserved.

# 🚀 VERA Moringa Website - Local Setup Guide

## Step-by-Step Installation Instructions

### Option 1: Using This Figma Make Project

Since you're viewing this in Figma Make, you can download the entire project:

1. **Look for the download/export option** in the Figma Make interface (usually in the top-right corner)
2. **Download the project** as a ZIP file
3. **Extract the ZIP file** to your desired location on your computer
4. **Continue to "Running the Project" section below**

---

### Option 2: Manual Setup (If downloading doesn't work)

#### Step 1: Install Node.js

1. Go to https://nodejs.org/
2. Download the **LTS version** (recommended for most users)
3. Install Node.js by following the installer instructions
4. Verify installation by opening Terminal/Command Prompt and typing:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers if installed correctly.

#### Step 2: Create Project Folder

1. Create a new folder on your computer called `vera-moringa-website`
2. Open this folder

#### Step 3: Copy All Files

You need to copy all the project files from Figma Make to your local folder. The file structure should look like this:

```
vera-moringa-website/
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   ├── sonner.tsx
│   │   └── ... (all other UI components)
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProductFeatures.tsx
│   ├── WhyChooseSection.tsx
│   ├── IndustriesSection.tsx
│   ├── QualitySection.tsx
│   ├── CTASection.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css
├── App.tsx
├── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── README.md
└── .gitignore
```

---

## 🏃 Running the Project

Once you have all files in place:

### For Windows Users:

1. **Open Command Prompt or PowerShell:**
   - Press `Windows Key + R`
   - Type `cmd` and press Enter
   - Navigate to your project folder:
     ```bash
     cd C:\path\to\vera-moringa-website
     ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   Wait for all packages to download (this may take 2-5 minutes)

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Open Browser:**
   - Open your browser (Chrome, Firefox, Edge, etc.)
   - Go to: `http://localhost:5173`

### For Mac/Linux Users:

1. **Open Terminal:**
   - Press `Cmd + Space`
   - Type "Terminal" and press Enter
   - Navigate to your project folder:
     ```bash
     cd /path/to/vera-moringa-website
     ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   Wait for all packages to download (this may take 2-5 minutes)

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Open Browser:**
   - Open your browser (Safari, Chrome, Firefox, etc.)
   - Go to: `http://localhost:5173`

---

## ✅ Verification

If everything is set up correctly, you should see:

1. In Terminal: "Local: http://localhost:5173"
2. In Browser: The VERA Moringa landing page with green colors and smooth animations

---

## 🛑 Troubleshooting

### Problem: "npm is not recognized"
**Solution:** Node.js is not installed properly. Reinstall Node.js from https://nodejs.org/

### Problem: Port 5173 is already in use
**Solution:** 
- Close any other applications using port 5173
- Or edit `vite.config.ts` and add:
  ```typescript
  server: {
    port: 3000, // Use different port
  }
  ```

### Problem: Module not found errors
**Solution:** 
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

### Problem: TypeScript errors
**Solution:** These are usually warnings and won't stop the app from running. The website should still work in your browser.

---

## 📦 Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for hosting.

---

## 🎨 Customization Tips

### Change Contact Information:
- Edit `components/ContactForm.tsx` (lines with email and phone)
- Edit `components/Footer.tsx` (footer contact details)

### Change Colors:
- Edit `styles/globals.css` (CSS variables section)

### Change Content:
- Each section is in its own file in `components/` folder
- Edit the text directly in each component

### Add Images:
- All images are from Unsplash currently
- To use your own images, add them to a `public/images` folder
- Reference them as `/images/your-image.jpg` in the code

---

## 📞 Need Help?

If you encounter any issues:

1. Make sure Node.js version is 18 or higher: `node --version`
2. Make sure all files are copied correctly
3. Delete `node_modules` folder and run `npm install` again
4. Check that you're in the correct folder in Terminal/Command Prompt

---

## 🎉 Success!

You should now have the VERA Moringa website running on your local system at `http://localhost:5173`

Enjoy customizing your premium B2B landing page! 🌿

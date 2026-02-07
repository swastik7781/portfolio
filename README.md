# Swastik Bhardwaj - Portfolio (Vite Version)

High-performance portfolio built with Vite + React for smooth, lag-free animations.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd portfolio-vite
npm install
```

### 2. Add Your Profile Photo

Copy your profile photo to the `public` folder and name it `profile.jpg`:

```bash
copy "path\to\your\photo.jpg" "public\profile.jpg"
```

### 3. Configure EmailJS

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone number
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (swastikbhardwaj457@gmail.com)

4. Copy `.env.example` to `.env.local`:
   ```bash
   copy .env.example .env.local
   ```

5. Update `.env.local` with your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

### 4. Run Development Server

**Easy way (just double-click):**
- Double-click `start.bat` in the portfolio-vite folder

**Or use command line:**
```cmd
cd c:\Users\swast\OneDrive\Desktop\PORTFOLIO\portfolio-vite
npm run dev
```

The site will open at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## ✨ Features

- ⚡ **Lightning Fast** - Vite for instant HMR and optimized builds
- 🎨 **Smooth Animations** - Framer Motion, GSAP, and Three.js
- 📧 **Working Contact Form** - EmailJS integration with phone field
- 🖼️ **Animated Profile Photo** - Glowing, pulsing effects in Hero section
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎭 **Interactive Effects** - Custom cursor, particles, liquid waves
- 🌙 **Theme Toggle** - Dark/Light mode support

## 📦 Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber
- **Email**: EmailJS
- **Language**: TypeScript

## 🎯 Performance Improvements

Compared to the Next.js version:
- ✅ Faster initial load time
- ✅ Instant Hot Module Replacement (HMR)
- ✅ Smaller bundle size with code splitting
- ✅ Smoother animations (60 FPS target)
- ✅ Optimized asset loading

## 📝 Notes

- Make sure to add your profile photo before running
- Configure EmailJS credentials for the contact form to work
- All animations are optimized for performance

## 🔧 Troubleshooting

**Contact form not sending emails?**
- Check your `.env.local` file has correct EmailJS credentials
- Verify your EmailJS template has all required variables
- Check browser console for errors

**Profile photo not showing?**
- Ensure the photo is named exactly `profile.jpg` in the `public` folder
- Try refreshing the page with Ctrl+F5

**Animations laggy?**
- Check if hardware acceleration is enabled in your browser
- Close other resource-intensive applications

## 📄 License

© 2024 Swastik Bhardwaj. All rights reserved.

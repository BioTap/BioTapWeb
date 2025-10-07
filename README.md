# 🏦 BioTap - The Future of Biometric Banking

A modern, responsive landing page for BioTap, a revolutionary fintech platform that enables seamless payments through biometric authentication. Built with Next.js 15, React 19, and TypeScript.

## ✨ Features

### 🎯 **Core Functionality**
- **Biometric Authentication** - Secure payments using fingerprint, face, or voice
- **Adaptive Security** - AI-powered fraud detection and prevention
- **Smart Payments** - Intelligent payment processing and management
- **Cross-Border Banking** - Global identity verification and transactions

### 🚀 **Technical Features**
- **Modern Stack** - Next.js 15 + React 19 + TypeScript
- **Responsive Design** - Mobile-first approach with Bootstrap 5
- **Advanced Animations** - Scroll animations, typewriter effects, and 3D transforms
- **Glass Morphism** - Modern UI with backdrop blur effects
- **Email Integration** - Beta signup with email notifications
- **Performance Optimized** - Fast loading and smooth interactions

### 🎨 **UI/UX Highlights**
- **Interactive Hero Section** - Typewriter effect with rotating messages
- **Beta Signup System** - Real-time user count and email collection
- **Feature Showcase** - 3D cards with hover effects and animations
- **Roadmap Timeline** - Equal-height cards with smooth transitions
- **About Section** - Floating animations and interactive elements
- **Security Badges** - Trust indicators and feature highlights

## 🛠️ **Tech Stack**

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: CSS3 + Bootstrap 5
- **Email**: Nodemailer
- **Animations**: Custom CSS + React transitions
- **Icons**: Font Awesome
- **Forms**: React Hook Form + Yup validation

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/biotap-landing.git
   cd biotap-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 **Email Configuration**

The project includes a beta signup system that sends emails to `contact@bio-tap.com`. To enable this:

1. **Gmail Setup** (Recommended):
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in `.env.local`

2. **Other Email Providers**:
   - Update `SMTP_HOST` and `SMTP_PORT` in `.env.local`
   - Use appropriate authentication credentials

## 🎨 **Customization**

### **Colors & Branding**
- Primary colors are defined in CSS variables
- Update `--tg-primary-color` in `src/assets/css/style.css`
- Replace logo in `src/assets/img/logo/logo.png`

### **Content Updates**
- **Hero messages**: Edit `heroTexts` in `src/component/homes/home-one/Hero.tsx`
- **Features**: Update `biotap_features` in `src/component/homes/home-one/ChooseArea.tsx`
- **Roadmap**: Modify `road_map_data` in `src/data/RoadMapData.ts`
- **About section**: Edit `intro_data` in `src/component/homes/home-one/IntroArea.tsx`

### **Email Settings**
- **Recipient**: Change `contact@bio-tap.com` in `src/ui/BetaSignupCard.tsx`
- **Email template**: Modify `src/app/api/send-beta-email/route.ts`

## 📱 **Responsive Design**

The landing page is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 **Deployment**

### **Vercel** (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### **Other Platforms**
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS Amplify**: Build settings for Next.js
- **DigitalOcean**: Use App Platform with Node.js

## 📄 **Project Structure**

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   └── (pages)/           # Page components
├── assets/                # Static assets
│   ├── css/              # Stylesheets
│   ├── img/              # Images
│   └── js/               # JavaScript files
├── component/             # React components
│   ├── homes/            # Homepage sections
│   ├── layouts/          # Layout components
│   └── forms/            # Form components
├── data/                 # Data files
├── hooks/                # Custom React hooks
├── ui/                   # UI components
└── styles/               # Global styles
```

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 **Contact**

- **Email**: contact@bio-tap.com
- **Website**: [BioTap Landing Page](https://bio-tap.com)

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Next.js team for the amazing framework
- React team for the powerful UI library
- Bootstrap team for the responsive CSS framework
- Font Awesome for the beautiful icons

---

**Built with ❤️ for the future of biometric banking**

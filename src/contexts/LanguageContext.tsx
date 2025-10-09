"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.roadmap': 'RoadMap',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Hero Section
    'hero.title': 'Secure Biometric Payment Solutions',
    'hero.subtitle': 'Revolutionizing digital banking through advanced biometric authentication',
    'hero.description': 'BioTap is a next-generation fintech platform redefining how people access, manage, and secure their money.',
    'hero.text1': 'Banking reimagined for the digital age.',
    'hero.text2': 'Your identity is your key to secure financial freedom.',
    'hero.text3': 'The future of banking is here — powered by biometrics.',
    'hero.cta': 'Get Started',
    'hero.learn_more': 'Read More',
    
    // Intro Section
    'intro.who_we_are': 'Who We Are',
    'intro.who_we_are_desc': 'BioTap is a <span class="highlight-word">next-generation fintech platform</span> redefining how people access, manage, and secure their money. We merge biometric authentication with intelligent banking systems to create a payment experience that\'s faster, safer, and more personal.',
    'intro.what_we_do': 'What We Do',
    'intro.what_we_do_desc': 'We enable users to pay, transfer, and authenticate using nothing but their <span class="highlight-word">unique identity</span> — fingerprints, face, or voice. Our goal is to eliminate passwords and fraud, making transactions as effortless as a tap.',
    'intro.why_it_matters': 'Why It Matters',
    'intro.why_it_matters_desc': 'In an era of digital threats, <span class="highlight-word">trust is currency</span>. BioTap bridges security and simplicity, empowering individuals and businesses to transact confidently anywhere, anytime.',
    
    // Features
    'features.title': 'Why Choose BioTap',
    'features.main_description': 'BioTap isn\'t just another banking app — it\'s a <span class="highlight-text">secure, intelligent, and human-centered</span> financial experience.',
    'features.elaboration': 'We combine <span class="interactive-term" data-tooltip="Your unique biometric signature for authentication">biometric identity</span>, <span class="interactive-term" data-tooltip="AI-powered automation for seamless transactions">smart automation</span>, and <span class="interactive-term" data-tooltip="Real-time monitoring and protection">real-time protection</span> to give you control, speed, and confidence in every transaction.',
    'features.callout': '3 Exclusive BioTap Features Other Banks Don\'t Offer',
    'features.biometric.title': 'Identity-Driven Payments',
    'features.biometric.desc': 'Forget passwords and PINs — BioTap uses your unique biometrics (fingerprint, face, or voice) to authorize every payment instantly. No cards, no codes — just you.',
    'features.ai.title': 'Adaptive Fraud Shield',
    'features.ai.desc': 'BioTap\'s AI-powered fraud detection learns from your transaction behavior in real time. It automatically flags anomalies and locks down suspicious activity before it happens — not after.',
    'features.global.title': 'Seamless Cross-Border Identity Banking',
    'features.global.desc': 'With BioTap, your identity works anywhere in the world. Access your account, verify payments, and authenticate transfers globally — without the hassle of traditional verification barriers.',
    
    // Slogan
    'slogan.pay': 'Pay With a Touch',
    'slogan.bankless': 'Bankless.',
    'slogan.tapmore': 'Tapmore.',
    'slogan.livesmarter': 'Livesmarter.',
    
    // Footer
    'footer.about': 'BioTap is a cutting-edge biometric payment technology company at the forefront of innovation in secure digital banking.',
    'footer.newsletter': 'Sign up with your email address to receive news and updates about BioTap\'s latest developments',
    'footer.copyright': 'Copyright © 2025 BioTap. All rights reserved.',
    
    // Countdown
    'countdown.days': 'DAYS',
    'countdown.hours': 'HOURS',
    'countdown.mins': 'MINS',
    'countdown.secs': 'SECS',
    
    // Beta Section
    'beta.launch_date': 'Launch date',
    'beta.users': 'Beta Users',
    'beta.description': 'Join our beta program and be the first to experience BioTap!',
    'beta.security': 'Adaptive Security',
    'beta.payments': 'Smart Payments',
    'beta.identity': 'Biometric Identity',
    'beta.email_placeholder': 'Enter your email address',
    'beta.adding': 'Adding...',
    'beta.joined': 'Joined!',
    'beta.join': 'Join Beta',
    
    // Common
    'common.email_placeholder': 'biotap@mail.com',
    'common.subscribe': 'Subscribe',
    'common.get_started': 'Get Started',
    'common.learn_more': 'Learn More',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.roadmap': 'Feuille de Route',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.register': 'S\'inscrire',
    
    // Hero Section
    'hero.title': 'Solutions de Paiement Biométrique Sécurisées',
    'hero.subtitle': 'Révolutionner la banque numérique grâce à l\'authentification biométrique avancée',
    'hero.description': 'BioTap est une plateforme fintech de nouvelle génération qui redéfinit la façon dont les gens accèdent, gèrent et sécurisent leur argent.',
    'hero.text1': 'La banque réinventée pour l\'ère numérique.',
    'hero.text2': 'Votre identité est votre clé vers la liberté financière sécurisée.',
    'hero.text3': 'L\'avenir de la banque est là — alimenté par la biométrie.',
    'hero.cta': 'Commencer',
    'hero.learn_more': 'Lire Plus',
    
    // Intro Section
    'intro.who_we_are': 'Qui Nous Sommes',
    'intro.who_we_are_desc': 'BioTap est une <span class="highlight-word">plateforme fintech de nouvelle génération</span> qui redéfinit la façon dont les gens accèdent, gèrent et sécurisent leur argent. Nous fusionnons l\'authentification biométrique avec des systèmes bancaires intelligents pour créer une expérience de paiement plus rapide, plus sûre et plus personnelle.',
    'intro.what_we_do': 'Ce Que Nous Faisons',
    'intro.what_we_do_desc': 'Nous permettons aux utilisateurs de payer, transférer et s\'authentifier en utilisant uniquement leur <span class="highlight-word">identité unique</span> — empreintes digitales, visage ou voix. Notre objectif est d\'éliminer les mots de passe et la fraude, rendant les transactions aussi simples qu\'un tap.',
    'intro.why_it_matters': 'Pourquoi C\'est Important',
    'intro.why_it_matters_desc': 'À une époque de menaces numériques, la <span class="highlight-word">confiance est une monnaie</span>. BioTap fait le pont entre sécurité et simplicité, permettant aux particuliers et aux entreprises de transiger en toute confiance, partout et à tout moment.',
    
    // Features
    'features.title': 'Pourquoi Choisir BioTap',
    'features.main_description': 'BioTap n\'est pas juste une autre application bancaire — c\'est une expérience financière <span class="highlight-text">sécurisée, intelligente et centrée sur l\'humain</span>.',
    'features.elaboration': 'Nous combinons <span class="interactive-term" data-tooltip="Votre signature biométrique unique pour l\'authentification">l\'identité biométrique</span>, <span class="interactive-term" data-tooltip="L\'automatisation alimentée par l\'IA pour des transactions fluides">l\'automatisation intelligente</span>, et <span class="interactive-term" data-tooltip="Surveillance et protection en temps réel">la protection en temps réel</span> pour vous donner contrôle, rapidité et confiance dans chaque transaction.',
    'features.callout': '3 Fonctionnalités Exclusives BioTap Que Les Autres Banques N\'Offrent Pas',
    'features.biometric.title': 'Paiements Basés sur l\'Identité',
    'features.biometric.desc': 'Oubliez les mots de passe et codes PIN — BioTap utilise vos biométries uniques (empreinte, visage ou voix) pour autoriser chaque paiement instantanément. Pas de cartes, pas de codes — juste vous.',
    'features.ai.title': 'Bouclier Anti-Fraude Adaptatif',
    'features.ai.desc': 'La détection de fraude alimentée par l\'IA de BioTap apprend de votre comportement de transaction en temps réel. Elle signale automatiquement les anomalies et bloque les activités suspectes avant qu\'elles ne se produisent — pas après.',
    'features.global.title': 'Banque d\'Identité Transfrontalière Transparente',
    'features.global.desc': 'Avec BioTap, votre identité fonctionne partout dans le monde. Accédez à votre compte, vérifiez les paiements et authentifiez les transferts globalement — sans les tracas des barrières de vérification traditionnelles.',
    
    // Slogan
    'slogan.pay': 'Payez D\'un Toucher',
    'slogan.bankless': 'Sans Banque.',
    'slogan.tapmore': 'Touchez Plus.',
    'slogan.livesmarter': 'Vivez Plus Intelligemment.',
    
    // Footer
    'footer.about': 'BioTap est une entreprise de technologie de paiement biométrique de pointe à l\'avant-garde de l\'innovation dans la banque numérique sécurisée.',
    'footer.newsletter': 'Inscrivez-vous avec votre adresse e-mail pour recevoir des nouvelles et des mises à jour sur les derniers développements de BioTap',
    'footer.copyright': 'Copyright © 2025 BioTap. Tous droits réservés.',
    
    // Countdown
    'countdown.days': 'JOURS',
    'countdown.hours': 'HEURES',
    'countdown.mins': 'MINS',
    'countdown.secs': 'SECS',
    
    // Beta Section
    'beta.launch_date': 'Date de lancement',
    'beta.users': 'Utilisateurs Beta',
    'beta.description': 'Rejoignez notre programme beta et soyez les premiers à découvrir BioTap !',
    'beta.security': 'Sécurité Adaptative',
    'beta.payments': 'Paiements Intelligents',
    'beta.identity': 'Identité Biométrique',
    'beta.email_placeholder': 'Entrez votre adresse e-mail',
    'beta.adding': 'Ajout en cours...',
    'beta.joined': 'Rejoint !',
    'beta.join': 'Rejoindre Beta',
    
    // Common
    'common.email_placeholder': 'biotap@mail.com',
    'common.subscribe': 'S\'abonner',
    'common.get_started': 'Commencer',
    'common.learn_more': 'En savoir plus',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.roadmap': '路线图',
    'nav.blog': '博客',
    'nav.contact': '联系我们',
    'nav.login': '登录',
    'nav.register': '注册',
    
    // Hero Section
    'hero.title': '安全生物识别支付解决方案',
    'hero.subtitle': '通过先进的生物识别认证革新数字银行',
    'hero.description': 'BioTap是下一代金融科技平台，重新定义人们获取、管理和保护资金的方式。',
    'hero.text1': '为数字时代重新构想的银行业。',
    'hero.text2': '您的身份是您获得安全财务自由的关键。',
    'hero.text3': '银行业的未来就在这里——由生物识别技术驱动。',
    'hero.cta': '开始使用',
    'hero.learn_more': '阅读更多',
    
    // Intro Section
    'intro.who_we_are': '我们是谁',
    'intro.who_we_are_desc': 'BioTap是一个<span class="highlight-word">下一代金融科技平台</span>，重新定义人们获取、管理和保护资金的方式。我们将生物识别认证与智能银行系统相结合，创造更快、更安全、更个性化的支付体验。',
    'intro.what_we_do': '我们做什么',
    'intro.what_we_do_desc': '我们让用户仅使用他们的<span class="highlight-word">独特身份</span>——指纹、面部或声音——来支付、转账和验证。我们的目标是消除密码和欺诈，让交易变得像轻触一样简单。',
    'intro.why_it_matters': '为什么重要',
    'intro.why_it_matters_desc': '在数字威胁的时代，<span class="highlight-word">信任就是货币</span>。BioTap连接安全与简单，让个人和企业能够随时随地自信地进行交易。',
    
    // Features
    'features.title': '为什么选择BioTap',
    'features.main_description': 'BioTap不仅仅是另一个银行应用——它是一个<span class="highlight-text">安全、智能且以人为本</span>的金融体验。',
    'features.elaboration': '我们结合<span class="interactive-term" data-tooltip="您独特的生物识别签名用于身份验证">生物识别身份</span>、<span class="interactive-term" data-tooltip="AI驱动的自动化实现无缝交易">智能自动化</span>和<span class="interactive-term" data-tooltip="实时监控和保护">实时保护</span>，让您在每笔交易中获得控制、速度和信心。',
    'features.callout': '3个其他银行不提供的独家BioTap功能',
    'features.biometric.title': '身份驱动支付',
    'features.biometric.desc': '忘记密码和PIN码——BioTap使用您独特的生物识别技术（指纹、面部或声音）即时授权每笔支付。无需卡片，无需代码——只需您自己。',
    'features.ai.title': '自适应欺诈防护',
    'features.ai.desc': 'BioTap的AI驱动欺诈检测实时学习您的交易行为。它自动标记异常并在可疑活动发生之前锁定——而不是之后。',
    'features.global.title': '无缝跨境身份银行',
    'features.global.desc': '使用BioTap，您的身份在全球任何地方都有效。访问您的账户、验证支付并在全球范围内进行身份验证——无需传统验证障碍的麻烦。',
    
    // Slogan
    'slogan.pay': '一触即付',
    'slogan.bankless': '无银行。',
    'slogan.tapmore': '轻触更多。',
    'slogan.livesmarter': '生活更智能。',
    
    // Footer
    'footer.about': 'BioTap是一家尖端的生物识别支付技术公司，在安全数字银行创新领域处于前沿。',
    'footer.newsletter': '使用您的电子邮件地址注册，接收有关BioTap最新发展的新闻和更新',
    'footer.copyright': '版权所有 © 2025 BioTap。保留所有权利。',
    
    // Countdown
    'countdown.days': '天',
    'countdown.hours': '小时',
    'countdown.mins': '分钟',
    'countdown.secs': '秒',
    
    // Beta Section
    'beta.launch_date': '发布日期',
    'beta.users': '测试用户',
    'beta.description': '加入我们的测试计划，成为第一批体验BioTap的用户！',
    'beta.security': '自适应安全',
    'beta.payments': '智能支付',
    'beta.identity': '生物识别身份',
    'beta.email_placeholder': '输入您的电子邮件地址',
    'beta.adding': '添加中...',
    'beta.joined': '已加入！',
    'beta.join': '加入测试',
    
    // Common
    'common.email_placeholder': 'biotap@mail.com',
    'common.subscribe': '订阅',
    'common.get_started': '开始使用',
    'common.learn_more': '了解更多',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('biotap-language') as Language;
    if (savedLanguage && ['en', 'fr', 'zh'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage when it changes
    localStorage.setItem('biotap-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

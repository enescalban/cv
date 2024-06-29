import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Enes ÇALBAN",
  initials: "BJ",
  location: "Kocaeli, Turkey",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Back-End Developer & Web Application Security",
  summary:
    "Siber güvenlik alanında kariyerime başladım ve özellikle web uygulama güvenliği üzerine odaklandım. Daha sonra web geliştirme alanına geçiş yaparak backend geliştirme pozisyonunda ilerledim. Özellikle sunucu güvenliği konfigürasyonlarına büyük ilgi gösterdim ve ihtiyaçlarım doğrultusunda scriptler yazarak kendimi bu alanlarda geliştirdim. SQL Injection, Command Injection, XSS,  CSRF  gibi yaygın web açıklarına hakimiyet.Bu açıkları tespit etme ve önleme. Mantık tabanlı saldırılar geliştirme ve bunlara karşı savunma stratejileri konusunda deneyim. Siber istihbarat toplama. Önemli bulguları derleme ve analiz etme yeteneği. Dark Web'de bilgi toplama ve gizli verilerin keşfi konusunda yetenek.",
  avatarUrl: "https://avatars.githubusercontent.com/u/45120208?s=400&u=c6bf630220fe81a292c3898d4a3f6b55cc604063&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "enescalban448@gmail.com",
    tel: "+905364804530",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/enescalban",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/enescalban/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Bandırma Onyedi Eylül Üniversitesi",
      degree: "Bilgisayar Programcılığı",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Bizim Internet",
      link: "https://merkez.biziminternet.com.tr/",
      badges: [""],
      title: "Back-End Developer",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description:
        "NodeJs & NestJS ile API geliştirme, SOAP servisleri entegrasyonu ve PHP ile sistem iyileştirmeleri,güncellemeleri",
    },
    {
      company: "BEAM Teknoloji",
      link: "https://www.beamteknoloji.com/tr/",
      badges: [""],
      title: "Penetration Tester & Intern",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Red Team & CTI",
    },
    {
      company: "Yedi Kıtada Haber",
      link: "https://clevertech.biz",
      badges: [""],
      title: "IT Specialist",
      logo: ClevertechLogo,
      start: "2020",
      end: "2024",
      description:
        "Gönüllü olarak görev aldığım haber ajansında yazılım ekibine teknik destek sağladım. Görevim, yazılım tarafında bakım işlemlerini gerçekleştirmek, yeni modüller eklemek ve güvenlik önlemlerini optimize etmekti. Veritabanı yönetimi, API entegrasyonları ve sunucu konfigürasyonları gibi teknik detaylara odaklandım. Bu süreçte edindiğim deneyimlerle, sistem performansını artırmak adına çeşitli optimizasyonlar da gerçekleştirdim.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PHP",
    "Phpmyadmin",
    "RESTful API",
    "SOAP",
    "WordPress",
    "Joomla",
    "Proxmox",
    "Bootstrap",
    "Css",
    "SIEM",
    "Wazuh",
    "Graylog",
    "Git",
    "MySql",
    "CTI",
    "Apache",
    "Nginx",
  ],
  projects: [
    {
      title: "Webcam-Motion-Detection-and-Auto-Lock",
      techStack: [
        "Python",
      ],
      description:
        "bilgisayarınız için basit bir güvenlik çözümü sağlayan bir Python projesidir. Web kameranızı kullanarak hareketi algılar ve belirli bir süre boyunca hareket algılanmazsa bilgisayarınızı otomatik olarak kilitler.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/enescalban/Webcam-Motion-Detection-and-Auto-Lock",
      },
    },
    {
      title: "Python Port Scanner",
      techStack: [
        "Python",
      ],
      description:
        "Açık portlar için hedef IP adresini tarayan basit bir port tarayıcısıdır. Hedef IP'deki 1'den 65.535'e kadar her porta bağlantı kurmaya çalışmak için soket kitaplığını kullanır. Bağlantının başarılı olması portun açık olduğunu gösterir.",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://github.com/enescalban/python-port-scanner",
      },
    },
    {
      title: "RESTful API and SOAP Integration",
      techStack: [
        "SOAP",
        "RESTful API",
        "PHP",
      ],
      description: "Türktelekom SOAP ve RESTful Entegrasyonları",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;

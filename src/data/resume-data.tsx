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

  ],
} as const;

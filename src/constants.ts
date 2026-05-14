/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Education, Certification, Badge, DigitalCertificate } from './types';

export const RESUME_URL = "https://drive.google.com/file/d/1P8rX0R01Ts9grJtmnyM2OUnSWdS0A-Hr/view?usp=sharing";
import edulmsImage from './images/edulms.png';
import edulms2 from './images/edulms2.png';
import edulms3 from './images/edulms3.png';
import edulms4 from './images/edulms4.png';
import edulms5 from './images/edulms5.png';
import fintrackImage from './images/fintrack.png';
import fintrack2 from './images/fintrack2.png';
import fintrack3 from './images/fintrack3.png';
import fintrack4 from './images/fintrack4.png';
import fintrack5 from './images/fintrack5.png';
import fuelintelImage from './images/fuelintel.png';
import fuelintel2 from './images/fuelintel2.png';
import fuelintel3 from './images/fuelintel3.png';
import fuelintel4 from './images/fuelintel4.png';
import fuelintel5 from './images/fuelintel5.png';
import MirayaImage from './images/miraya.png';
import miraya2 from './images/miraya2.png';
import miraya3 from './images/miraya3.png';
import miraya4 from './images/miraya4.png';
import miraya5 from './images/miraya5.png';
import maxmangoImage from './images/maxmango.png';
import maxmango2 from './images/maxmango2.png';
import maxmango3 from './images/maxmango3.png';
import maxmango4 from './images/maxmango4.png';
import maxmango5 from './images/maxmango5.png';
import dataAnalyticsBadge from './images/data-analytics-essentials-badge.png';
import cybersecurityBadge from './images/introduction-to-cybersecurity-badge.png';
import networkingBadge from './images/networking-basics-badge.png';
import dataScienceBadge from './images/introduction-to-data-science-badge.png';
import courseraPlayItSafe from './images/Coursera_PlayItSafe_Certificate.jpg';
import courseraConnectProtect from './images/Coursera_ConnectAndProtect_Certificate.jpg';
import courseraToolsTrade from './images/Coursera_ToolsOfTheTrade_Certificate.jpg';
import courseraAssetThreats from './images/Coursera_AssetThreatsVulnerabilities_Certificate.jpg';
import ciscoDataAnalyticsCert from './images/Cisco_DataAnalyticsEssentials_Certificate.jpg';
import ciscoCyberSecurityCert from './images/Cisco_IntrotoCyberSecurity_Certificate.jpg';
import ciscoNetworkingCert from './images/Cisco_NetworkingBasics_Certificate.jpg';
import ciscoDataScienceCert from './images/Cisco_IntrotoDataScience_Certificate.jpg';
import openItCert from './images/OpenIT_Certificate.jpg';
import policeOperationSystemImage from './images/police.png';
import police2 from './images/police2.png';
import police3 from './images/police3.png';
import police4 from './images/police4.png';
import police5 from './images/police5.png';

export const PROJECTS: Project[] = [
  {
    id: 'edulms',
    title: 'SHC EduLMS',
    description: 'SHC EduLMS (Sacred Heart College Education LMS) is a high-performance, professional-grade Learning Management System engineered with a modern full-stack architecture. It delivers a seamless and secure digital classroom experience.',
    category: 'EDUCATION',
    tags: ['FULL-STACK', 'WEB APPLICATION'],
    imageUrl: edulmsImage,
    images: [edulmsImage, edulms2, edulms3, edulms4, edulms5],
    links: { view: 'https://shc-edulms.vercel.app/', github: 'https://github.com/sam-1008/SHC_EduLMS' }
  },
  {
    id: 'fintrack',
    title: 'FinTrack',
    description: 'FinTrack is a modern, web-based personal finance application built with Python and Flask. It features a premium Bento-grid interface, allowing users to effortlessly track expenses, manage category balances, and visualize their financial data in real-time.',
    category: 'MOBILE',
    tags: ['INTUITIVE UI', 'MOBILE APP'],
    imageUrl: fintrackImage,
    images: [fintrackImage, fintrack2, fintrack3, fintrack4, fintrack5],
    links: { view: '#', github: 'https://github.com/sam-1008/budget-tracker' }
  },
  {
    id: 'fuelintel',
    title: 'Fuel-Intel',
    description: 'Fuel-Intel is a high-performance, web-based analytical dashboard designed to track, aggregate, and visualize global fuel price dynamics. Built with a focus on speed and visual excellence, the platform transforms complex energy datasets into actionable insights through an interactive, premium interface.',
    category: 'BACKEND',
    tags: ['ANALYTICAL DASHBOARD', 'WEB-BASED'],
    imageUrl: fuelintelImage,
    images: [fuelintelImage, fuelintel2, fuelintel3, fuelintel4, fuelintel5],
    links: { view: '#', github: 'https://github.com/sam-1008/Fuel-Intel' }
  },
  {
    id: 'miraya',
    title: 'Miraya',
    description: 'Miraya is a promotional landing page for a modern-day, three-level community shopping center located at the heart of Lucena City Central Business District. This web project serves as a digital storefront to showcase the property\'s architectural excellence, premium amenities, and available commercial spaces.',
    category: 'PROMOTIONAL WEBSITE',
    tags: ['LANDING PAGE'],
    imageUrl: MirayaImage,
    images: [MirayaImage, miraya2, miraya3, miraya4, miraya5],
    links: { view: '#', github: 'https://github.com/sam-1008/Miraya' }
  },
  {
    id: 'maxmango',
    title: 'Max Mango Gumaca',
    description: 'A responsive front-end promotional website for Max Mango Gumaca, a local shop specializing in fresh, high-quality mango smoothies and delicious fruit beverages. Built with HTML, CSS, JavaScript, and Swiper.js.',
    category: 'PROMOTIONAL WEBSITE',
    tags: ['LANDING PAGE'],
    imageUrl: maxmangoImage,
    images: [maxmangoImage, maxmango2, maxmango3, maxmango4, maxmango5],
    links: { view: '#', github: 'https://github.com/sam-1008/MaxMangoGumaca' }
  },
  {
    id: 'police',
    title: 'Police Operation System',
    description: 'A Windows-based Police Operations Management System built in C# .NET, featuring officer login, case management, charge tracking, and dashboard reporting with SQL database integration.',
    category: 'DESKTOP APPLICATION',
    tags: ['WINDOWS DESKTOP APPLICATION'],
    imageUrl: policeOperationSystemImage,
    images: [policeOperationSystemImage, police2, police3, police4, police5],
    links: { view: '#', github: 'https://github.com/sam-1008/PoliceOperationSystem' }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'MAX MANGO GUMACA',
    role: 'Graphic Designer / Social Media Manager',
    period: 'September - December 2024',
    location: 'REMOTE / GUMACA, QUEZON',
    description: [
      'Created visually compelling graphics for social media posts, promotions, and marketing materials.',
      'Managed social media accounts, including content scheduling, posting, and community engagement.',
      'Collaborated with the marketing team to develop and execute promotional campaigns.'
    ],
    tags: ['GRAPHIC DESIGN', 'SOCIAL MEDIA MANAGE'],
    current: true
  },
  {
    id: '2',
    company: 'MARIEL WAREHOUSE CONSTRUCTION PROJECT',
    role: 'Warehouse Clerk / Timekeeper',
    period: 'January - December 2022',
    location: 'ONSITE / GUMACA, QUEZON',
    description: [
      'Managed and organized inventory records at construction field, applying data analysis and comprehension to ensure accurate tracking of stock levels, material flow, and consumable usage.',
      'Monitored workers\' daily attendance and computed total working hours using problem-solving and attention to detail to avoid discrepancies.',
      'Prepared and updated daily reports, demonstrating clear communication and data visualization skills when presenting information to supervisors.'
    ],
    tags: ['OPERATIONS', 'LOGISTICS', 'TIMEKEEPING']
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Sacred Heart College of Lucena City Inc.',
    year: '2023 - 2027'
  },
  {
    id: '2',
    degree: 'STEM - Senior High School',
    institution: 'Gumaca National High School',
    year: '2020 - 2022'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    issuer: 'GOOGLE',
    name: 'Play It Safe: Manage Security Risks Certificate'
  },
  {
    id: '2',
    issuer: 'GOOGLE',
    name: 'Connect and Protect: Netwoks & Network Security Certificate'
  },
  {
    id: '3',
    issuer: 'GOOGLE',
    name: 'Tools of the Trade: Linux & SQL Certificate'
  },
  {
    id: '4',
    issuer: 'GOOGLE',
    name: 'Assets, Threats, and Vulnerabilities Certificate'
  },
  {
    id: '5',
    issuer: 'CISCO',
    name: 'Cisco Data Analytics Essentials'
  },
  {
    id: '6',
    issuer: 'CISCO',
    name: 'Cisco Introduction to Cybersecurity'
  },
  {
    id: '7',
    issuer: 'CISO',
    name: 'Cisco Networking Basics'
  },
  {
    id: '8',
    issuer: 'CISO',
    name: 'Cisco Introduction to Data Science'
  },
  {
    id: '9',
    issuer: 'Open iT',
    name: 'Certificate of Achievement in Sales Presentation Competition'
  }
];

export const BADGES: Badge[] = [
  {
    id: '1',
    name: 'Cisco Data Analytics Essentials',
    imageUrl: dataAnalyticsBadge
  },
  {
    id: '2',
    name: 'Cisco Introduction to Cybersecurity',
    imageUrl: cybersecurityBadge
  },
  {
    id: '3',
    name: 'Cisco Networking Basics',
    imageUrl: networkingBadge
  },
  {
    id: '4',
    name: 'Cisco Introduction to Data Science',
    imageUrl: dataScienceBadge
  }
];

export const DIGITAL_CERTIFICATES: DigitalCertificate[] = [
  {
    id: '1',
    name: 'Play It Safe: Manage Security Risks',
    issuer: 'COURSERA - GOOGLE',
    imageUrl: courseraPlayItSafe
  },
  {
    id: '2',
    name: 'Connect and Protect: Networks & Network Security',
    issuer: 'COURSERA - GOOGLE',
    imageUrl: courseraConnectProtect
  },
  {
    id: '3',
    name: 'Tools of the Trade: Linux & SQL',
    issuer: 'COURSERA - GOOGLE',
    imageUrl: courseraToolsTrade
  },
  {
    id: '4',
    name: 'Assets, Threats, and Vulnerabilities',
    issuer: 'COURSERA - GOOGLE',
    imageUrl: courseraAssetThreats
  },
  {
    id: '5',
    name: 'Cisco Data Analytics Essentials',
    issuer: 'CISCO',
    imageUrl: ciscoDataAnalyticsCert
  },
  {
    id: '6',
    name: 'Cisco Introduction to Cybersecurity',
    issuer: 'CISCO',
    imageUrl: ciscoCyberSecurityCert
  },
  {
    id: '7',
    name: 'Cisco Networking Basics',
    issuer: 'CISO',
    imageUrl: ciscoNetworkingCert
  },
  {
    id: '8',
    name: 'Cisco Introduction to Data Science',
    issuer: 'CISO',
    imageUrl: ciscoDataScienceCert
  },
  {
    id: '9',
    name: 'Certificate of Achievement in Sales Presentation Competition',
    issuer: 'Open iT',
    imageUrl: openItCert
  }
];

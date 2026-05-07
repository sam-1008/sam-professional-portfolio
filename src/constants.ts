/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Education, Certification, Badge, DigitalCertificate } from './types';
import edulmsImage from './images/edulms.png';
import fintrackImage from './images/fintrack.png';
import fuelintelImage from './images/fuelintel.png';
import MirayaImage from './images/miraya.png';
import maxmangoImage from './images/maxmango.png';
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

export const PROJECTS: Project[] = [
  {
    id: 'edulms',
    title: 'SHC EduLMS',
    description: 'SHC EduLMS (Sacred Heart College Education LMS) is a high-performance, professional-grade Learning Management System engineered with a modern full-stack architecture. It delivers a seamless and secure digital classroom experience.',
    category: 'EDUCATION',
    tags: ['FULL-STACK', 'WEB APPLICATION'],
    imageUrl: edulmsImage,
    links: { view: 'https://shc-edulms.vercel.app/', github: 'https://github.com/sam-1008/SHC_EduLMS' }
  },
  {
    id: 'fintrack',
    title: 'FinTrack',
    description: 'FinTrack is a modern, web-based personal finance application built with Python and Flask. It features a premium Bento-grid interface, allowing users to effortlessly track expenses, manage category balances, and visualize their financial data in real-time.',
    category: 'MOBILE',
    tags: ['INTUITIVE UI', 'MOBILE APP'],
    imageUrl: fintrackImage,
    links: { view: '#', github: 'https://github.com/sam-1008/budget-tracker' }
  },
  {
    id: 'fuelintel',
    title: 'Fuel-Intel',
    description: 'Fuel-Intel is a high-performance, web-based analytical dashboard designed to track, aggregate, and visualize global fuel price dynamics. Built with a focus on speed and visual excellence, the platform transforms complex energy datasets into actionable insights through an interactive, premium interface.',
    category: 'BACKEND',
    tags: ['ANALYTICAL DASHBOARD', 'WEB-BASED'],
    imageUrl: fuelintelImage,
    links: { view: '#', github: 'https://github.com/sam-1008/Fuel-Intel' }
  },
  {
    id: 'miraya',
    title: 'Miraya',
    description: 'Miraya is a promotional landing page for a modern-day, three-level community shopping center located at the heart of Lucena City Central Business District. This web project serves as a digital storefront to showcase the property\'s architectural excellence, premium amenities, and available commercial spaces.',
    category: 'PROMOTIONAL WEBSITE',
    tags: ['LANDING PAGE'],
    imageUrl: MirayaImage,
    links: { view: '#', github: 'https://github.com/sam-1008/Miraya' }
  },
  {
    id: 'maxmango',
    title: 'Max Mango Gumaca',
    description: 'A responsive front-end promotional website for Max Mango Gumaca, a local shop specializing in fresh, high-quality mango smoothies and delicious fruit beverages. Built with HTML, CSS, JavaScript, and Swiper.js.',
    category: 'PROMOTIONAL WEBSITE',
    tags: ['LANDING PAGE'],
    imageUrl: maxmangoImage,
    links: { view: '#', github: 'https://github.com/sam-1008/MaxMangoGumaca' }
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
    company: 'MARIEL WAREHOUSE PROJECT',
    role: 'Warehouse Clerk / Timekeeper',
    period: 'January - December 2022',
    location: 'ONSITE / GUMACA, QUEZON',
    description: [
      'Managed daily warehouse operations including inventory tracking, shipment coordination, and quality assurance for incoming and outgoing materials.',
      'Operated forklifts and managed pallet organization to ensure efficient storage and retrieval, contributing to a 15% faster order fulfillment rate.',
      'Maintained accurate daily attendance and punctuality records for over 50 staff members, liaising with HR to resolve discrepancies and ensure payroll accuracy.'
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

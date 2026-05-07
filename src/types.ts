/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  links?: {
    view?: string;
    github?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  id: string;
  issuer: string;
  name: string;
}

export interface Badge {
  id: string;
  name: string;
  imageUrl: string;
}

export interface DigitalCertificate {
  id: string;
  name: string;
  issuer: string;
  imageUrl: string;
}

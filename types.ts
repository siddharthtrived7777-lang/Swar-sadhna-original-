/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Course {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category: 'vocal' | 'instrument' | 'general';
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  course: string;
  mode: 'online' | 'offline' | 'any';
  additionalInfo: string;
  timestamp: string;
  status: 'new' | 'reviewed' | 'contacted';
}

export interface ContactConfig {
  email: string;
  phone1: string;
  phone2: string;
  whatsappMessage: string;
  address: string;
}

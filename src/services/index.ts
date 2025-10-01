// Service Registry - Central point for all services
// This file exports all services for easy importing and future API integration

export { packageService } from './packageService';
export { contactService } from './contactService';

// Type exports
export type {
  Package,
  UmrahPackage,
  UmrahPackageDetails,
  Consultant,
  KeyHighlight,
  Testimonial
} from './packageService';

export type {
  ContactSubmission,
  ContactFormData
} from './contactService';
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const validateContactForm = (data: ContactFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Le nom est requis';
  } else if (data.name.length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères';
  } else if (data.name.length > 50) {
    errors.name = 'Le nom ne doit pas dépasser 50 caractères';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'L\'email est requis';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'L\'email n\'est pas valide';
  }

  if (!data.subject.trim()) {
    errors.subject = 'Le sujet est requis';
  } else if (data.subject.length < 3) {
    errors.subject = 'Le sujet doit contenir au moins 3 caractères';
  } else if (data.subject.length > 100) {
    errors.subject = 'Le sujet ne doit pas dépasser 100 caractères';
  }

  if (!data.message.trim()) {
    errors.message = 'Le message est requis';
  } else if (data.message.length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  } else if (data.message.length > 1000) {
    errors.message = 'Le message ne doit pas dépasser 1000 caractères';
  }

  return errors;
}; 
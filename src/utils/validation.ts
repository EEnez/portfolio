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

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

export const sanitizeMessage = (message: string): string => {
  return message.replace(/<script[^>]*>.*?<\/script>/gi, '').replace(/javascript:/gi, '').replace(/vbscript:/gi, '').replace(/data:text\/html/gi, '').replace(/on\w+\s*=/gi, '');
};

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const isValidEmail = (email: string): boolean => {
  if (email.length > 254) return false;
  if (email.includes('..')) return false;
  if (email.startsWith('.') || email.endsWith('.')) return false;
  if (email.includes('@.') || email.includes('.@')) return false;
  
  return EMAIL_REGEX.test(email);
};

export const containsMaliciousContent = (text: string): boolean => {
  const maliciousPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /vbscript:/gi,
    /data:text\/html/gi,
    /on\w+\s*=/gi,
    /<iframe[^>]*>/gi,
    /<object[^>]*>/gi,
    /<embed[^>]*>/gi
  ];
  
  return maliciousPatterns.some(pattern => pattern.test(text));
};

export const validateContactForm = (data: ContactFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  const sanitizedData = {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    subject: sanitizeInput(data.subject),
    message: sanitizeMessage(data.message)
  };

  if (!sanitizedData.name) {
    errors.name = 'Le nom est requis';
  } else if (sanitizedData.name.length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères';
  } else if (sanitizedData.name.length > 100) {
    errors.name = 'Le nom ne doit pas dépasser 100 caractères';
  } else if (containsMaliciousContent(sanitizedData.name)) {
    errors.name = 'Le nom contient des caractères non autorisés';
  } else if (!/^[a-zA-ZÀ-ÿ\s\-']+$/.test(sanitizedData.name)) {
    errors.name = 'Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes';
  }

  if (!sanitizedData.email) {
    errors.email = 'L\'email est requis';
  } else if (!isValidEmail(sanitizedData.email)) {
    errors.email = 'L\'email n\'est pas valide';
  } else if (containsMaliciousContent(sanitizedData.email)) {
    errors.email = 'L\'email contient des caractères non autorisés';
  }

  if (!sanitizedData.subject) {
    errors.subject = 'Le sujet est requis';
  } else if (sanitizedData.subject.length < 3) {
    errors.subject = 'Le sujet doit contenir au moins 3 caractères';
  } else if (sanitizedData.subject.length > 200) {
    errors.subject = 'Le sujet ne doit pas dépasser 200 caractères';
  } else if (containsMaliciousContent(sanitizedData.subject)) {
    errors.subject = 'Le sujet contient des caractères non autorisés';
  }

  if (!sanitizedData.message) {
    errors.message = 'Le message est requis';
  } else if (sanitizedData.message.length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  } else if (sanitizedData.message.length > 2000) {
    errors.message = 'Le message ne doit pas dépasser 2000 caractères';
  } else if (containsMaliciousContent(sanitizedData.message)) {
    errors.message = 'Le message contient des caractères non autorisés';
  }

  return errors;
}; 
export default {
  jwt: {
    secretOrKey: 'gKXxpjFoSn8QPuc',
    expiresIn: 86400,
  },
  // You can also use any other email sending services
  mail: {
    service: {
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      user: 'apikey',
      pass: '__SENDGRID_API_KEY__',
    },
    senderCredentials: {
      name: '__SENDER_NAME__',
      email: '__SENDER_EMAIL__',
    },
  },
  // these are used in the mail templates
  project: {
    name: 'Attendify Backend',
    address: 'Bogor, Indonesia',
    logoUrl: 'https://__YOUR_PROJECT_LOGO_URL__',
    slogan: 'Attendify Backend',
    color: '#123456',
    socials: [
      ['GitHub', 'https://github.com/Mhmdaris15/attendify-backend'],
      ['https://www.instagram.com/mhmdaris15/', 'https://www.linkedin.com/in/muhammad-aris-septanugroho/'],
      // ['__Social_Media_2__', '__Social_Media_2_URL__'],
    ],
    url: 'http://localhost:4200',
    mailVerificationUrl: 'http://localhost:3000/auth/verify',
    mailChangeUrl: 'http://localhost:3000/auth/change-email',
    resetPasswordUrl: 'http://localhost:4200/reset-password',
    termsOfServiceUrl: 'http://localhost:4200/legal/terms',
  },
};

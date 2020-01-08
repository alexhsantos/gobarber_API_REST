export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'GoBarber <noreplay@gobarber.com>',
  },
};

// para produção Amazon SES
// para desenvolvimento Mailtrap https://mailtrap.io/

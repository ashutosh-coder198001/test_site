# Digitiq Technologies Website

A modern, responsive website for Digitiq Technologies (OPC) built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Fast performance with Vite
- 📧 Secure contact form with email integration
- 🔒 Security features (rate limiting, validation, CSRF protection)
- 🎯 SEO optimized
- ♿ Accessibility focused

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- React Router for navigation
- Vite for build tooling

### Backend
- Node.js with Express
- Nodemailer for email sending
- SendGrid SMTP integration
- Express Rate Limit for security
- Helmet for security headers
- Express Validator for input validation

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- SendGrid account (recommended) or Gmail account for SMTP

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd digitiq-technologies-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your email service in `.env`:

**Option 1: SendGrid (Recommended)**
```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
EMAIL_FROM=noreply@digitiqtechnologies.com
```

**Option 2: Gmail SMTP**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@digitiqtechnologies.com
```

### Development

Start the development servers:
```bash
npm run dev
```

This will start:
- Frontend dev server on `http://localhost:5173`
- Backend API server on `http://localhost:3001`

### Production Build

Build the frontend:
```bash
npm run build
```

Start the production server:
```bash
npm run start:server
```

## Email Configuration

### SendGrid Setup (Recommended)

1. Create a SendGrid account at https://sendgrid.com
2. Generate an API key in your SendGrid dashboard
3. Add the API key to your `.env` file
4. Verify your sender email address in SendGrid

### Gmail SMTP Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an app password for your application
3. Use your Gmail address and app password in the `.env` file

## Contact Form Features

- ✅ Real-time form validation
- ✅ Rate limiting (3 submissions per 15 minutes per IP)
- ✅ CSRF protection
- ✅ Input sanitization
- ✅ Professional email templates
- ✅ Success/error feedback
- ✅ Mobile responsive design

## Security Features

- 🔒 Helmet.js for security headers
- 🚦 Rate limiting on API endpoints
- 🛡️ Input validation and sanitization
- 🔐 CORS configuration
- 📝 Request logging
- 🚫 XSS protection

## Deployment

### Environment Variables for Production

```env
NODE_ENV=production
SENDGRID_API_KEY=your_production_sendgrid_key
EMAIL_FROM=noreply@digitiqtechnologies.com
PORT=3001
```

### Deployment Checklist

- [ ] Set up production environment variables
- [ ] Configure domain CORS settings
- [ ] Set up SSL certificate
- [ ] Configure reverse proxy (nginx/Apache)
- [ ] Set up monitoring and logging
- [ ] Test email delivery
- [ ] Verify rate limiting works
- [ ] Test form submission end-to-end

## API Endpoints

### POST /api/send-email
Sends contact form submissions via email.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com", 
  "phone": "+1234567890",
  "service": "Web Development",
  "message": "I need a website..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "email-id"
}
```

### GET /api/health
Health check endpoint for monitoring.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support, email info@digitiqtechnologies.com or call +91 98992 13865.

## License

© 2024 Digitiq Technologies (OPC). All rights reserved.
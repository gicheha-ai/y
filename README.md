# Freelance Services Portfolio Website

A professional portfolio website showcasing 50+ freelance services with quote request functionality.

## Features

- Responsive design for all devices
- 50+ service pages with detailed descriptions
- Quote request system with email notifications
- Portfolio showcase
- Client testimonials
- Modern UI/UX with smooth animations

## Setup Instructions

### Local Development

1. Install XAMPP (Windows) or MAMP (Mac)
2. Place the project folder in:
   - XAMPP: `C:\xampp\htdocs\freelance-portfolio`
   - MAMP: `Applications/MAMP/htdocs/freelance-portfolio`
3. Start Apache server from XAMPP/MAMP control panel
4. Open browser and navigate to: `http://localhost/freelance-portfolio`

### Email Configuration

The email functionality uses PHP's `mail()` function. For production:

1. On Render, ensure PHP is enabled
2. Update email settings in `send_email.php` if needed
3. Test the form submission

## Deployment to Render

1. Create a GitHub repository and push your code
2. Sign up/login to [Render](https://render.com)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure deployment:
   - **Name:** freelance-portfolio
   - **Environment:** PHP
   - **Build Command:** `echo "Build complete"`
   - **Start Command:** `php -S 0.0.0.0:$PORT`
6. Click "Create Web Service"

## File Structure
## Docker Deployment

### Local Testing with Docker
1. Install Docker Desktop from https://www.docker.com/products/docker-desktop
2. Run: `docker-compose up --build`
3. Open: http://localhost:8080

### Deploy to Render with Docker
1. Push code to GitHub
2. On Render.com, create new Web Service
3. Connect your repository
4. Render will automatically detect Dockerfile
5. Click "Create Web Service"

## Email Configuration for Production
The website uses PHP mail() function. For reliable email delivery on Render:

1. **Option A: Use SMTP** (Recommended)
   - Update `send_email.php` to use SMTP (PHPMailer recommended)
   - Add SMTP credentials as environment variables on Render

2. **Option B: Use Mailgun/SendGrid**
   - Sign up for Mailgun or SendGrid
   - Update the email sending logic
   - Add API keys as environment variables

3. **Option C: Keep current setup**
   - PHP mail() may work on Render's infrastructure
   - Monitor email delivery in your inbox
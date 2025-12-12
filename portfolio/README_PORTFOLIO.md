# Kayeen Campana's Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React, TypeScript, and Tailwind CSS.

## Features

✨ **Dynamic Greeting** - Shows "Good Morning", "Good Afternoon", or "Good Evening" based on the user's local time

🎨 **Modern Design** - Clean, professional design with smooth animations and hover effects

📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)

🚀 **Fast Performance** - Built with Next.js for optimal performance and SEO

## Sections Included

1. **Header Navigation** - Fixed header with smooth scroll navigation
2. **Hero Section** - Eye-catching introduction with dynamic greeting
3. **Services** - Showcase of services provided
4. **About Me** - Personal introduction and background
5. **Favorite Tools & Stacks** - Technologies and frameworks you work with
6. **Projects** - Latest projects with descriptions and links
7. **Academic Journey** - Timeline of your educational and professional path
8. **Pricing Model** - Three-tier pricing structure
9. **Blogs** - Articles and blog posts
10. **Client Reviews** - Testimonials with interactive carousel
11. **Contact Section** - Contact form with social links
12. **FAQ** - Frequently asked questions with accordion
13. **Footer** - Complete footer with "Let's Connect" CTA

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

The project is already set up! Navigate to the portfolio directory:

\`\`\`bash
cd portfolio
\`\`\`

### Development

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Customization Guide

### Personal Information

1. **Update Hero Section** ([components/HeroSection.tsx](components/HeroSection.tsx))
   - Change your name from "Kayeen Campana" to your actual name
   - Update the description text
   - Add your social media links

2. **Update Contact Information** ([components/ContactSection.tsx](components/ContactSection.tsx))
   - Change email address
   - Update phone number
   - Modify location

3. **Update About Me** ([components/AboutSection.tsx](components/AboutSection.tsx))
   - Customize your story
   - Update statistics (projects, clients, etc.)

### Content

4. **Services** ([components/ServicesSection.tsx](components/ServicesSection.tsx))
   - Modify or add services you provide

5. **Projects** ([components/ProjectsSection.tsx](components/ProjectsSection.tsx))
   - Replace with your actual projects
   - Add real GitHub links and live demo URLs
   - Update project images/icons

6. **Tools & Stacks** ([components/ToolsSection.tsx](components/ToolsSection.tsx))
   - Update to match your tech stack

7. **Blogs** ([components/BlogsSection.tsx](components/BlogsSection.tsx))
   - Add your actual blog posts
   - Link to your blog platform

8. **Reviews** ([components/ReviewsSection.tsx](components/ReviewsSection.tsx))
   - Add real client testimonials
   - Update statistics

### Styling

All components use Tailwind CSS. To customize colors:

1. Edit [tailwind.config.ts](tailwind.config.ts) for global theme changes
2. Update color classes in individual components

### Metadata

Update SEO information in [app/layout.tsx](app/layout.tsx):
- Page title
- Description
- Open Graph tags (for social media sharing)

## Project Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (imports all sections)
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero with dynamic greeting
│   ├── ServicesSection.tsx # Services showcase
│   ├── AboutSection.tsx    # About me section
│   ├── ToolsSection.tsx    # Tools & stacks
│   ├── ProjectsSection.tsx # Projects gallery
│   ├── JourneyPricingSection.tsx # Timeline & pricing
│   ├── BlogsSection.tsx    # Blog posts
│   ├── ReviewsSection.tsx  # Client testimonials
│   ├── ContactSection.tsx  # Contact form
│   ├── FAQSection.tsx      # FAQ accordion
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets
└── package.json
\`\`\`

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji & SVG
- **Fonts**: Geist Sans & Geist Mono

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Tips

1. **Add Real Images**: Replace emoji icons with actual project screenshots
2. **Connect Form**: Integrate the contact form with an email service (EmailJS, Formspree, etc.)
3. **Add Analytics**: Integrate Google Analytics or Vercel Analytics
4. **SEO**: Add proper meta tags for better search engine visibility
5. **Performance**: Optimize images using Next.js Image component

## Support

For issues or questions:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## License

This portfolio template is free to use and customize for your personal portfolio.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

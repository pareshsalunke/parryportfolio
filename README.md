# PM Portfolio Website

A modern, professional portfolio website built with Next.js for showcasing your Product Management work, case studies, and resume.

## Features

- **Hero Section**: Eye-catching introduction
- **Case Studies**: Detailed project showcases with metrics
- **Resume Section**: Embedded resume with career progression
- **Contact Form**: Easy way for opportunities to reach you
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js, TypeScript, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 20.9.0+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # Reusable components
│   ├── Navigation.tsx
│   └── ProjectCard.tsx
└── data/            # Content and configuration
    └── portfolio.ts  # Case studies and resume data
```

## Customization

### Adding Your Resume Data

Edit `src/data/portfolio.ts` to add your:

- Professional summary
- Work experience
- Education
- Skills

### Adding Case Studies

Add entries to the `caseStudies` array in `src/data/portfolio.ts` with:

- Challenge faced
- Your approach and methodology
- Results and metrics achieved
- Relevant tags and dates

### Styling

Customize colors and theme in `tailwind.config.ts`

## Deployment

Deploy easily to Vercel, Netlify, or any hosting platform that supports Next.js.

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

## Technologies Used

- **Next.js 15+**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **ESLint**: Code quality

## Releases

See [CHANGELOG.md](./CHANGELOG.md) for the full release history.

## License

MIT License - feel free to use this template for your portfolio

## Support

For issues or questions, please create an issue in the repository.

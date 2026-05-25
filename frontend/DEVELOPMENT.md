# Frontend Development Notes

## Component Structure

### Pages
- **HomePage** - Landing page with hero and features
- **DashboardPage** - README generator form
- **EditorPage** - Markdown editor with live preview
- **HistoryPage** - Generated READMEs history

### Components
- **Navbar** - Navigation header
- **ReadmeEditor** - Split-screen editor

## API Integration

All API calls go through `src/api/client.js`:
- `generateReadme()` - POST /api/generate
- `analyzeRepository()` - POST /api/analyze-repo
- `generateResumeDescription()` - POST /api/resume-description
- `downloadReadme()` - GET /api/download

## Styling

- Tailwind CSS for utility styling
- Custom glassmorphism effect in `index.css`
- Dark theme with gradient accents
- Animations with Framer Motion

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Environment Setup

Create `frontend/.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
```

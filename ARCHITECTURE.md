# DevDoc AI - Architecture & Development Guide

## 🏗️ Architecture Overview

```
┌─────────────────┐         ┌──────────────────┐
│   React+Vite    │         │  Python Flask    │
│   Frontend      │◄───────►│  Backend API     │
│   (Port 5173)   │  HTTP   │  (Port 5000)     │
└─────────────────┘         └──────────────────┘
        │                            │
        │                    ┌───────┼────────┐
        │                    │       │        │
    Tailwind CSS      GitHub API  OpenAI  Gemini API
    React Router         API       API      API
    Framer Motion    GitPython   Integration
    React Markdown
```

## 📊 Data Flow

### Generate README Flow
```
1. User fills form in Dashboard
   ↓
2. Frontend calls POST /api/generate
   ↓
3. Backend AI Generator creates prompt
   ↓
4. AI API (OpenAI/Gemini) generates content
   ↓
5. Markdown returned to frontend
   ↓
6. EditorPage displays with live preview
   ↓
7. User edits and downloads
```

### Analyze Repository Flow
```
1. User enters GitHub URL
   ↓
2. Frontend calls POST /api/analyze-repo
   ↓
3. Backend clones repo to temp directory
   ↓
4. GitHubAnalyzer scans:
   - Languages & extensions
   - package.json / requirements.txt
   - Framework detection
   - Dependency extraction
   ↓
5. Metadata returned to frontend
   ↓
6. Form auto-populated with project details
   ↓
7. Temp directory cleaned up
```

## 🔄 Component Hierarchy

```
App.jsx (Router setup)
├── Navbar (Navigation)
├── HomePage
│   ├── Hero Section
│   ├── Features Grid
│   └── CTA Button
├── DashboardPage
│   ├── Form Inputs
│   ├── Template Selector
│   ├── GitHub URL Input
│   └── Generate Button
├── EditorPage
│   ├── ReadmeEditor
│   │   ├── Textarea (Editor)
│   │   ├── Copy Button
│   │   ├── Download Button
│   │   └── Preview (ReactMarkdown)
│   └── Live Preview
└── HistoryPage
    └── README History List
```

## 🛠️ Service Architecture

### Frontend Services (`src/api/client.js`)
```javascript
APIClient (Axios instance)
├── generateReadme(data)           → POST /api/generate
├── analyzeRepository(url)         → POST /api/analyze-repo
├── generateResumeDescription(data) → POST /api/resume-description
└── downloadReadme(content)        → GET /api/download
```

### Backend Services

#### AIGenerator (`services/ai_generator.py`)
```python
class AIGenerator:
├── __init__()                          # Initialize with API keys
├── generate_readme(project_data)       # Generate professional README
├── generate_resume_description(data)   # Generate resume bullet point
├── _build_readme_prompt(project_data)  # Create AI prompt
├── _generate_with_openai(prompt)       # Use OpenAI API
├── _generate_with_gemini(prompt)       # Use Gemini API
└── _generate_template_readme(data)     # Fallback template
```

#### GitHubAnalyzer (`services/github_analyzer.py`)
```python
class GitHubAnalyzer:
├── clone_repo(github_url)                    # Clone to temp directory
├── analyze_project_structure(repo_path)      # Extract metadata
├── _detect_language(repo_path)               # Identify main language
├── _detect_framework(repo_path)              # Find frameworks
├── _extract_dependencies(repo_path)          # Parse dependencies
├── _extract_scripts(repo_path)               # Get build scripts
└── cleanup(repo_path)                        # Remove temp files
```

## 🗂️ File Organization

### Frontend Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation
│   │   └── ReadmeEditor.jsx    # Editor component
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── DashboardPage.jsx   # Generator form
│   │   ├── EditorPage.jsx      # Editor page
│   │   └── HistoryPage.jsx     # History view
│   ├── api/
│   │   └── client.js           # API client
│   ├── hooks/                  # Custom hooks (expandable)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js             # Vite config
├── tailwind.config.js         # Tailwind config
└── postcss.config.js          # PostCSS config
```

### Backend Structure
```
backend/
├── routes/
│   └── api.py                 # All API endpoints
├── services/
│   ├── ai_generator.py        # AI logic
│   └── github_analyzer.py     # GitHub logic
├── utils/                     # Utility functions (expandable)
├── app.py                     # Flask app factory
├── config.py                  # Configuration
├── requirements.txt           # Python dependencies
├── .env.example              # Environment template
└── .gitignore                # Git ignore rules
```

## 🔗 API Reference

### POST /api/generate
**Generate README from project details**

Request:
```json
{
  "project_name": "DevDoc AI",
  "description": "AI-powered README generator",
  "tech_stack": ["React", "Flask", "OpenAI"],
  "github_url": "https://github.com/user/repo",
  "template": "open-source"
}
```

Response:
```json
{
  "success": true,
  "readme": "# DevDoc AI\n\n..."
}
```

### POST /api/analyze-repo
**Analyze GitHub repository**

Request:
```json
{
  "github_url": "https://github.com/user/repo"
}
```

Response:
```json
{
  "success": true,
  "project_name": "repo",
  "language": "Python",
  "framework": ["Flask"],
  "dependencies": ["flask", "requests"],
  "tech_stack": ["Python", "Flask"],
  "description": "",
  "scripts": {}
}
```

### POST /api/resume-description
**Generate resume description**

Request:
```json
{
  "project_name": "DevDoc AI",
  "description": "AI-powered README generator",
  "tech_stack": ["React", "Flask", "OpenAI"]
}
```

Response:
```json
{
  "success": true,
  "description": "Built an AI-powered README generator..."
}
```

### GET /api/download
**Download README file**

Query: `?content=markdown_content`

Response: README.md file

## 🎨 Styling System

### Tailwind CSS Classes Used
- `glass-effect` - Glassmorphism effect
- `bg-gradient-to-r` - Gradient backgrounds
- `text-indigo-500` - Primary color
- `text-purple-500` - Secondary color
- `hover:shadow-lg` - Hover effects
- `transition` - Smooth transitions
- `animate-spin` - Loading animation

### Color Palette
```
Primary:   #6366f1 (Indigo)
Secondary: #8b5cf6 (Purple)
Accent:    #ec4899 (Pink)
Dark BG:   #0f172a (Slate-900)
```

## 🚀 Deployment Checklist

### Frontend (Vercel)
- [ ] Build: `npm run build`
- [ ] Set environment variables
- [ ] Connect GitHub repo to Vercel
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `dist`

### Backend (Render/Railway)
- [ ] Create `.env` with API keys
- [ ] Set start command: `python app.py`
- [ ] Configure environment variables
- [ ] Deploy from GitHub

## 🔒 Security Considerations

- **API Keys**: Store in `.env`, never commit
- **CORS**: Configured for development, restrict in production
- **Input Validation**: Add server-side validation
- **Rate Limiting**: Consider adding to API
- **Error Handling**: Don't expose sensitive info in errors
- **GitHub Token**: Use personal access token with limited scope

## 🧪 Testing Strategy

### Frontend Tests
```javascript
// Example: Component rendering
test('HomePage renders hero section', () => {
  render(<HomePage />)
  expect(screen.getByText(/AI-Powered/i)).toBeInTheDocument()
})
```

### Backend Tests
```python
# Example: API endpoint
def test_generate_readme():
    data = {
        'project_name': 'Test',
        'description': 'Test project'
    }
    response = client.post('/api/generate', json=data)
    assert response.status_code == 200
    assert 'readme' in response.json
```

## 📈 Performance Optimization

### Frontend
- Lazy load pages with React.lazy()
- Code splitting with dynamic imports
- Optimize images
- Debounce markdown preview updates
- Cache API responses

### Backend
- Cache GitHub analysis results
- Implement request rate limiting
- Optimize AI prompt length
- Use connection pooling for API calls
- Add response compression

## 🔮 Future Enhancements

### Phase 2
- [ ] User authentication (Google OAuth)
- [ ] Save/load README history
- [ ] Templates library
- [ ] Badges generator

### Phase 3
- [ ] Architecture diagram generation
- [ ] Voice input support
- [ ] Multi-language README generation
- [ ] Chrome extension

### Phase 4
- [ ] Team collaboration
- [ ] AI code documentation
- [ ] Swagger/OpenAPI generation
- [ ] ER diagram generator

## 📚 Dependencies Overview

### Frontend Critical Packages
- `react` - UI framework
- `react-router-dom` - Navigation
- `axios` - HTTP client
- `react-markdown` - Markdown rendering
- `tailwindcss` - Styling
- `framer-motion` - Animations

### Backend Critical Packages
- `flask` - Web framework
- `flask-cors` - CORS support
- `openai` - OpenAI API
- `gitpython` - Git operations
- `requests` - HTTP library

## 💡 Development Tips

1. **Hot Reload**: Both frontend and backend support auto-reload
2. **API Testing**: Use Postman/Insomnia for API testing
3. **Browser DevTools**: React DevTools extension helpful
4. **Git Workflow**: Create feature branches for new features
5. **Logging**: Add logging for debugging (especially in backend)

---

**Last Updated**: 2024
**Version**: 1.0.0

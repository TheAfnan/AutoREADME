# DevDoc AI — AI Powered README & Documentation Generator

A modern, production-grade web application that leverages artificial intelligence to automatically generate professional README files, documentation, and project guides for GitHub repositories.

## 🎯 Project Overview

**DevDoc AI** combines the power of:
- **Notion AI** for intelligent content generation
- **GitHub API** for repository analysis
- **Modern web stack** for seamless user experience
- **LLM Integration** (OpenAI/Gemini) for professional documentation

Transform your GitHub repositories into comprehensive, professional documentation in seconds.

---

## ✨ Key Features

### 1. **AI README Generation**
- Intelligent README.md generation from project details
- Contextual content based on tech stack and framework
- Professional formatting with markdown

### 2. **GitHub Repository Analyzer**
- Paste GitHub URL → Automatic project analysis
- Detects:
  - Programming language
  - Framework/dependencies
  - Project structure
  - Package scripts
  - APIs and endpoints

### 3. **Live Markdown Editor**
- Split-screen editor with real-time preview
- Syntax highlighting
- One-click copy/download
- Markdown live rendering

### 4. **Multiple README Templates**
- Open Source projects
- Portfolio projects
- API documentation
- AI/ML projects
- Hackathon submissions
- And more...

### 5. **Project Explanations**
- "Explain Like Beginner" mode
- Resume-friendly descriptions
- LinkedIn post generation
- Architecture overviews

### 6. **Advanced Features**
- 🏷️ GitHub badges generator
- 📂 Folder structure visualization
- 🚀 Deployment guides (Vercel, Render, Docker)
- 🔐 Environment variables detection
- 🌍 Multi-language support (English, Hindi, French)
- 🔗 One-click GitHub push
- ⭐ README quality scoring

---

## 🛠️ Tech Stack

### Frontend
- **React 18** + **Vite** — Fast build tool & framework
- **Tailwind CSS** — Utility-first styling
- **React Markdown** — Markdown rendering
- **Framer Motion** — Smooth animations
- **Lucide React** — Beautiful icons
- **Axios** — HTTP client

### Backend
- **Python Flask** — Lightweight web framework
- **OpenAI API / Gemini API** — AI generation
- **GitHub API** — Repository analysis
- **GitPython** — Git operations
- **Flask-CORS** — Cross-origin support

### Deployment
- **Frontend:** Vercel (recommended)
- **Backend:** Render / Railway / Docker

---

## 📁 Project Structure

```
devdoc-ai/
│
├── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route pages
│   │   ├── api/                # API client
│   │   ├── hooks/              # Custom React hooks
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                     # Flask backend
│   ├── routes/                 # API endpoints
│   │   └── api.py
│   ├── services/               # Business logic
│   │   ├── ai_generator.py     # AI generation logic
│   │   └── github_analyzer.py  # Repo analysis
│   ├── utils/                  # Utility functions
│   ├── app.py                  # Flask application
│   ├── config.py               # Configuration
│   ├── requirements.txt        # Python dependencies
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Python 3.9+
- Git

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create `.env`:
```env
FLASK_ENV=development
OPENAI_API_KEY=your_key_here
# or
GEMINI_API_KEY=your_key_here
```

```bash
python app.py
```

Backend runs on `http://localhost:5000`

---

## 📡 API Endpoints

### Generate README
```http
POST /api/generate
Content-Type: application/json

{
  "project_name": "My Project",
  "description": "Project description",
  "tech_stack": ["React", "Node.js"],
  "github_url": "https://github.com/user/repo",
  "template": "open-source"
}
```

**Response:**
```json
{
  "success": true,
  "readme": "# My Project\n\n..."
}
```

### Analyze Repository
```http
POST /api/analyze-repo
Content-Type: application/json

{
  "github_url": "https://github.com/user/repo"
}
```

**Response:**
```json
{
  "success": true,
  "project_name": "repo",
  "language": "Python",
  "framework": ["Flask"],
  "dependencies": ["flask", "requests"],
  "tech_stack": ["Python", "Flask", "PostgreSQL"]
}
```

### Generate Resume Description
```http
POST /api/resume-description
Content-Type: application/json

{
  "project_name": "My Project",
  "description": "Description",
  "tech_stack": ["React", "Node.js"]
}
```

---

## 🎨 UI Pages

### Home Page
- Hero section with value proposition
- Feature showcase
- Call-to-action button

### Dashboard
- README generation form
- GitHub URL input
- Template selector
- Tech stack input
- Project details form

### Editor Page
- Split-screen layout
- Live markdown editor
- Real-time preview
- Copy & download buttons

### History Page
- View previously generated READMEs
- Filter and search
- Manage generated documents

---

## 🔑 Key Features Deep Dive

### AI Repository Understanding
- **AST Parsing** — Analyze code structure
- **Dependency Scanning** — Extract tech stack
- **Route Detection** — Identify API endpoints
- **Architecture Analysis** — Understand project design

### README Quality Scoring
```
README Score: 92/100
├── Completeness: 95%
├── Formatting: 88%
└── Documentation Quality: 90%
```

### Multi-Language Support
- 🇬🇧 English
- 🇮🇳 Hindi
- 🇫🇷 French

### GitHub Integration
- OAuth authentication
- Direct README push to repositories
- Auto-commit functionality

---

## 📦 Libraries & Dependencies

### Frontend
```bash
npm install react react-dom axios react-markdown
npm install framer-motion lucide-react
npm install tailwindcss postcss autoprefixer
npm install -D vite @vitejs/plugin-react
```

### Backend
```bash
pip install flask flask-cors python-dotenv
pip install requests gitpython openai
pip install google-generativeai
```

---

## 🎯 MVP (Minimum Viable Product)

Core features to launch:
- [x] README generator from project details
- [x] GitHub repository analyzer
- [x] Markdown preview
- [x] Download README.md
- [x] AI generation integration

---

## 🚀 Future Enhancements

- 🤖 AI Architecture Diagram Generator
- 🎤 Voice input for project explanation
- 🧩 Chrome extension for GitHub
- 👥 Team collaboration features
- 🔍 Swagger/OpenAPI generation
- 📊 ER diagram generator
- 💬 AI chatbot for repositories
- 🎓 Code documentation generator
- 📈 README analytics & insights
- 🔄 Batch README generation

---

## 📊 Target Users

- 👨‍💻 Developers building open-source projects
- 🎓 Students and educators
- 🚀 Startup founders
- 👨‍🤝‍👨 Hackathon participants
- 💼 Freelancers and contractors
- 📚 Technical writers

---

## 🔐 Environment Variables

### Backend (.env)
```env
FLASK_ENV=development
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=AI...
SECRET_KEY=your-secret-key
GITHUB_TOKEN=ghp_...
```

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5000/api
VITE_GITHUB_CLIENT_ID=your_client_id
```

---

## 📝 Resume Description

> "Developed DevDoc AI, an AI-powered documentation generator that analyzes GitHub repositories and automatically generates professional README files using Flask, React, OpenAI API, and GitHub API integration. Features real-time markdown editing, multi-template support, and deployment guides for 5+ platforms."

---

## 📄 License

MIT License — Feel free to use and modify!

---

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a Pull Request

---

## 📧 Support

For issues, questions, or suggestions:
- Open a GitHub issue
- Email: support@devdocai.com

---

Made with ❤️ by the DevDoc AI team

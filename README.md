# AutoREADME — Intelligent README Generator for GitHub

AutoREADME is an AI-powered web application that automatically generates professional README files for GitHub repositories. Simply enter your project details or GitHub URL, and get a well-structured, production-ready README in seconds.

## 🎯 Overview

AutoREADME helps developers quickly create quality documentation by:
- **Analyzing GitHub repositories** to understand project structure and tech stack
- **Generating professional READMEs** with proper formatting and sections
- **Providing a live editor** to customize and refine the generated content
- **Supporting multiple templates** for different project types

---

## ✨ Key Features

### 1. **Smart README Generation**
- Enter project details or paste GitHub URL
- AI analyzes code and generates comprehensive README
- Professional formatting with all essential sections

### 2. **Repository Analysis**
- Automatically detect tech stack and dependencies
- Analyze project structure and purpose
- Extract package scripts and configurations

### 3. **Live Editor & Preview**
- Edit generated README in real-time
- Split-screen view with live markdown preview
- Easily copy to clipboard or download as .md file

### 4. **Template Selection**
- Choose from multiple README templates
- Each template tailored for different project types
- Easy to customize based on your needs

### 5. **Flexible Generation**
- Fill in project details manually
- Auto-detect from GitHub repositories
- Save and manage multiple generated READMEs

### 6. **Additional Features**
- Download generated README as markdown file
- Copy to clipboard for quick sharing
- History of previously generated READMEs
- Clean, intuitive user interface

---

## 🛠️ Tech Stack

### Frontend
- **React 18** + **Vite** — Modern frontend build
- **Tailwind CSS** — Responsive UI styling
- **Lucide React** — Consistent icon set
- **React Router** — Client-side routing

### Backend
- **Python Flask** — RESTful API server
- **OpenAI / Gemini API** — AI-powered text generation
- **GitHub API** — Repository information fetching
- **Flask-CORS** — Cross-origin request handling

### Deployment
- **Frontend:** Vercel (recommended)
- **Backend:** Render / Railway / Docker

---

## 📁 Project Structure

```
AutoREADME/
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
- [x] README generation from project details
- [x] GitHub repository URL analysis
- [x] Live markdown editor and preview
- [x] Download/copy generated README
- [x] Multiple templates support

---

## 🚀 Planned Features

- GitHub OAuth authentication
- Direct push to GitHub repository
- Additional README templates
- Dark mode support
- Advanced customization options

---

## � Who is this for?

- Developers working on open-source projects
- Students learning to document code
- Developers contributing to public repositories
- Anyone needing professional documentation quickly

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

> "Built AutoREADME, an AI-powered README generator that analyzes GitHub repositories and creates professional documentation. Built with React, Flask, and OpenAI API integration."

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
- Open an issue on GitHub

---

Made with ❤️ by the AutoREADME team

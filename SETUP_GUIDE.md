# DevDoc AI - Setup & Launch Guide

## 📋 Prerequisites

Before starting, ensure you have:
- **Node.js** 16+ ([Download](https://nodejs.org/))
- **Python** 3.9+ ([Download](https://www.python.org/))
- **Git** ([Download](https://git-scm.com/))
- **An API Key** from either:
  - OpenAI (for GPT-3.5-turbo)
  - Google Gemini

## 🚀 Quick Start (2 terminals)

### Terminal 1: Backend Setup

```bash
cd backend

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
# Copy contents from .env.example and add your API keys
# Windows: copy .env.example .env
# Mac/Linux: cp .env.example .env

# Edit .env with your API keys
FLASK_ENV=development
OPENAI_API_KEY=sk_...    # Get from https://platform.openai.com/api-keys
GEMINI_API_KEY=AI...     # Get from https://makersuite.google.com/

# Run backend
python app.py
```

✅ Backend runs on `http://localhost:5000`

---

### Terminal 2: Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local (optional - uses default API URL)
# VITE_API_URL=http://localhost:5000/api

# Start development server
npm run dev
```

✅ Frontend runs on `http://localhost:5173`

---

## 🎯 First Steps After Launch

1. **Go to Home Page** → `http://localhost:5173/`
2. **Click "Get Started"** → Redirects to Dashboard
3. **Try It Out:**
   - Enter project details manually, OR
   - Paste a GitHub URL (e.g., `https://github.com/facebook/react`)
   - Click "Analyze" to auto-fill details
4. **Click "Generate README"** → AI generates documentation
5. **Edit in the Editor** → Customize the markdown
6. **Download** → Save as README.md

---

## 📦 Project Structure

```
Generatorr/
├── frontend/              # React + Vite app
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Route pages
│   │   ├── api/           # API client
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── backend/               # Flask API
│   ├── routes/            # API endpoints
│   ├── services/          # Business logic
│   ├── config.py
│   ├── app.py
│   └── requirements.txt
│
├── README.md              # Main docs
└── .gitignore
```

---

## 🔧 API Endpoints

### Generate README
```bash
curl -X POST http://localhost:5000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "project_name": "My App",
    "description": "An awesome project",
    "tech_stack": ["React", "Node.js"],
    "template": "open-source"
  }'
```

### Analyze GitHub Repo
```bash
curl -X POST http://localhost:5000/api/analyze-repo \
  -H "Content-Type: application/json" \
  -d '{
    "github_url": "https://github.com/facebook/react"
  }'
```

---

## ⚙️ Configuration

### Backend (.env)
```env
FLASK_ENV=development                # development, production, testing
OPENAI_API_KEY=sk_...               # OpenAI API key
GEMINI_API_KEY=AI...                # Google Gemini API key
SECRET_KEY=your-secret-key          # Flask session secret
```

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5000/api   # Backend API URL
```

---

## 🛠️ Development Commands

### Frontend
```bash
cd frontend

npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend
```bash
cd backend

python app.py              # Run dev server with auto-reload
python -m pytest           # Run tests (if added)
pip freeze                 # Check installed packages
```

---

## 🐛 Troubleshooting

### Frontend won't connect to backend
- Ensure backend is running on `localhost:5000`
- Check CORS is enabled in `backend/app.py`
- Check `VITE_API_URL` in frontend `.env.local`

### "Module not found" errors in backend
```bash
# Activate virtual environment first
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

# Reinstall dependencies
pip install -r requirements.txt
```

### "Cannot find module" in frontend
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### API key errors
- Get OpenAI key: https://platform.openai.com/api-keys
- Get Gemini key: https://makersuite.google.com/
- Add to `.env` file in backend directory
- Restart backend after adding key

---

## 📚 Learn More

- [React Docs](https://react.dev/)
- [Flask Docs](https://flask.palletsprojects.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Docs](https://vitejs.dev/)
- [OpenAI API](https://platform.openai.com/docs/)

---

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy 'dist' folder to Vercel
```

### Backend (Render/Railway)
```bash
# Push to GitHub
git push
# Connect to Render/Railway
```

---

## 📝 Notes

- Backend must run before frontend in development
- API key is required for AI generation (falls back to template if missing)
- Generated READMEs are stored in session (use localStorage for persistence)
- GitHub analysis clones repo to temp directory (auto-cleaned)

---

**Ready to build awesome documentation?** 🎉

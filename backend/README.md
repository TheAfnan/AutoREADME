# DevDoc AI Backend

Flask-based backend for the AI README generator.

## Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Environment Variables

Create a `.env` file:

```env
FLASK_ENV=development
OPENAI_API_KEY=your_key_here
# or
GEMINI_API_KEY=your_key_here
```

## Run

```bash
python app.py
```

Server runs on `http://localhost:5000`

## API Endpoints

- `POST /api/generate` - Generate README
- `POST /api/analyze-repo` - Analyze GitHub repo
- `POST /api/resume-description` - Generate resume description
- `GET /api/download` - Download README

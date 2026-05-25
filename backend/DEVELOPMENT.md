# Backend Development Notes

## Service Architecture

### `services/ai_generator.py`
- `AIGenerator` class handles AI content generation
- Supports OpenAI (GPT-3.5-turbo) and Gemini APIs
- Falls back to template generation if APIs unavailable
- Methods:
  - `generate_readme()` - Generate README from project data
  - `generate_resume_description()` - Generate resume bullet point

### `services/github_analyzer.py`
- `GitHubAnalyzer` class analyzes GitHub repositories
- Methods:
  - `clone_repo()` - Clone repository temporarily
  - `analyze_project_structure()` - Extract project metadata
  - `_detect_language()` - Detect primary language
  - `_detect_framework()` - Identify frameworks used
  - `_extract_dependencies()` - Parse dependencies
  - `_extract_scripts()` - Extract build scripts
  - `cleanup()` - Remove temporary files

## API Routes

All routes in `routes/api.py`:
- `POST /api/generate` - Generate README
- `POST /api/analyze-repo` - Analyze GitHub repository
- `POST /api/resume-description` - Generate resume description
- `GET /api/download` - Download README file
- `GET /health` - Health check

## Configuration

- `config.py` - Environment-based configuration
- Supports: development, production, testing modes
- Uses `.env` file for sensitive data

## Development Commands

```bash
python app.py                    # Run dev server
export FLASK_ENV=development     # Set env (Linux/Mac)
set FLASK_ENV=development        # Set env (Windows)
pip install -r requirements.txt  # Install dependencies
```

## Environment Variables Required

```env
FLASK_ENV=development
OPENAI_API_KEY=sk-...           # For OpenAI integration
GEMINI_API_KEY=AI...            # For Gemini integration
SECRET_KEY=dev-secret-key       # Flask secret
```

## Adding New Features

1. **New AI Endpoint**
   - Add method to `AIGenerator` class
   - Create route in `routes/api.py`
   - Test with Postman/cURL

2. **New Analysis Feature**
   - Add method to `GitHubAnalyzer` class
   - Call from relevant API endpoint
   - Handle errors gracefully

3. **New Route**
   - Define in `routes/api.py`
   - Register blueprint in `app.py`

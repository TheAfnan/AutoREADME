# Deployment Guide for AutoREADME

Deploy your AutoREADME application to the web with Vercel (Frontend) and Render (Backend).

---

## 🚀 Frontend Deployment on Vercel

### Step 1: Create Vercel Account
- Go to https://vercel.com
- Sign up with GitHub
- Grant access to your GitHub account

### Step 2: Deploy Frontend
1. Click "Add New..." → "Project"
2. Import your AutoREADME repository
3. Select the `frontend` folder as root directory:
   - Root Directory: `frontend`
4. Click "Deploy"

### Step 3: Configure Environment Variables
In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```
3. Redeploy

**Frontend URL:** Your Vercel app URL (e.g., `autoreadme.vercel.app`)

---

## 🚀 Backend Deployment on Render

### Step 1: Create Render Account
- Go to https://render.com
- Sign up with GitHub
- Grant access to your repository

### Step 2: Deploy Backend
1. Click "New +" → "Web Service"
2. Connect to your AutoREADME repository
3. Configure:
   - **Name:** autoreadme-backend
   - **Environment:** Python 3
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
   - **Root Directory:** `backend`
4. Click "Create Web Service"

### Step 3: Configure Environment Variables
In Render dashboard:
1. Go to your service → Environment
2. Add these environment variables:
   ```
   FLASK_ENV=production
   OPENAI_API_KEY=your_openai_key_here
   ```
   (or use GEMINI_API_KEY if preferred)

### Step 4: Install Gunicorn
Update `backend/requirements.txt` to include:
```
gunicorn==21.2.0
```

**Backend URL:** Your Render app URL (e.g., `autoreadme-backend.onrender.com`)

---

## 🔗 Connect Frontend to Backend

After both are deployed:

1. **Update Frontend Environment:**
   - In Vercel → Environment Variables
   - Set: `VITE_API_URL=https://your-render-backend-url/api`

2. **Update Backend CORS:**
   - In `backend/app.py`, update CORS to allow Vercel domain:
   ```python
   CORS(app, resources={
       r"/api/*": {
           "origins": ["https://your-vercel-app.vercel.app"],
           "methods": ["GET", "POST", "OPTIONS"]
       }
   })
   ```

---

## ✅ Verification

Once deployed:

1. Open your Vercel frontend URL
2. Try the "Generate" button
3. It should connect to your Render backend
4. Test the full flow end-to-end

---

## 📝 Important Notes

- **API URL Format:** Always use `https://` (not http://)
- **Render Free Tier:** Services spin down after inactivity (~15 min) - they'll restart when accessed
- **Vercel:** No limitations on free tier for this use case
- **Keep API Key Secure:** Never commit `.env` files with real keys

---

## 🆘 Troubleshooting

**Frontend not connecting to backend:**
- Check CORS settings in `backend/app.py`
- Verify VITE_API_URL is correct
- Check browser console for errors

**Backend deployment fails:**
- Verify `backend/requirements.txt` has all dependencies
- Check that `backend/app.py` uses `app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))`
- Review Render logs for errors

**API calls timeout:**
- Render free tier may need time to spin up
- This is normal - refresh after a few seconds

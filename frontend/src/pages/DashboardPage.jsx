import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader, Github, Sparkles } from 'lucide-react'
import { generateReadme, analyzeRepository } from '../api/client'

export default function DashboardPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    project_name: '',
    description: '',
    github_url: '',
    tech_stack: '',
    template: 'open-source'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const response = await generateReadme({
        ...formData,
        tech_stack: formData.tech_stack.split(',').map(t => t.trim())
      })
      
      sessionStorage.setItem('generatedReadme', response.data.readme)
      navigate('/editor')
    } catch (error) {
      console.error('Error generating README:', error)
      alert('Failed to generate README')
    } finally {
      setLoading(false)
    }
  }

  const handleAnalyzeRepo = async () => {
    if (!formData.github_url) {
      alert('Please enter a GitHub URL')
      return
    }

    setLoading(true)
    try {
      const response = await analyzeRepository(formData.github_url)
      setFormData(prev => ({
        ...prev,
        project_name: response.data.project_name || prev.project_name,
        description: response.data.description || prev.description,
        tech_stack: response.data.tech_stack?.join(', ') || prev.tech_stack
      }))
    } catch (error) {
      console.error('Error analyzing repository:', error)
      alert('Failed to analyze repository')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Generate README</span>
          </h1>
          <p className="text-slate-400 text-lg">Enter your project details or analyze a GitHub repository</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-10 space-y-8">
          {/* GitHub URL Input */}
          <div>
            <label className="block text-sm font-bold text-slate-200 mb-3">GitHub Repository URL</label>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Github className="absolute left-4 top-3 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  name="github_url"
                  value={formData.github_url}
                  onChange={handleChange}
                  placeholder="https://github.com/username/repo"
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-700 hover:border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition text-slate-100 placeholder-slate-500"
                />
              </div>
              <button
                onClick={handleAnalyzeRepo}
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white rounded-lg font-bold transition disabled:opacity-50 shadow-lg hover:shadow-cyan-500/20"
              >
                {loading ? <Loader className="w-5 h-5 animate-spin" /> : 'Analyze'}
              </button>
            </div>
          </div>

          <div className="border-t border-slate-700/50"></div>

          {/* Project Name */}
          <div>
            <label className="block text-sm font-bold text-slate-200 mb-3">Project Name</label>
            <input
              type="text"
              name="project_name"
              value={formData.project_name}
              onChange={handleChange}
              placeholder="My Awesome Project"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 hover:border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition text-slate-100 placeholder-slate-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-slate-200 mb-3">Project Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="What does your project do? What problem does it solve?"
              rows="4"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 hover:border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition text-slate-100 placeholder-slate-500 resize-none"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-bold text-slate-200 mb-3">Tech Stack (comma-separated)</label>
            <input
              type="text"
              name="tech_stack"
              value={formData.tech_stack}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB, Docker..."
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 hover:border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition text-slate-100 placeholder-slate-500"
            />
          </div>

          {/* Template Selection */}
          <div>
            <label className="block text-sm font-bold text-slate-200 mb-3">Documentation Template</label>
            <select
              name="template"
              value={formData.template}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 hover:border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition text-slate-100"
            >
              <option value="open-source">📖 Open Source Project</option>
              <option value="portfolio">🏄 Portfolio Project</option>
              <option value="hackathon">🚀 Hackathon Project</option>
              <option value="api">🔌 API Project</option>
              <option value="ai-ml">🤖 AI/ML Project</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !formData.project_name}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-bold text-lg transition disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg hover:shadow-cyan-500/30"
          >
            {loading ? (
              <>
                <Loader className="w-6 h-6 animate-spin" />
                Generating README...
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                Generate README
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

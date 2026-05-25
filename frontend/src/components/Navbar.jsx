import { Link } from 'react-router-dom'
import { FileText, Github, Download, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [showDeployMenu, setShowDeployMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleDownload = () => {
    const content = sessionStorage.getItem('generatedReadme')
    if (!content) {
      alert('No README generated yet. Please generate one first.')
      return
    }

    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/markdown' })
    element.href = URL.createObjectURL(file)
    element.download = 'README.md'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    setShowDeployMenu(false)
  }

  const handleCopyToClipboard = () => {
    const content = sessionStorage.getItem('generatedReadme')
    if (!content) {
      alert('No README generated yet. Please generate one first.')
      return
    }

    navigator.clipboard.writeText(content).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      setShowDeployMenu(false)
    })
  }

  const handleOpenGithub = () => {
    alert('GitHub integration coming soon! You can manually push the README to your repository.')
    setShowDeployMenu(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            AutoREADME
          </span>
        </Link>
        
        <div className="flex items-center gap-10">
          <Link to="/dashboard" className="text-sm text-slate-300 hover:text-cyan-400 transition font-medium">Generate</Link>
          <Link to="/history" className="text-sm text-slate-300 hover:text-cyan-400 transition font-medium">History</Link>
          <a href="https://github.com" target="_blank" className="text-slate-400 hover:text-cyan-400 transition">
            <Github className="w-5 h-5" />
          </a>
          
          <div className="relative">
            <button 
              onClick={() => setShowDeployMenu(!showDeployMenu)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-5 py-2 rounded-lg font-medium text-sm transition shadow-lg hover:shadow-cyan-500/30">
              Deploy
            </button>
            
            {showDeployMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-900 rounded-lg shadow-xl border border-slate-700 overflow-hidden z-50">
                <button
                  onClick={handleDownload}
                  className="w-full px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download as MD
                </button>
                <button
                  onClick={handleCopyToClipboard}
                  className="w-full px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition flex items-center gap-2 border-t border-slate-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy to Clipboard
                    </>
                  )}
                </button>
                <button
                  onClick={handleOpenGithub}
                  className="w-full px-4 py-3 text-left text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition flex items-center gap-2 border-t border-slate-700"
                >
                  <Github className="w-4 h-4" />
                  Push to GitHub
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

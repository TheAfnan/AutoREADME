import { useState } from 'react'
import { Copy, Download, Check } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export default function ReadmeEditor({ content, setContent }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/markdown;charset=utf-8,' + encodeURIComponent(content))
    element.setAttribute('download', 'README.md')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="grid grid-cols-2 gap-6 h-screen bg-slate-950 p-6">
      {/* Editor */}
      <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/50 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/50">
          <h3 className="text-lg font-bold text-slate-100">Editor</h3>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                copied
                  ? 'bg-green-600/20 text-green-400'
                  : 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-slate-100'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-semibold transition shadow-lg hover:shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 p-6 bg-transparent border-0 focus:outline-none font-mono text-slate-100 placeholder-slate-600 text-sm leading-relaxed"
          placeholder="Enter or edit your README here..."
          spellCheck="false"
        />
      </div>

      {/* Preview */}
      <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/50 backdrop-blur">
        <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/50">
          <h3 className="text-lg font-bold text-slate-100">Preview</h3>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="prose prose-invert max-w-none prose-headings:text-slate-100 prose-p:text-slate-300 prose-a:text-cyan-400 prose-code:bg-slate-800/50 prose-code:text-cyan-300 prose-pre:bg-slate-800/50">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

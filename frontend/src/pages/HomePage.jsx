import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Code2, Eye } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-32 text-center">
        <div className="mb-8 inline-block">
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">✨ AI-Powered Documentation</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Professional READMEs</span>
          <br />
          <span className="text-slate-200">in Seconds</span>
        </h1>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your GitHub repositories into stunning, professional documentation using cutting-edge AI. Analyze code, generate guides, and export instantly.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-cyan-500/30"
          >
            Start Generating <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-100">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            <div className="relative">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg w-fit mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Instant Generation</h3>
              <p className="text-slate-400">Generate comprehensive READMEs in seconds using advanced AI analysis</p>
            </div>
          </div>
          
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            <div className="relative">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg w-fit mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Smart Analysis</h3>
              <p className="text-slate-400">Automatically detect tech stack, dependencies, and project structure</p>
            </div>
          </div>
          
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            <div className="relative">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg w-fit mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">Live Preview</h3>
              <p className="text-slate-400">Edit and preview your documentation in real-time with markdown support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-5xl font-black mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">History</span>
        </h1>
        <p className="text-slate-400 text-lg mb-12">Your generated READMEs and documentation projects</p>
        
        <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-12 text-center">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-slate-300 text-lg mb-2">No history yet</p>
          <p className="text-slate-400">Your generated READMEs will appear here. Start generating to see your history!</p>
        </div>
      </div>
    </div>
  )
}

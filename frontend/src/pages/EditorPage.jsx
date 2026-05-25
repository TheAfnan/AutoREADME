import { useState, useEffect } from 'react'
import ReadmeEditor from '../components/ReadmeEditor'

export default function EditorPage() {
  const [content, setContent] = useState('')

  useEffect(() => {
    const saved = sessionStorage.getItem('generatedReadme')
    if (saved) {
      setContent(saved)
    }
  }, [])

  return <ReadmeEditor content={content} setContent={setContent} />
}

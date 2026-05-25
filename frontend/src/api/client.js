import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const generateReadme = (data) => apiClient.post('/generate', data)
export const analyzeRepository = (githubUrl) => apiClient.post('/analyze-repo', { github_url: githubUrl })
export const generateResumeDescription = (data) => apiClient.post('/resume-description', data)
export const downloadReadme = (content) => apiClient.get('/download', { data: { content } })

export default apiClient

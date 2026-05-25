import os
from dotenv import load_dotenv

load_dotenv()

class AIGenerator:
    """Generate AI-powered documentation"""
    
    def __init__(self):
        self.openai_api_key = os.getenv('OPENAI_API_KEY')
        self.gemini_api_key = os.getenv('GEMINI_API_KEY')
    
    def generate_readme(self, project_data):
        """Generate README using AI"""
        try:
            prompt = self._build_readme_prompt(project_data)
            
            # Using OpenAI
            if self.openai_api_key:
                return self._generate_with_openai(prompt)
            
            # Using Gemini
            elif self.gemini_api_key:
                return self._generate_with_gemini(prompt)
            
            else:
                return self._generate_template_readme(project_data)
        
        except Exception as e:
            raise Exception(f"Failed to generate README: {str(e)}")
    
    def generate_resume_description(self, project_data):
        """Generate resume-friendly project description"""
        try:
            prompt = f"""
Generate a professional resume bullet point for this project:

Project Name: {project_data.get('project_name', '')}
Description: {project_data.get('description', '')}
Tech Stack: {', '.join(project_data.get('tech_stack', []))}

Format: 1-2 sentences, action-oriented, highlighting impact.
"""
            return self._generate_with_openai(prompt) if self.openai_api_key else ""
        except Exception as e:
            raise Exception(f"Failed to generate resume description: {str(e)}")
    
    def _build_readme_prompt(self, project_data):
        """Build prompt for README generation"""
        prompt = f"""
You are an expert technical documentation writer.

Generate a professional GitHub README in Markdown format for this project:

Project Name: {project_data.get('project_name', 'My Project')}
Description: {project_data.get('description', '')}
Tech Stack: {', '.join(project_data.get('tech_stack', []))}
Template: {project_data.get('template', 'open-source')}

Include these sections:
1. Title & Description
2. Features
3. Installation
4. Usage
5. Folder Structure
6. Tech Stack
7. Contribution Guide
8. License

Return ONLY the markdown content, no explanations.
"""
        return prompt
    
    def _generate_with_openai(self, prompt):
        """Generate using OpenAI API"""
        try:
            from openai import OpenAI
            client = OpenAI(api_key=self.openai_api_key)
            
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a technical documentation expert."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=2000
            )
            
            return response.choices[0].message.content
        except Exception as e:
            raise Exception(f"OpenAI API error: {str(e)}")
    
    def _generate_with_gemini(self, prompt):
        """Generate using Gemini API"""
        try:
            import google.generativeai as genai
            genai.configure(api_key=self.gemini_api_key)
            
            model = genai.GenerativeModel('gemini-pro')
            response = model.generate_content(prompt)
            
            return response.text
        except Exception as e:
            raise Exception(f"Gemini API error: {str(e)}")
    
    def _generate_template_readme(self, project_data):
        """Generate template README if API unavailable"""
        project_name = project_data.get('project_name', 'My Project')
        description = project_data.get('description', 'A great project')
        tech_stack = ', '.join(project_data.get('tech_stack', ['Technologies']))
        
        template = f"""# {project_name}

{description}

## 🚀 Features

- Feature 1
- Feature 2
- Feature 3

## 📦 Tech Stack

{tech_stack}

## 🛠️ Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

## 📖 Usage

```
Basic usage instructions here
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️
"""
        return template

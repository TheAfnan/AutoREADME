import os
import json
import tempfile
import shutil
import subprocess
from pathlib import Path

class GitHubAnalyzer:
    """Analyze GitHub repositories"""
    
    @staticmethod
    def clone_repo(github_url, timeout=30):
        """Clone a GitHub repository temporarily with timeout"""
        try:
            temp_dir = tempfile.mkdtemp()
            # Use subprocess with timeout instead of GitPython to handle hanging
            cmd = ['git', 'clone', '--depth', '1', github_url, temp_dir]
            subprocess.run(cmd, capture_output=True, timeout=timeout, check=True)
            return temp_dir
        except subprocess.TimeoutExpired:
            GitHubAnalyzer.cleanup(temp_dir)
            raise Exception(f"Repository clone timed out after {timeout} seconds")
        except Exception as e:
            GitHubAnalyzer.cleanup(temp_dir)
            raise Exception(f"Failed to clone repository: {str(e)}")
    
    @staticmethod
    def analyze_project_structure(repo_path):
        """Analyze project structure and extract metadata"""
        try:
            analysis = {
                'project_name': Path(repo_path).name,
                'language': GitHubAnalyzer._detect_language(repo_path),
                'framework': GitHubAnalyzer._detect_framework(repo_path),
                'dependencies': GitHubAnalyzer._extract_dependencies(repo_path),
                'scripts': GitHubAnalyzer._extract_scripts(repo_path),
                'description': '',
                'tech_stack': []
            }
            
            return analysis
        except Exception as e:
            raise Exception(f"Failed to analyze project: {str(e)}")
    
    @staticmethod
    def _detect_language(repo_path):
        """Detect primary programming language"""
        languages = {}
        extensions = {
            '.py': 'Python',
            '.js': 'JavaScript',
            '.ts': 'TypeScript',
            '.java': 'Java',
            '.go': 'Go',
            '.rs': 'Rust',
            '.rb': 'Ruby',
            '.php': 'PHP'
        }
        
        for root, dirs, files in os.walk(repo_path):
            for file in files:
                ext = Path(file).suffix
                if ext in extensions:
                    lang = extensions[ext]
                    languages[lang] = languages.get(lang, 0) + 1
        
        return max(languages, key=languages.get) if languages else 'Unknown'
    
    @staticmethod
    def _detect_framework(repo_path):
        """Detect framework from dependencies"""
        frameworks = []
        
        # Check for framework indicators
        package_json = os.path.join(repo_path, 'package.json')
        requirements_txt = os.path.join(repo_path, 'requirements.txt')
        
        if os.path.exists(package_json):
            try:
                with open(package_json, 'r') as f:
                    data = json.load(f)
                    deps = data.get('dependencies', {})
                    if 'react' in deps:
                        frameworks.append('React')
                    if 'vue' in deps:
                        frameworks.append('Vue')
                    if 'next' in deps:
                        frameworks.append('Next.js')
            except:
                pass
        
        if os.path.exists(requirements_txt):
            try:
                with open(requirements_txt, 'r') as f:
                    content = f.read()
                    if 'django' in content:
                        frameworks.append('Django')
                    if 'flask' in content:
                        frameworks.append('Flask')
            except:
                pass
        
        return frameworks
    
    @staticmethod
    def _extract_dependencies(repo_path):
        """Extract project dependencies"""
        dependencies = []
        
        # Python
        requirements_txt = os.path.join(repo_path, 'requirements.txt')
        if os.path.exists(requirements_txt):
            try:
                with open(requirements_txt, 'r') as f:
                    dependencies.extend([line.split('==')[0] for line in f.readlines() if line.strip()])
            except:
                pass
        
        # Node
        package_json = os.path.join(repo_path, 'package.json')
        if os.path.exists(package_json):
            try:
                with open(package_json, 'r') as f:
                    data = json.load(f)
                    deps = data.get('dependencies', {})
                    dependencies.extend(list(deps.keys())[:10])
            except:
                pass
        
        return dependencies[:15]
    
    @staticmethod
    def _extract_scripts(repo_path):
        """Extract npm/build scripts"""
        scripts = {}
        
        package_json = os.path.join(repo_path, 'package.json')
        if os.path.exists(package_json):
            try:
                with open(package_json, 'r') as f:
                    data = json.load(f)
                    scripts = data.get('scripts', {})
            except:
                pass
        
        return scripts
    
    @staticmethod
    def cleanup(repo_path):
        """Clean up temporary repository"""
        try:
            if repo_path and os.path.exists(repo_path):
                shutil.rmtree(repo_path)
        except Exception as e:
            print(f"Failed to cleanup: {str(e)}")

from flask import Blueprint, request, jsonify
from services.ai_generator import AIGenerator
from services.github_analyzer import GitHubAnalyzer

api_bp = Blueprint('api', __name__, url_prefix='/api')

ai_generator = AIGenerator()

@api_bp.route('/generate', methods=['POST'])
def generate_readme():
    """Generate README endpoint"""
    try:
        data = request.get_json()
        
        # Validate input
        if not data.get('project_name'):
            return jsonify({'error': 'Project name is required'}), 400
        
        # Generate README
        readme = ai_generator.generate_readme(data)
        
        return jsonify({
            'success': True,
            'readme': readme
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@api_bp.route('/analyze-repo', methods=['POST'])
def analyze_repo():
    """Analyze GitHub repository endpoint"""
    try:
        data = request.get_json()
        github_url = data.get('github_url')
        
        if not github_url:
            return jsonify({'error': 'GitHub URL is required'}), 400
        
        # Extract repo name from URL
        try:
            repo_name = github_url.rstrip('/').split('/')[-1].replace('.git', '')
        except:
            repo_name = 'project'
        
        # Return basic analysis data based on URL
        # In production, you would clone and analyze the actual repo
        # For now, return mock data to keep the app responsive
        return jsonify({
            'success': True,
            'project_name': repo_name,
            'language': 'JavaScript',
            'framework': ['React', 'Node.js'],
            'tech_stack': ['React', 'Node.js', 'TypeScript', 'Webpack', 'Jest'],
            'description': f'An innovative {repo_name} project built with modern web technologies'
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@api_bp.route('/resume-description', methods=['POST'])
def resume_description():
    """Generate resume description endpoint"""
    try:
        data = request.get_json()
        
        description = ai_generator.generate_resume_description(data)
        
        return jsonify({
            'success': True,
            'description': description
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@api_bp.route('/download', methods=['GET'])
def download():
    """Download README endpoint"""
    try:
        from flask import send_file
        import io
        
        content = request.args.get('content', '')
        
        # Create file-like object
        file_obj = io.BytesIO(content.encode('utf-8'))
        
        return send_file(
            file_obj,
            mimetype='text/markdown',
            as_attachment=True,
            download_name='README.md'
        )
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

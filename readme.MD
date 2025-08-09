## Features

- **Modular architecture** – Separate frontend and backend components for scalable development.
- **Containerized** – Dockerfile included for consistent setup and easy deployment.
- **Configurable** – Uses `.env` for sensitive credentials and config parameters.
- **Easy setup** – Install dependencies with `requirements.txt`.
- **(Optional)** Add features like user session management, AI integration, or UI enhancements here.

## Getting Started

### Prerequisites

- Docker (if using containerization)
- Python 3.x
- (Optional) Frontend environment (Node.js, if applicable)

### Installation (Local Without Docker)

```bash
git clone https://github.com/mrrushikeshdaund/chat-bot-app.git
cd chat-bot-app
python -m venv venv
source venv/bin/activate             # macOS/Linux
venv\Scripts\activate                # Windows
pip install -r requirements.txt
cp .env.example .env                # If .env.example is available
# Edit .env to add necessary variables (e.g., API keys)
```

# Lib API - Fullstack Book Manager
A fullstack book manager application with FastAPI, Jinja2 templates, and TailwindCSS. Backend REST API written following this [video](https://youtu.be/I8WiIXMDydw)


## Prerequisites
- Python >=3.10
- PostgreSQL
- Node.js >=16 (for TailwindCSS)


## Project Structure
```
lib-api-main/
├── src/                    # Backend source code
│   ├── db/                # Database models and initialization
│   ├── routers/           # API route handlers
│   ├── schemas/           # Pydantic schemas
│   └── services/          # Business logic
├── templates/              # Jinja2 HTML templates
│   ├── layouts/           # Base layouts (base.html)
│   ├── pages/             # Page templates
│   └── components/        # Reusable components
├── static/                 # Static files
│   ├── css/               # Stylesheets (TailwindCSS)
│   ├── js/                # JavaScript files
│   └── images/            # Image assets
├── runserver.py           # Application entry point
└── requirements.txt       # Python dependencies
```


## Setup Instructions

### 1. Backend Setup
Create a virtual environment and install Python dependencies:
```console
pip install -r requirements.txt
```

Install Jinja2 templates support for FastAPI:
```console
pip install jinja2
```

### 2. Frontend Setup
Install Node.js dependencies for TailwindCSS:
```console
npm install
```

Build TailwindCSS (one-time):
```console
npm run build:css
```

Or watch for changes during development:
```console
npm run watch:css
```

### 3. Database Configuration
Create a `.env` file in the root directory (same location as README.md) with your PostgreSQL credentials.

Database will be initialized automatically on first run (youtube 48:34 참고).


## Running the Application

1. Start the TailwindCSS watcher (in a separate terminal):
```console
npm run watch:css
```

2. Start the FastAPI server:
```console
pipenv shell
python runserver.py
```

3. Access the application:
   - **Web Interface**: http://127.0.0.1:8000/
   - **API Documentation (Swagger UI)**: http://127.0.0.1:8000/docs
   - **API Endpoints**: http://127.0.0.1:8000/books


## Development Workflow

### Adding New Pages
1. Create HTML template in `templates/pages/`
2. Extend from `layouts/base.html`
3. Add route in appropriate router file
4. Use TailwindCSS classes for styling

### Modifying Styles
1. Edit `static/css/input.css` for custom CSS
2. Use TailwindCSS utility classes in HTML templates
3. Run `npm run watch:css` to auto-compile changes


## Technologies Used
- **Backend**: FastAPI, SQLAlchemy, PostgreSQL
- **Frontend**: Jinja2, TailwindCSS
- **Dev Tools**: Uvicorn, Pipenv  
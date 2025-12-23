from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path

# Get the base directory (project root)
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Configure Jinja2 templates
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

frontend_router = APIRouter()


@frontend_router.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """
    Render the home page
    """
    return templates.TemplateResponse(
        "pages/index.html",
        {"request": request}
    )


@frontend_router.get("/books", response_class=HTMLResponse)
async def books_page(request: Request):
    """
    Render the books page
    """
    return templates.TemplateResponse(
        "pages/books.html",
        {"request": request, "title": "Books"}
    )

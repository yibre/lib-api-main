// API Base URL
const API_BASE = '/books';

// Load books when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
});

// Load all books from API
async function loadBooks() {
    try {
        const response = await fetch(API_BASE);
        const books = await response.json();
        displayBooks(books || []);
    } catch (error) {
        console.error('Error loading books:', error);
        document.getElementById('books-container').innerHTML =
            '<div class="text-center col-span-full py-12"><p class="text-red-500">Error loading books. Please try again.</p></div>';
    }
}

// Display books in grid
function displayBooks(books) {
    const container = document.getElementById('books-container');

    if (books.length === 0) {
        container.innerHTML =
            '<div class="text-center col-span-full py-12"><p class="text-gray-500">No books found. Add your first book!</p></div>';
        return;
    }

    container.innerHTML = books.map(book => `
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">${escapeHtml(book.title)}</h3>
            <p class="text-gray-600 mb-1"><span class="font-medium">Author:</span> ${escapeHtml(book.author)}</p>
            <p class="text-gray-600 mb-1"><span class="font-medium">ISBN:</span> ${escapeHtml(book.isbn)}</p>
            <p class="text-gray-600 mb-3"><span class="font-medium">Description:</span> ${escapeHtml(book.description)}</p>
            <div class="flex gap-2 mt-4">
                <button
                    onclick="editBook('${book.uid}')"
                    class="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded text-sm">
                    Edit
                </button>
                <button
                    onclick="deleteBook('${book.uid}')"
                    class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm">
                    Delete
                </button>
            </div>
        </div>
    `).join('');
}

// Open add book modal
function openAddBookModal() {
    document.getElementById('addBookModal').classList.remove('hidden');
}

// Close add book modal
function closeAddBookModal() {
    document.getElementById('addBookModal').classList.add('hidden');
    document.getElementById('addBookForm').reset();
}

// Handle add book form submission
document.getElementById('addBookForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const bookData = {
        title: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        isbn: document.getElementById('bookIsbn').value,
        description: document.getElementById('bookDescription').value
    };

    try {
        const response = await fetch(API_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData)
        });

        if (response.ok) {
            closeAddBookModal();
            loadBooks();
        } else {
            const error = await response.json();
            alert('Error adding book: ' + (error.detail || 'Unknown error'));
        }
    } catch (error) {
        console.error('Error adding book:', error);
        alert('Error adding book. Please try again.');
    }
});

// Delete book
async function deleteBook(uid) {
    if (!confirm('Are you sure you want to delete this book?')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/${uid}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadBooks();
        } else {
            alert('Error deleting book');
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        alert('Error deleting book. Please try again.');
    }
}

// Edit book (placeholder - you can expand this)
function editBook(uid) {
    alert('Edit functionality coming soon for book: ' + uid);
}

// Utility function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

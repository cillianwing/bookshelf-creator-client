# Week 1 Project Goals

- Backend setup finalized
- User authentication (signup, login, logout) complete
- Main landing page
  - styling, links, etc.
- SearchBooksContainer and associated components
  - Form for book searches
  - Container area to house all the cards for returned book searches
  - Proper fetch calls to Google Books API
  - User can successfully add a book to their bookshelf (and the db) via this search container

# Remaining for Week 2

- BooksContainer
- ReadingStats component

# SearchBooks Container Notes

- Should the search fetch call to the Google Books API be handled within the container or the action/reducer components?
  - These may not need to be stored in the redux store. Only need to access within the container so may need to handle this fetch within the container itself.

- Upon sucess search, will render a list of book "cards". These cards should:
  - Have info regarding the book (title, author, published date, etc.).
  - A button that allows a user to select a book to add to their bookshelf.
    - This button should initiate some sort of addBook action/reducer to add the book to store and the DB.
    - After adding the book to their bookshelf, user will be prompted to go to bookshelf or return to search.
    - If returned to search, this book should be removed from the list OR have the button greyed out saying "Already Added" or something.

import React, { useEffect, useState } from 'react';

function Library() {
  const [books, setBooks] = useState([]); // State to hold books data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories

  // Function to fetch books from the API
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:5000/books'); // Adjust the URL as needed
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data); // Set the books data to state
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books on component mount
  }, []);

  const handleSearch = async () => {
    // Fetch books based on the search term (book title only)
    if (searchTerm.trim()) {
      const response = await fetch(`http://localhost:5000/books?title_like=${searchTerm}`);
      const data = await response.json();
      setBooks(data); // Set the filtered books
    } else {
      fetchBooks(); // Fetch all books if no search term is provided
    }
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) => 
      prev.includes(category) 
        ? prev.filter((cat) => cat !== category) 
        : [...prev, category]
    );
  };

  const filteredBooks = selectedCategories.length
    ? books.filter(book => selectedCategories.includes(book.category))
    : books;

  return (
    <div className="bg-gray-300 mx-auto pt-10 pb-6 px-4">
  {loading && <p>Loading...</p>} {/* Display loading message */}
  {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
  
  <h1 className="text-xl font-bold mb-6">Library</h1>

  <div className="flex flex-col md:flex-row gap-8">
    {/* Search and Filter Section */}
    <div className="flex flex-col w-full md:w-1/3">
      {/* Search Form */}
      <div className="flex mb-4">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search by book title" 
          className="p-2 border border-gray-400 rounded-l w-full"
        />
        <button 
          onClick={handleSearch} 
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Search
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Filter by Category</h2>
        {['Masculinity', 'Self-Development', 'Business', 'Leadership', 'History'].map(category => (
          <div key={category}>
            <label className="flex items-center mb-1">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(category)} 
                onChange={() => handleCheckboxChange(category)} 
                className="mr-2" 
              />
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Books Display Section */}
    <div className="flex-1">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white p-3 rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-lg">
            <img 
              src={book.image} 
              alt={book.title} 
              className="mb-2 w-full h-40 object-cover rounded-md"
            />
            <h2 className="font-semibold text-md mb-1 truncate">{book.title}</h2>
            <p className="text-sm text-gray-700">by {book.author}</p>
            <p className="text-sm text-gray-500 truncate">{book.name}</p>
      
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}

export default Library;

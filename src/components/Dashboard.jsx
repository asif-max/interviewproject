import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = ({ onLogout }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.post('https://hoblist.com/api/movieList', {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting"
        });
        
        const sortedMovies = response.data.result.sort((a, b) => b.voting - a.voting);
        setMovies(sortedMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);
  const handleLogout = () => {
    
    localStorage.removeItem('authToken');
    
    navigate('/login');
    
    
    if (onLogout) onLogout();
  };

  
  const handleWatchTrailer = (movieTitle) => {
    const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movieTitle)}+trailer`;
    
    window.open(trailerUrl, '_blank');
  };

  const handleUpvote = (movieId) => {
    setMovies(movies.map(movie => movie._id === movieId ? { ...movie, voting: movie.voting + 1 } : movie));
  };

  const handleDownvote = (movieId) => {
    setMovies(movies.map(movie => movie._id === movieId ? { ...movie, voting: movie.voting - 1 } : movie));
  };

  const handleNavigateToCompanyInfo = () => {
    navigate('/company-info');
  };

  return (
    <div className="p-4 relative">
      <button onClick={handleLogout} className="mb-4 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Logout
      </button>
      <button 
        onClick={handleNavigateToCompanyInfo}
        className="mb-4 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 absolute top-6 right-6"
      >
        Company Info
      </button>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <h3 className="text-2xl font-semibold mb-4">Movie List</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {movies.map((movie) => (
          <div key={movie._id} className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col pt-6 px-4 ">
            <div className='flex flex-row'>
            <div className="flex flex-col items-start mb-4">
              <button onClick={() => handleUpvote(movie._id)} className="mr-2 triangle-up"></button>
              <p className="text-gray-600 p-[5px]">{movie.voting}</p>
              <button onClick={() => handleDownvote(movie._id)} className="mr-2 triangle-down"></button>
              <p className=''>votes</p>
            </div>
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              className="w-[80px] h-[100px] rounded-lg mx-2 object-cover"
            />
            <div className="flex flex-col flex-1">
              <h4 className="text-xl font-semibold mb-2">{movie.title}</h4>
              <p className="text-gray-900 mb-1">Genre: {movie.genre}</p>
            </div>
            </div>
            <div className="mt-auto pb-4">
              <button
                onClick={() => handleWatchTrailer(movie.title)}
                className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
              >
                Watch Trailer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

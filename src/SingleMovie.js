// import React, { useState, useEffect } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import { API_URL } from "./context";

// const SingleMovie = () => {
//     const { id } = useParams();
//     const [isLoading, setIsLoading] = useState(true);
//     const [movie, setMovie] = useState("");
//     const [reviews, setReviews] = useState([]);
//     const [reviewText, setReviewText] = useState("");
//     const [rating, setRating] = useState(0);
//     const [error, setError] = useState("");

//     const getMovies = async (url) => {
//         setIsLoading(true);
//         try {
//             const res = await fetch(url);
//             const data = await res.json();
//             if (data.Response === "True") {
//                 setMovie(data);
//             }
//             setIsLoading(false);
//         } catch (error) {
//             console.log(error);
//             setIsLoading(false);
//         }
//     };

//     const getReviews = async (movieName) => {
//         try {
//             const res = await fetch(`http://localhost:5000/api/reviews/${movieName}`);
//             const data = await res.json();
//             if (Array.isArray(data)) {
//                 setReviews(data);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const submitReview = async () => {
//         if (reviewText.split(' ').length < 30) {
//             setError("Review must be at least 30 words");
//             return;
//         }

//         try {
//             const token = localStorage.getItem('token');
//             const res = await fetch('http://localhost:5000/api/reviews', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 },
//                 body: JSON.stringify({
//                     movieName: movie.Title,
//                     rating,
//                     reviewText
//                 })
//             });

//             const data = await res.json();
//             if (data.errors) {
//                 setError(data.errors.map(err => err.msg).join(', '));
//             } else {
//                 setReviews([...reviews, data]);
//                 setReviewText("");
//                 setRating(0);
//                 setError("");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         let timerOut = setTimeout(() => {
//             getMovies(`${API_URL}&i=${id}`);
//         }, 500);

//         return () => clearTimeout(timerOut);
//     }, [id]);

//     useEffect(() => {
//         if (movie.Title) {
//             getReviews(movie.Title);
//         }
//     }, [movie.Title]);

//     if (isLoading) {
//         return (
//             <div className='movie-section'>
//                 <div className="loading">Please Wait Loading ...</div>
//             </div>
//         );
//     }

//     return (
//         <section className="movie-section">
//             <div className='movie-card'>
//                 <figure>
//                     <img src={movie.Poster} alt="" />
//                 </figure>

//                 <div className="card-content">
//                     <p className="title">{movie.Title}</p>
//                     <p className="card-text">{movie.Released}</p>
//                     <p className="card-text">{movie.Genre}</p>
//                     <p className="card-text">{movie.imdbRating} / 10</p>
//                     <p className="card-text">{movie.Country}</p>
//                     <NavLink to="/" className="back-btn">Go Back</NavLink>
//                 </div>
//             </div>

//             <div className='review-section'>
//                 <h3>Reviews</h3>
//                 {reviews.length > 0 ? (
//                     reviews.map(review => (
//                         <div key={review._id} className='review'>
//                             <p><strong>{review.reviewer.username}</strong></p>
//                             <p>Rating: {review.rating}/10</p>
//                             <p>{review.reviewText}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No reviews yet.</p>
//                 )}

//                 <div className='review-form'>
//                     <h3>Submit a Review</h3>
//                     <textarea
//                         value={reviewText}
//                         onChange={(e) => setReviewText(e.target.value)}
//                         placeholder="Write your review (at least 30 words)"
//                     ></textarea>
//                     <input
//                         type="number"
//                         value={rating}
//                         onChange={(e) => setRating(e.target.value)}
//                         placeholder="Rating (1-10)"
//                         min="1"
//                         max="10"
//                     />
//                     <button onClick={submitReview}>Submit Review</button>
//                     {error && <p>{error}</p>}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SingleMovie;
// import React, { useState, useEffect } from 'react';






















// import React, { useState, useEffect } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import { API_URL } from "./context";

// const SingleMovie = () => {
//     const { id } = useParams();
//     const [isLoading, setIsLoading] = useState(true);
//     const [movie, setMovie] = useState("");
//     const [reviews, setReviews] = useState([]);
//     const [reviewText, setReviewText] = useState("");
//     const [rating, setRating] = useState(0);
//     const [error, setError] = useState("");

//     const getMovieDetails = async (url) => {
//         setIsLoading(true);
//         try {
//             const res = await fetch(url);
//             const data = await res.json();
//             if (data.Response === "True") {
//                 setMovie(data);
//             }
//             setIsLoading(false);
//         } catch (error) {
//             console.log(error);
//             setIsLoading(false);
//         }
//     };

//     const getReviews = async (movieName) => {
//         try {
//             const res = await fetch(`http://localhost:5000/api/reviews/${movieName}`);
//             const data = await res.json();
//             if (Array.isArray(data)) {
//                 setReviews(data);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const submitReview = async () => {
//         if (reviewText.split(' ').length < 30) {
//             setError("Review must be at least 30 words");
//             return;
//         }

//         try {
//             const token = localStorage.getItem('token');
//             const res = await fetch('http://localhost:5000/api/reviews', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 },
//                 body: JSON.stringify({
//                     movieName: movie.Title,
//                     rating,
//                     reviewText
//                 })
//             });

//             const data = await res.json();
//             if (data.errors) {
//                 setError(data.errors.map(err => err.msg).join(', '));
//             } else {
//                 setReviews([...reviews, data]);
//                 setReviewText("");
//                 setRating(0);
//                 setError("");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         let timerOut = setTimeout(() => {
//             getMovieDetails(`${API_URL}&i=${id}`);
//         }, 500);

//         return () => clearTimeout(timerOut);
//     }, [id]);

//     useEffect(() => {
//         if (movie.Title) {
//             getReviews(movie.Title);
//         }
//     }, [movie.Title]);

//     if (isLoading) {
//         return (
//             <div className='movie-section'>
//                 <div className="loading">Please Wait Loading ...</div>
//             </div>
//         );
//     }

//     return (
//         <section className="movie-section">
//             <div className='movie-card'>
//                 <figure>
//                     <img src={movie.Poster} alt="" />
//                 </figure>

//                 <div className="card-content">
//                     <p className="title">{movie.Title}</p>
//                     <p className="card-text">{movie.Released}</p>
//                     <p className="card-text">{movie.Genre}</p>
//                     <p className="card-text">{movie.imdbRating} / 10</p>
//                     <p className="card-text">{movie.Country}</p>
//                     <NavLink to="/" className="back-btn">Go Back</NavLink>
//                 </div>
//             </div>

//             <div className='review-section'>
//                 <h3>Reviews</h3>
//                 {reviews.length > 0 ? (
//                     reviews.map(review => (
//                         <div key={review._id} className='review'>
//                             <p><strong>{review.reviewer && review.reviewer.username ? review.reviewer.username : 'Unknown User'}</strong></p>
//                             <p>Rating: {review.rating}/10</p>
//                             <p>{review.reviewText}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No reviews yet.</p>
//                 )}

//                 <div className='review-form'>
//                     <h3>Submit a Review</h3>
//                     <textarea
//                         value={reviewText}
//                         onChange={(e) => setReviewText(e.target.value)}
//                         placeholder="Write your review (at least 30 words)"
//                     ></textarea>
//                     <input
//                         type="number"
//                         value={rating}
//                         onChange={(e) => setRating(e.target.value)}
//                         placeholder="Rating (1-10)"
//                         min="1"
//                         max="10"
//                     />
//                     <button onClick={submitReview}>Submit Review</button>
//                     {error && <p>{error}</p>}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SingleMovie;



import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from "./context";

const SingleMovie = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState("");
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);
    const [error, setError] = useState("");

    const getMovieDetails = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setMovie(data);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const getReviews = async (movieName) => {
        try {
            const res = await fetch(`http://localhost:5000/api/reviews/${movieName}`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setReviews(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const submitReview = async () => {
        if (reviewText.split(' ').length < 30) {
            setError("Review must be at least 30 words");
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const res = await fetch('http://localhost:5000/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    movieName: movie.Title,
                    rating,
                    reviewText
                })
            });

            const data = await res.json();
            if (data.errors) {
                setError(data.errors.map(err => err.msg).join(', '));
            } else {
                setReviews([...reviews, data]);
                setReviewText("");
                setRating(0);
                setError("");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovieDetails(`${API_URL}&i=${id}`);
        }, 500);

        return () => clearTimeout(timerOut);
    }, [id]);

    useEffect(() => {
        if (movie.Title) {
            getReviews(movie.Title);
        }
    }, [movie.Title]);

    if (isLoading) {
        return (
            <div className='movie-section'>
                <div className="loading">Please Wait Loading ...</div>
            </div>
        );
    }

    return (
        <section className="movie-section">
            <h2> "This movie data is sourced exclusively from IMDb ." 
            Developers does not include any user-generated or random content apart from movie reviews</h2>
            <div className="split-view">
                {/* Left side for movie details */}
                <div className='movie-card'>
                    <figure>
                        <img src={movie.Poster} alt="" />
                    </figure>

                    <div className="card-content">
                        <p className="title">{movie.Title}</p>
                        <p className="card-text">{movie.Released}</p>
                        <p className="card-text">{movie.Genre}</p>
                        <p className="card-text">{movie.imdbRating} / 10</p>
                        <p className="card-text">{movie.Country}</p>
                        <NavLink to="/" className="back-btn">Go Back</NavLink>
                    </div>
                </div>
                {/* Right side for review submission */}
                <div className='review-section'>
                    <h3>Reviews</h3>
                    {reviews.length > 0 ? (
                        reviews.map(review => (
                            <div key={review._id} className='review'>
                                <p><strong>{review.reviewer && review.reviewer.username ? review.reviewer.username : 'Unknown User'}</strong></p>
                                <p>Rating: {review.rating}/10</p>
                                <p>{review.reviewText}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}

                    <div className='review-form'>
                        <h3>Submit a Review</h3>
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Write your review (at least 30 words)"
                        ></textarea>
                        <input
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            placeholder="Rating (1-10)"
                            min="1"
                            max="10"
                        />
                        <button onClick={submitReview}>Submit Review</button>
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleMovie;


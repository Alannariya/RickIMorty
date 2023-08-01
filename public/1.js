// import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import CharacterCard from './CharacterCard';

// const App = () => {
//   const [characters, setCharacters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const loadCharacters = useCallback(async (currentPage) => {
//     try {
//       const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
//       setCharacters((prevCharacters) => [...prevCharacters, ...response.data.results]);
//       setLoading(false);
//       setHasMore(response.data.info.next !== null);
//     } catch (error) {
//       console.error('Error fetching characters:', error);
//       setLoading(false);
//     }
//   }, []);

//   const handleLoadMore = useCallback(() => {
//     if (!loading && hasMore) {
//       setLoading(true);
//       setPage((prevPage) => prevPage + 1);
//     }
//   }, [loading, hasMore]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
//         handleLoadMore();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleLoadMore]);

//   useEffect(() => {
//     loadCharacters(1); // Load the first page on the initial render
//   }, [loadCharacters]);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="app">
//       <div className="character-list">
//         {characters.slice(0, 20).map((character) => (
//           <CharacterCard key={character.id} character={character} />
//         ))}
//       </div>
//       {loading && <div className="loader">Loading...</div>}
//       {hasMore && !loading && (
//         <button className="load-more" onClick={handleLoadMore}>
//           Load More
//         </button>
//       )}
//       <button className="to-top" onClick={scrollToTop}>
//         To Top
//       </button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';

// const CharacterCard = ({ character }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleCardClick = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="character-card" onClick={handleCardClick} key={character.id}> 
//       <img src={character.image} alt={`Avatar of ${character.name}`} />
//       <h2>{character.name}</h2>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             <h2>{character.name}</h2>
//             <p>Gender: {character.gender}</p>
//             <p>Status: {character.status}</p>
//             <p>Race: {character.species}</p>
//             <p>Type: {character.type || 'Unknown'}</p>
//             <p>First Appearance: {character.origin.name}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CharacterCard;

// .app {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;

//   .character-list {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     grid-gap: 20px;
//     margin-bottom: 20px;
//   }

//   .character-card {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 10px;
//     background-color: #f2f2f2;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     cursor: pointer;

//     img {
//       width: 100px;
//       height: 100px;
//       border-radius: 50%;
//       margin-bottom: 10px;
//     }

//     h2 {
//       margin: 0;
//       font-size: 18px;
//     }

//     .modal {
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       z-index: 1;

//       .modal-content {
//         background-color: white;
//         padding: 20px;
//         border-radius: 4px;

//         .close {
//           position: absolute;
//           top: 5px;
//           right: 10px;
//           font-size: 20px;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   .load-more {
//     padding: 10px 20px;
//     background-color: #007bff;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 16px;
//   }

// 	.loader {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		font-size: 20px;
// 		margin: 20px 0;
	
// 		@keyframes spin {
// 			to {
// 				transform: rotate(360deg);
// 			}
// 		}
	
// 		&::after {
// 			content: '';
// 			display: block;
// 			width: 20px;
// 			height: 20px;
// 			border-radius: 50%;
// 			border: 3px solid #007bff;
// 			border-top: 3px solid transparent;
// 			animation: spin 1s linear infinite;
// 		}
// 	}

// 	.pagination-toggle {
// 		margin-bottom: 10px;
// 		label {
// 			display: flex;
// 			align-items: center;
// 			input {
// 				margin-right: 5px;
// 			}
// 		}
// 	}
	
// 	.pagination {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		margin: 20px 0;
// 		button {
// 			padding: 10px 20px;
// 			background-color: #007bff;
// 			color: white;
// 			border: none;
// 			border-radius: 4px;
// 			cursor: pointer;
// 			font-size: 16px;
// 			margin: 0 5px;
// 		}
// 	}
// }
// id={character.id} 
// 			 								name={character.name} 
// 											gender={character.gender} 
// 											status={character.status} 
// 											species={character.species}
// 											type={character.type}
// 											episode={character.episode}
// 											img={character.image}


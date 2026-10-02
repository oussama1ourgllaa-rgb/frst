import React, { useReducer, useEffect, useState } from 'react';
// 1. État initial du reducer
const initialState = {
  joueurs: [],
  loading: true,
  error: null
};

const todoReducer = (state, action) => {//action={type,payload}
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        joueurs: action.payload,
        error: null
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: 'Erreur lors du chargement des tâches'
      };

      case 'ADD_JOUEUR':
      return {
        ...state,
        joueurs: [...state.joueurs,{id:Date.now(), nom: action.payload,score: 0}]
      };

      case 'TOGGLE_JOUEUR_plus':
      return {
        ...state,
        joueurs: state.joueurs.map(joueur =>
          joueur.id === action.payload
            ? { ...joueur, score: joueur.score + 1 }
            : joueur
        )
      };

      case 'TOGGLE_JOUEUR_moins':
      return {
        ...state,
        joueurs: state.joueurs.map(joueur =>
          joueur.id === action.payload
            ? { ...joueur, score: joueur.score - 1 }
            : joueur
        )
      };
       case 'DELETE_JOUEUR':
      return {
        ...state,
        joueurs: state.joueurs.filter(joueur => joueur.id !== action.payload)
      };

    default:
      return state;
  }
}
//créer le composant GestionEqip
 const GestionEqip = () => {

  // Initialisation de useReducer
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newJoueurText, setNewJoueurText] = useState('');
    const [newScore, setNewScore] = useState(0);

  // 3. useEffect pour récupérer les données de l'API
    useEffect(() => {
          fetch('http://localhost:3005/mjoueurs').then(response => response.json()).then(data => {
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
          }).catch(err => {
            dispatch({ type: 'FETCH_ERROR' });
          });
            }, []);
    
 // Handler pour l'ajout d'une tâche
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newJoueurText.trim() === '' || newScore === 0) return;

        dispatch({ type: 'ADD_JOUEUR', payload: newJoueurText });
    setNewJoueurText('');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white text-center">
          <h2>Ma Liste de Joueurs</h2>
        </div>
        
        <div className="card-body">
          {/* Formulaire d'ajout */}
          <form onSubmit={handleAddTodo} className="mb-4">
            <div className="mb-3  d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Ajouter un nouveau joueur..."
                value={newJoueurText}
                onChange={(e) => setNewJoueurText(e.target.value)}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Ajouter un score..."
                value={newScore}
                onChange={(e) => setNewScore(e.target.value)}
              />
              <button className="btn btn-primary " >
                Ajouter
              </button>
            </div>
          </form>

           {/* Affichage du chargement ou de l'erreur */}
          {state.loading && (
            <div className="text-center my-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
            </div>
          )}

          {state.error && (
            <div className="alert alert-danger" role="alert">
              {state.error}
            </div>
          )}

          {/* Liste des joueurs */}
          {!state.loading && !state.error && (
            <table className="table table-striped">
                <thead  className="table-dark text-white">
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Score</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.joueurs.map((joueur) => (
                        <tr key={joueur.id}>
                            <td>{joueur.id}</td>
                            <td>{joueur.nom}</td>
                            <td>{joueur.score}</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-outline-success mx-2" onClick={() => dispatch({ type: 'TOGGLE_JOUEUR_plus', payload: joueur.id })}>
                                    +
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-warning mx-2" onClick={() => dispatch({ type: 'TOGGLE_JOUEUR_moins', payload: joueur.id })}>
                                    -
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => dispatch({ type: 'DELETE_JOUEUR', payload: joueur.id })}>
                                    Sup
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
export default GestionEqip;
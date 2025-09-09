"use client"; 
import React, { useEffect, useState } from 'react';
import styles from './lista.module.css';

const Lista = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('https://api.sampleapis.com/switch/games');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGames(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchGames();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Carregando...</div>;
    }

    if (error) {
        return <div className={styles.error}>Erro: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lista de Jogos</h1>
            <ul className={styles.list}>
                {games.map(game => (
                    <li key={game.id} className={styles.item}>
                        <h2>{game.name}</h2>
                        <p><strong>Gênero:</strong> {game.genre.join(', ')}</p>
                        <p><strong>Desenvolvedores:</strong> {game.developers.join(', ')}</p>
                        <p><strong>Publicadores:</strong> {game.publishers.join(', ')}</p>
                        <p><strong>Datas de Lançamento:</strong></p>
                        <ul>
                            {Object.entries(game.releaseDates).map(([region, date]) => (
                                <li key={region}><strong>{region}:</strong> {date}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lista;
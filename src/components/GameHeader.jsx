export const GameHeader = ({ score, moves, onReset }) => {
  return (
    <div className="game-header">
      <h1>🎮 Juego de Memoria 🎮</h1>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Puntuación:</span>{" "}
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Movimientos:</span>{" "}
          <span className="stat-value">{moves}</span>
        </div>
      </div>

      <button className="reset-btn" onClick={onReset}>
        Nuevo juego
      </button>
    </div>
  );
};

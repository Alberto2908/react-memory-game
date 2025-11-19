export const WinMessage = ({ moves }) => {
  return (
    <div className="win-message">
      <h2>Enhorabuena!</h2>
      <p>Completaste el juego en {moves} movimientos!</p>
    </div>
  );
};

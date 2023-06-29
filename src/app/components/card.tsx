import styles from './card.module.css';

export default function Card() {
  return (
    <div className={'card' + ' ' + 'card-esquerda' + ' ' + ' ' + 'verticalcenter-spacearound' + ' ' + styles.card}>
      <p>Encontramos alguns estúdios e profissionais na sua área.</p>
      <input placeholder="Estilo ou Localização" />
    </div>
  );
}

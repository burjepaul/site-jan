import './card.styles.css'
import certificat from '../../assets/Certificat.jpg'

const Card = ({ product })=> {
  console.log(product);
    const { name, last_offer, second_to_last_offer, time_of_last_offer, user_with_last_offer } =  product;
    return (
      <div className="card-container">
        <img
          className="card-image"
          src={certificat}
          alt={`Ghinda No. ${name}`}
        />
        <h2>Ghind No. {name}</h2>
        <h2>Ghind No. {last_offer}</h2>
        <h2>Ghind No. {second_to_last_offer}</h2>
        <h2>Ghind No. {time_of_last_offer}</h2>
        <h2>Ghind No. {user_with_last_offer}</h2>
      </div>
    );
  }

export default Card;

import React, {useState, useEffect} from 'react';
import './card.styles.css'
import certificat from '../../assets/Certificat.jpg'
import { useAuth } from '../../context/AuthContext';
import { getProfileById } from '../../utils';
import Button from '../Button/Button';

const Card = ({ product })=> {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null)

    useEffect(() => {
      async function load() {
        if (user_with_last_offer) {
          const result = await getProfileById(user_with_last_offer);
          setProfile(result);
        }
      }
      load();
    }, [user]);

    console.log(profile)

    const { name, last_offer, second_to_last_offer, time_of_last_offer, user_with_last_offer } =  product;
    return (
      profile? 

        <div className="card-container">
          <h2>Ghinda No. {name}</h2>
            <img
            className="card-image"
            src={certificat}
            alt={`Ghinda No. ${name}`}
            />
          <h3>Pret actual {last_offer} lei licitat la {time_of_last_offer} de catre {profile.nickname}</h3>
          <Button label={"Liciteaza"}/>
        {/* <h2>Ghinda No. {second_to_last_offer}</h2> */}
        </div>
        :
        <div className="card-container">
          <h2>Ghinda No. {name}</h2>
            <img
            className="card-image"
            src={certificat}
            alt={`Ghinda No. ${name}`}
            />
          <h3>Pret initial 100 lei</h3>
          <Button label={"Liciteaza"}/>
          {/* <h2>Ghinda No. {second_to_last_offer}</h2> */}
      </div>
      )
    }
  

export default Card;

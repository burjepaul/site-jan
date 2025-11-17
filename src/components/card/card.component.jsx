import React, {useState, useEffect} from 'react';
import './card.styles.css'
import certificat from '../../assets/Certificat.jpg'
import { useAuth } from '../../context/AuthContext';
import { getProfileById } from '../../utils';
import NewBidModal from '../LicitaiteNowModal/LicitatieNewModal';
import { supabase } from '../../supabase';

const Card = ({ product, connected })=> {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null)
    const [cardProduct, setCardProduct] = useState(product)
    const { name, last_offer, time_of_last_offer, user_with_last_offer } =  cardProduct;

    const [showBid, setShowBid] = useState(false);

    useEffect(() => {
      async function load() {
        if (user_with_last_offer) {
          const result = await getProfileById(user_with_last_offer);
          setProfile(result);
        }
      }
      load();
    }, [user, user_with_last_offer]);

    async function loadProducts() {
      const { data } = await supabase.from("products").select("*").eq("name", name).single();
      setCardProduct(data);
    }

    useEffect(() => {
      loadProducts();   // load on page open
      // eslint-disable-next-line
    }, []);

    // console.log(profile)

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
        {/* <h2>Ghinda No. {second_to_last_offer}</h2> */}
            {connected?
            <>
              <button onClick={() => setShowBid(true)}>Deschide Licitație</button>
              {showBid && <NewBidModal productItem={name} actualPrice={last_offer} onSuccess={loadProducts} onClose={() => setShowBid(false)}/>}
            </>
              :
              <></>
            }
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
            {connected?
            <>
              <button onClick={() => setShowBid(true)}>Deschide Licitație</button>
              {showBid && <NewBidModal productItem={name} actualPrice={last_offer} onClose={() => setShowBid(false)}/>}
            </>
              :
              <></>
            }
          {/* <h2>Ghinda No. {second_to_last_offer}</h2> */}
      </div>
      )
    }
  

export default Card;

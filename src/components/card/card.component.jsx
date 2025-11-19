import React, {useState, useEffect} from 'react';
import './card.styles.css'
import certificat from '../../assets/Certificat.jpg'
import Signup from '../Signup/Signup';
import { useAuth } from '../../context/AuthContext';
import { getProfileById } from '../../utils';
import NewBidModal from '../LicitaiteNowModal/LicitatieNewModal';
import { supabase } from '../../supabase';
import CountdownTimer from '../CountDowntimer/CountDownTimer';
import Button from '../Button/Button';

const Card = ({ product, connected })=> {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null)
    const [cardProduct, setCardProduct] = useState(product)
    const { name, last_offer, time_of_last_offer, user_with_last_offer } =  cardProduct;

    const [showBid, setShowBid] = useState(false);

    const [activeModal, setActiveModal] = useState(false);

    const closeModal = () => setActiveModal(false);

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

    return (
      <>
        <div className="card-container">
          <h2 className='price-info'>Ghinda No. {name}</h2>
          <img
            className="card-image"
            src={certificat}
            alt={`Ghinda No. ${name}`}
          />
          {profile ? (
            <h4 className='price-info'>Pret actual {last_offer} lei de catre {profile.nickname}</h4>
          ) : (
            <h4 className='price-info'>Pret initial 100 lei</h4>
          )}
    
          {connected ? (
            <>
              <Button onClick={() => setShowBid(true)} text={profile ? "Liciteaza" : "Deschide Licitația"} />
              {time_of_last_offer ? ( <CountdownTimer startTime={time_of_last_offer} />): <></> }
            </>
          ) : (
            <>
              <Button onClick={() => setActiveModal(true)} text={profile ? "Liciteaza" : "Deschide Licitația"} variant='outline' />
              {activeModal && <Signup onClose={closeModal} />}
              {time_of_last_offer ? ( <CountdownTimer startTime={time_of_last_offer} />): <></> }
            </>
          )}
        </div>
    
        {/* Central overlay modal for NewBidModal */}
        {showBid && (
          <div className="modal-overlay">
            <NewBidModal
              productItem={name}
              actualPrice={last_offer}
              onSuccess={loadProducts}
              onClose={() => setShowBid(false)}
            />
          </div>
        )}
      </>
    );
    }
  

export default Card;

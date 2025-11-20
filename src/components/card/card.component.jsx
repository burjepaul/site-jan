import React, {useState, useEffect} from 'react';
import './card.styles.css'
import certificat from '../../assets/Certificat.jpg'
import { useAuth } from '../../context/AuthContext';
import { getProfileById } from '../../utils';
import NewBidModal from '../LicitaiteNowModal/LicitatieNewModal';
import { supabase } from '../../supabase';
import CountdownTimer from '../CountDowntimer/CountDownTimer';
import Button from '../Button/Button';
import AuthModalManager from '../AuthModal/AuthModalManager';

const Card = ({ product, connected })=> {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null)
    const [cardProduct, setCardProduct] = useState(product)
    const { name, last_offer, time_of_last_offer, user_with_last_offer, bid_closed, bid_started } =  cardProduct;

    const [showBid, setShowBid] = useState(false);

    const [activeModal, setActiveModal] = useState(false);

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
    }, [setShowBid]);

    if ((time_of_last_offer != null) && (bid_closed === false) && (bid_started === true) && new Date(time_of_last_offer) < new Date(Date.now() - 2 * 60 * 60 * 1000)) {
      // checks the last bid, and if more than 2 hours ago sets bid_colsed to true
      console.log(cardProduct)
      const handleClosedBid =async e => {
        console.log("123:");
    
        const { data, error } = await supabase
        .from("products")
        .update({
          bid_closed: true
        })
        .eq("name", name); 
    
        if (error) {
          console.error("INSERT ERROR:", error.message);
          return;
        }
    
        console.log("SUCCESS:", data);
      };

      handleClosedBid()
      // older than 2 hours
  }
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
              {bid_closed? 
              <>
                <Button text={"Licitatie inchisa"} variant='danger'/>
                {time_of_last_offer ? ( <CountdownTimer startTime={time_of_last_offer} />): <></> }
              </>
              :
              <>
                <Button onClick={() => setShowBid(true)} text={profile ? "Liciteaza" : "Deschide Licitația"} />
                {time_of_last_offer ? ( <CountdownTimer startTime={time_of_last_offer} />): <></> }
              </>}
            </>
          ) : (
            <>
              {bid_closed? 
              <>
                <Button text={"Licitatie inchisa"} variant='danger'/>
                {time_of_last_offer ? ( <CountdownTimer startTime={time_of_last_offer} />): <></> }
              </>
              :
              <>
              <Button onClick={() => setActiveModal(true)} text={profile ? "Liciteaza" : "Deschide Licitația"} variant='outline' />
              {time_of_last_offer ? ( <CountdownTimer startTime={time_of_last_offer} />): <></> }
              </>}
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
        {activeModal && (
          <div className="modal-overlay">
            <div  className='modal-credential'>
              <button onClick={() => setActiveModal(false)} className='button-credential'>X</button>
              <h3>Trebuie sa fi logat pentru a licita.</h3>
              <AuthModalManager onClick={() => console.log(3)}/>
            </div>
          </div>
        )}
      </>
    );
    }
  

export default Card;

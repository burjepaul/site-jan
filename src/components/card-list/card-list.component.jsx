import Card from "../card/card.component";
import './card-list.styles.css'
import { useAuth } from "../../context/AuthContext";

const CardList = ({ products}) => {
  const {user}  = useAuth();

  const connected = !!user

    return (
      <div className="card-list">
        {products.map((product) => {
          return (
            <>
              <Card product={product} connected={connected} key={product.name}/>
            </>
          );
        })}
      </div>
    );
  }

export default CardList;

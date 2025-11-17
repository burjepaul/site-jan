import Card from "../card/card.component";
import './card-list.styles.css'
import { useAuth } from "../../context/AuthContext";

const CardList = ({ products}) => {
  const {user}  = useAuth();

  const connected = !!user

  const sortedProducts = [...products].sort((a, b) => {
    return Number(a.name) - Number(b.name);
  });

    return (
      <div className="card-list">
        {sortedProducts.map((product) => {
          return (
            <>
            <Card product={product} connected={connected} key={product.id}/>
            </>
          );
        })}
      </div>
    );
  }

export default CardList;

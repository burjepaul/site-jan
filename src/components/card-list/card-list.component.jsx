import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({ products }) => {
    return (
      <div className="card-list">
        {products.map((product) => {
          return (
            <>
            <Card product={product} key={product.id}/>
            </>
          );
        })}
      </div>
    );
  }

export default CardList;

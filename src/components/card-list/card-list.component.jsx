import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({ products }) => {


  const sortedProducts = [...products].sort((a, b) => {
    return Number(a.name) - Number(b.name);
  });

    return (
      <div className="card-list">
        {sortedProducts.map((product) => {
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

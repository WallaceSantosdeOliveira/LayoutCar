import { Link } from 'react-router-dom';
import ButtonIconCar from 'components/ButtonIconCar';
import ProductImg from 'assets/images/product.png';
import './styles.css';
const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>

      <div className="card-bottom-container">
        <h6>Audio Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <Link to="/">
        <ButtonIconCar />
      </Link>
    </div>
  );
};

export default ProductCard;

import { Link } from 'react-router-dom';

function ItemList({ products }) {
  if (!products) return null;
  if (products.length === 0) return <div>No hay productos en esta categoría.</div>;

  return (
    <div className="item-list">
      {products.map(product => (
        <div 
          key={product.id} 
          className="item-card"
        >
          <img 
            src={product.imagen || '/placeholder-image.jpg'} 
            alt={product.nombre}
            className="item-image"
          />
          <h4 className="item-title">
            {product.nombre}
          </h4>
          <p className="item-description">
            {product.descripcion}
          </p>
          <div className="item-price">
            <strong>
              ${product.precio}
            </strong>
          </div>
          <div className={`item-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
            {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
          </div>
          <Link 
            to={`/item/${product.id}`}
            className="item-detail-link"
          >
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
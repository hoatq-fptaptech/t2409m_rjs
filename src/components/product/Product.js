export default function Product(props){
    const p = props.product; // props = properties
    return (
        <div className="product">
            <h2>{p.name}</h2>
            <p>Giá: {p.price}$</p>
            <p>{p.description}</p>
            <button className="btn btn-primary" type="button">Add to cart</button>
        </div>
    );
}
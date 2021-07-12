const Card = (props) => {
  // console.log("props here", props.data);

  return (
    <div className="card" style={{ width: "13rem" }}>
      <img
        className="card-img-top"
        src={props.data.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">{props.data.price}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;

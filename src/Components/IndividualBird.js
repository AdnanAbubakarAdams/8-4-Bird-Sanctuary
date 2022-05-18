import birdData from "../data/birds";

const IndividualBird = (props) => {
  const { name, amount, img, setAdopt, setPrice } = props;

  const handleClick = (e) => {
    // const { value } = e.target;

    setAdopt((prevAdopt) => [...prevAdopt, `${name} $${amount}`]);
    setPrice((prevPrice) => [...prevPrice, amount]);
  };
  return (
    <section className='card'>
      <div className="birds">
        <h4>{name}</h4>
        <p>${amount}</p>
        <img src={img} alt={name} width="200px" />
        <br></br>
        <button onClick={handleClick}>ADOPT</button>
      </div>
    </section>
  );
};

export default IndividualBird;

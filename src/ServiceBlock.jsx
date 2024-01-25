export default function ServiceBlock(props) {
    return (
      <div className="service-block">
        <img src={props.block.imgURL} />
        <p>{props.block.text}</p>
      </div>
    );
  }
  
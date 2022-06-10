import { useState } from "react";

const Tour = ({ id, img, text, title, date, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={img} />
      <footer>
        <div className="tour-info">
          <h4>{title}</h4>
          <h4 className="tour-price">{date.split(" ").at(0)}</h4>
        </div>
        <p>
          { readMore ? text : text.slice(0,100)}
          <button onClick={()=>setReadMore(!readMore)}>
            {!readMore ? "See more" : "See less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour
import { IItem } from '../models/models'

interface ItemProps {
  item: IItem
}

export function PortfolioItem({item}: ItemProps) {
  return (
    <div className="Portfolio-item">
    <div className="Item-img-container">
      <img src={process.env.PUBLIC_URL + `/img/${item.img}`} alt="item8" className="Item-img" />
    </div>
    <div className="Item-text">
      <span className="highlight-1">{item.name}</span>
      <br />
      <div>{item.year}</div>
      <br />
      <span className="highlight-2">Technology</span>
      <br />
      <div>
        {item.stack}
      </div>
      <br />
      <span className="highlight-2">Goal</span>
      <br />
      <div>
        {item.description}
      </div>
      <br />
      <br />
      <a
        href={item.url}
        // onClick="this.blur()"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check it out
      </a>
      <br /> <br />
      <br />
      <br />
    </div>
  </div>
  )
};

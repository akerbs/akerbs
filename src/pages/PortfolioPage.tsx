import { PortfolioItem } from '../components/PortfolioItem';
import { items } from '../data/Items';

export default function PortfolioPage() {

  
  return (
    <div className="Portfolio-content">
      {/* <p>This page will be updated...</p> */}
      {items.map(item => <PortfolioItem item={item} key={item.id}/>)}
    </div>
  );
}

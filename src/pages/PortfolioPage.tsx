import { PortfolioItem } from '../components/PortfolioItem';
import { items } from '../data/Items';

export function PortfolioPage() {

  
  return (
    <div className="Portfolio-content">
      {items.map(item => <PortfolioItem item={item} key={item.id}/>)}

    </div>
  );
}
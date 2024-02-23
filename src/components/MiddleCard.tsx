import IChiffer from '../types/chiffer';

type middleCardProps = {
    card : IChiffer;
}

const MiddleCard = ({card } : middleCardProps) => {
    

  return (
    <div className='middle-card' > 
        <h3>{card.chiffer }</h3>
        <span>{card.entity}</span>
        <p>{card.testmony}</p>
    </div>
  )
}

export default MiddleCard

import react from 'react'
import './direction.scss'


import Text from 'components/Text';

export type DishDirectionProps = {
    list: { step: string }[];
};

const DishDirection:React.FC<DishDirectionProps>=({list})=> {

return(
    <div className='direction'>
        <Text tag='h2' weight='bold'>Directions</Text>
        <div className='direction-list'>  
          {list.map((step, index) => (
          <div className='direction-list__item' key={index}>
            <div>
                <Text weight='bold' view='p-16'>Step {index+1}</Text>
            </div>
            <div>
              <Text view='p-14'>{step.step}</Text>
            </div>
          </div>
          ))}
        </div>
    </div>
    )
}

export default DishDirection
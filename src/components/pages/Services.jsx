
import { card } from '../data/dummydata';
import Heading from '../common/Heading';


const Services = () => {
  return (
    <>
      <section className='services'>
        <div className="container">
            <Heading title='Services' />
            <div className='content grid3'>
            {card.map((item)=>(
                <div className="box" data-aos="flip-left" key={item.id}>
                    <img src={item.image} alt="" />
                    <h3>{item.h}</h3>
                    
                </div>
            ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
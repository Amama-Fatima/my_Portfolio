import { home } from '../data/dummydata'; 
import Typewriter from 'typewriter-effect';






const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val,i)=>(
            <div className="heroContainer" key={i}> 
                <h3 data-aos="fade-right" className='change' > {val.text} </h3>
                <h1>
                    <Typewriter options = {{strings: [`${val.name}`, `${val.post}`  ], autoStart: true, loop: true}}  />
                </h1>
                <p data-aos="fade-left"  className='change'> {val.desc} </p>
                {/* <button className="primaryBtn" data-aos="fade-up-right">Download CV</button> */}
            </div>
            
        ))}
      </section>
    </>
  )
}

export default Hero

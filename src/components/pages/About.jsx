
import Heading from '../common/Heading'
import { about } from '../data/dummydata'

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
            {about.map((val)=>(
                <div key={val.id}>
                    {/* <div className='left'>
                        <img src={val.cover} alt="" data-aos="fade-down-right" />
                    </div> */}
                    <div className='right' data-aos="fade-down-left">
                        <Heading title='About Me' />
                        <p> {val.desc} </p>
                        <p> {val.desc1} </p>
                        <p>{val.desc2}</p>
                        <button className='primaryBtn'>Contact</button>
                        <button className="fiverr">
                        <a href="https://www.fiverr.com/s/wEXWxB" target="_blank" rel="noopener noreferrer">
                            Hire on Fiverr
                        </a>
                        </button>
                        

                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default About
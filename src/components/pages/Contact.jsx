import { contact } from '../data/dummydata'
import Heading from '../common/Heading'


const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
            <Heading title='Keep In Touch' />
            <div className="content flexsb">
                <div className="right">
                    <form>
                        <div className="flex">
                            <input type="text" placeholder='Name' data-aos="zoom-in-down" className='text_email' />
                            <input type="email" placeholder='Email' data-aos="zoom-in-up" className='text_email'/>
                        </div>
                        <input type="text" placeholder='Subject' data-aos="zoom-in-up"/>
                        <textarea name='' id='' cols='30' rows='10' data-aos="zoom-in-down"></textarea>
                        <button data-aos="zoom-in-down">Submit</button>
                    </form>
                </div>
                <div className="left">
                    {contact.map((item)=>(
                        <div className="box" data-aos="zoom-in-down" key={item.id}>
                            <i>{item.icon}</i>
                            <p>{item.text1}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact

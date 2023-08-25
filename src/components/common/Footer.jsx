
import { social } from '../data/dummydata'


const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item)=>(
            
                <i  key={item.id} >{item.icon}</i>
        ))}
          <button className="fiverr">
            <a href="https://www.fiverr.com/s/wEXWxB" target="_blank" rel="noopener noreferrer">
                Hire on Fiverr
            </a>
          </button>
      </footer>
    </>
  )
}

export default Footer
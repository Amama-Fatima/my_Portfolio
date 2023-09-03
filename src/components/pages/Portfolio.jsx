
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"

import {portfolio as list} from '../data/dummydata'





const Portfolio = () => {

  const openInNewTab = (url) => {
    window.open(url, '_blank').focus();
  };


  return (
    <>
      <article>
        <div className="container  port_cont">
          <h2  className='port' >Portfolio</h2> 
            <div className="content grid3">
                {list.map((item)=>(
                    <div className="box" data-aos="fade-up" key={item.id}>
                        <div className="img">
                            <img src={item.cover} alt=""  />
                        </div>
                        <div className="overlay" onClick={() => openInNewTab(item.url)}>
                          
                          <span>
                            {item.text}
                          </span>
                          <VisibilityOutlinedIcon/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </article>
    </>
  )
}

export default Portfolio

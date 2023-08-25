
import { Link } from 'react-router-dom';

import { navlink } from '../data/dummydata';
import { useState } from 'react';
import { Menu } from '@mui/icons-material';

const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <>
    <header>
        <div className="container flexsb">
            <div className= {toggle? 'hideMenu':'nav'} >
                {navlink.map((links, i) => (
                    <Link className='link' to={links.url} key={i}  >{links.text}</Link>
                )

                )}
            </div>
            <button className='togglebtn' onClick={()=>setToggle(!toggle)}>
                <Menu className='icon' >

                </Menu>
            </button>
        </div>
    </header>
    </>
  )
}

export default Header
import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import {Name} from './Styles';
import {useHistory} from 'react-router-dom'

const items = ['Details', 'Projects', 'Contact']
const config = { mass: 5, tension: 2000, friction: 200 }


function Navigation() {

    const history = useHistory()
    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    
    const handleLink = (e) => {
        console.log(e.target.innerText.toLowerCase(), "on click")

       const page = e.target.innerText.toLowerCase()
       history.push(`/Coral-Fussman-profile/${page}`)
    }

    const handleClick = () => {
      set(state => !state) 
      history.push('/Coral-Fussman-profile/')
    }

    return (
        <div className="trails-main"  >
        <div>
        <Name onClick={handleClick}>CORAL</Name>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              value={items.child}
              className="trails-text"
              onClick={handleLink}
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    )
}

export default Navigation

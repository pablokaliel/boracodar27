import { useEffect, useState } from 'react';
import {Container,DivImg} from './styles'


import four from '../../assets/four.svg';
import planet from '../../assets/planet.gif';

function ContainerImage() {

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.random());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [])
  return ( 
    <Container>

      <DivImg>
          <div style={{ animationDelay: `${randomNumber + 2}s` }}>
            <img src={four} />
          </div>
          <div style={{ animationDelay: `${randomNumber + 0.5}s` }}>
           <img className='frame' src={planet} />
          </div>
          <div style={{ animationDelay: `${randomNumber + 1}s` }}>
            <img src={four} />
          </div>
        </DivImg>

    </Container>
   );
}

export default ContainerImage;
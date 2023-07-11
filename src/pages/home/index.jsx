
import {Container,NavLink} from './styles'

import logo from '../../assets/Gif.png'

function Home() {

  return (
    <Container >
      <img src={logo} alt="" />
      <h1>O Jogo</h1>
      <NavLink to={"/error"}>
        Jogar
      </NavLink>
    </Container>
   );
}

export default Home;

import {Container,DivText,DivBtn,Back,Home} from './styles'

function ContainerText() {
  return ( 
    <Container>
      <DivText>
          <h1>Ops, Você perdeu o Jogo!</h1>
          <span>
            Parece que você perdeu...Tente voltar para a página Anterior ou
            acessar a home.
          </span>
          <DivBtn>
            <Back to={"/"}>VOLTAR</Back>
            <Home to={"/"}>IR PARA A HOME</Home>
          </DivBtn>
        </DivText>
    </Container>
   );
}

export default ContainerText;
import { Container, DivBtnMob, Back, Home } from "./styles";

function ContainerBtnMob() {
  return (
    <Container>
      <DivBtnMob>
        <Back to={"/"}>VOLTAR</Back>
        <Home to={"/"}>IR PARA A HOME</Home>
      </DivBtnMob>
    </Container>
  );
}

export default ContainerBtnMob;

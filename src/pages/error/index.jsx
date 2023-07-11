import { motion } from "framer-motion";
import { Container, Swapper, DivBtnMob, Back, Home } from "./styles";

import ContainerText from "../../components/ContainerText";
import ContainerImage from "../../components/ContainerImage";

function Error() {
  return (
    <Container>
      <Swapper>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: -0, opacity: 1 }}
          exit={{ x: 90, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 200,
            duration: 1.1,
            delay: 1,
          }}
        >
          <ContainerText />
        </motion.div>

        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: -0, opacity: 1 }}
          exit={{ x: 90, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 200,
            duration: 1.1,
          }}
        >
          <ContainerImage />
        </motion.div>

        <DivBtnMob>
          <Back to={"/"}>VOLTAR</Back>
          <Home to={"/"}>IR PARA A HOME</Home>
        </DivBtnMob>
      </Swapper>
    </Container>
  );
}

export default Error;

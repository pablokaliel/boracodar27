import { motion } from "framer-motion";
import { Container, Swapper, } from "./styles";

import ContainerText from "../../components/ContainerText";
import ContainerImage from "../../components/ContainerImage";
import ContainerBtnMob from "../../components/ContainerBtnMob";

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
          <ContainerBtnMob/>
      </Swapper>
    </Container>
  );
}

export default Error;

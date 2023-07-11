import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
	--gray-01: #d5d5f2;
	--gray-02: #e2e2f5;
	--purple: #bf7bfb;
	--blue: #151557;
	--blue-light: #212187;
	--dark-blue: #000013;
}

  body{
    width:100%;
    height:100%;
    /* background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.75);  */
    background-color:var(--dark-blue);
    color:var(--gray-01);
  }
  
  #root,
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family:Outfit;
  }

  button {
    cursor:pointer;
  }
`;
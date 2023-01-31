import Transition from "@/components/Transition";
import MenuBar from "@/modules/MenuBar";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const About = () => {
  return (
    <Transition>
      <Wrapper>
        <Title>About</Title>
      </Wrapper>
    </Transition>
  );
};

export default About;

import Transition from "@/components/Transition";
import MenuBar from "@/modules/MenuBar";

const About = () => {
  return (
    <Transition>
      <div>
        <MenuBar />
        <h1>About</h1>
      </div>
    </Transition>
  );
};

export default About;

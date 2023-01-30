import Transition from "@/components/Transition";
import MenuBar from "@/modules/MenuBar";

const Projects = () => {
  return (
    <Transition>
      <div className="page">
        <MenuBar />
        <h1>Projects</h1>
      </div>
    </Transition>
  );
};

export default Projects;

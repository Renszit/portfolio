import Transition from "@/components/Transition";
import MenuBar from "@/modules/MenuBar";

const Contact = () => {
  return (
    <Transition>
      <div className="page">
        <MenuBar />
        <h1>Contact</h1>
      </div>
    </Transition>
  );
};

export default Contact;

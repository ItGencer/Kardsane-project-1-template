import "./Sign-up.scss";
import SectionTag from "../../SectionTag/SectionTag";
import FormContact from "../../Form/Form-contact/Form-contact";
import Forms from "../../Form/Forms";

function SignUp() {
  return (
    <section id="contact" className="appointment-booking">
        <FormContact />
        <Forms />
    </section>
  );
}

export default SignUp;

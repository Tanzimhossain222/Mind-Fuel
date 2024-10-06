import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

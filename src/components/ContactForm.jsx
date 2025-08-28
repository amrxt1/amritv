const ContactForm = () => {
  return (
    <>
      <div className="w-full">
        <form className="bg-surface/70 border-text/20 grid w-full gap-y-2 rounded-lg border px-2 py-4">
          <h1 className="text-primary mb-4 text-center font-serif text-3xl font-bold">
            Leave a message
          </h1>
          <input
            placeholder="Name"
            className="bg-background/70 text-text border-text/30 rounded-lg border p-2"
          />
          <input
            placeholder="Email"
            className="bg-background/70 text-text border-text/30 rounded-lg border p-2"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="bg-background/70 text-text border-text/30 resize-none rounded-lg border p-2"
          />
          <button className="bg-primary text-background rounded-md p-1 px-2 font-bold">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

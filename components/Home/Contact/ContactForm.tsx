const ContactForm = () => {
  return (
    <section
      className="flex-1 rounded-2xl border border-pinkMedium bg-white pl-5 pr-40 py-6 shadow-sm"
      aria-labelledby="contact-heading "
    >
      
      <h2
        id="contact-heading"
        className="mb-4 text-lg font-semibold text-stone-900"
      >
        Send Message
      </h2>

      <form className="flex flex-col gap-3" method="post" action="#">
        <label className="flex  gap-1 text-sm text-pinkMedium">
          <input
            type="text"
            name="name"
            placeholder="Your Name:"
            required
            className="rounded-full border border-pinkMedium px-4 py-2 text-sm outline-none placeholder-pinkMedium"
          />
        </label>

        <label className="flex  gap-1 text-sm text-pinkMedium">
          <input
            type="email"
            name="email"
            placeholder="Email:"
            required
            className="rounded-full border border-pinkMedium px-4 py-2 text-sm outline-none placeholder-pinkMedium"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm text-pinkMedium">
          <textarea
            placeholder="Your Message:"
            name="message"
            rows={4}
            required
            className="min-h-[100px] resize-y rounded-2xl border border-pinkMedium px-4 py-2 text-sm placeholder-pinkMedium outline-none"
          />
        </label>

        <button
          type="submit"
          className="primary-button max-w-fit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
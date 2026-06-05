import { Formik } from "formik";

function validate(values) {
  const errors = {};
  if (!values.name) errors.name = "Required";
  if (!values.email) errors.email = "Required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    errors.email = "Invalid email";
  if (!values.message) errors.message = "Required";
  return errors;
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <hr className="divider" />
      <br />
      <br />
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let's talk</h2>
      <div className="contact-inner">
        <p>
          I'm open to remote senior engineering roles, freelance projects, and
          interesting collaborations. Drop me a message and I'll get back to
          you.
        </p>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={validate}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert("Message sent! I'll get back to you soon.");
              resetForm();
              setSubmitting(false);
            }, 600);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="form-row">
                  <div>
                    <input
                      className="form-input"
                      name="name"
                      placeholder="Your name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && (
                      <p className="form-error">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      className="form-input"
                      name="email"
                      placeholder="Your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <p className="form-error">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <textarea
                    className="form-input"
                    name="message"
                    placeholder="What's on your mind?"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.message && errors.message && (
                    <p className="form-error">{errors.message}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </Formik>

        <div className="contact-links">
          <a href="mailto:ayyaz.mahmood815@gmail.com" className="contact-link">
            ayyaz.mahmood815@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/ayaz.mahmood"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ayaz.mahmood"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Ayaz Mahmood · Built with React</p>
      </footer>
    </section>
  );
}

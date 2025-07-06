import React from 'react';

const ContactUs = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Get in Touch</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Customer Support</h5>
          <p>Email: <a href="mailto:support@otuwadeals.com">support@otuwadeals.com</a></p>
          <p>Phone: +1 (800) 456-7890</p>
          <p>Hours: Monday – Friday, 9am – 6pm (EST)</p>

          <h5 className="mt-4">Head Office</h5>
          <p>123 Commerce Street<br />New York, NY 10001<br />United States</p>
        </div>

        <div className="col-md-6 mb-4">
          <h5>Send Us a Message</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="John Doe" disabled />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" disabled />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message..." disabled></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled>
              Submit (Demo Only)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

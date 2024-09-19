"use client";

const FAQs = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">FAQs and Information</h1>

      <div className="row gy-4">
        {/* Blog/News Section */}
        <div className="col-md-4">
          <div className="card p-4 h-100">
            <h5 className="faq-title">
              <i className="icon bi bi-newspaper"></i> Blog/News
            </h5>
            <p>
              Articles on emissions standards, industry news, and tips for
              reducing vehicle emissions.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="col-md-4">
          <div className="card p-4 h-100">
            <h5 className="faq-title">
              <i className="icon bi bi-question-circle"></i> FAQs
            </h5>
            <p>
              Common questions about emissions testing, processes, and
              regulations.
            </p>
            <a href="#" className="btn btn-primary">
              View FAQs
            </a>
          </div>
        </div>

        {/* Regulatory Information Section */}
        <div className="col-md-4">
          <div className="card p-4 h-100">
            <h5 className="faq-title">
              <i className="icon bi bi-journal-text"></i> Regulatory Information
            </h5>
            <p>
              Updates on relevant regulations and standards that affect vehicle
              owners and businesses.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

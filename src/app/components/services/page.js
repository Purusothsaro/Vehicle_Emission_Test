"use client";

const Services = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Our Services</h1>
      <div className="row gy-4">
        {/* Service 1 */}
        <div className="col-md-4">
          <div className="card service-card p-3 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Standard Emissions Testing</h5>
              <p className="card-text">
                Details on the on-demand basic emissions test offered, including
                what is measured and how results are provided, with an option to
                book testing.
              </p>
              <a href="#" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4">
          <div className="card service-card p-3 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Fleet Testing Services</h5>
              <p className="card-text">
                Specialized testing for business fleets, with details on bulk
                testing options and reporting, with an option to book testing.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4">
          <div className="card service-card p-3 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Corporate Testing</h5>
              <p className="card-text">
                Information on mobile emissions testing services for businesses
                and events, with an option to book testing.
              </p>
              <a href="#" className="btn btn-primary">
                Get Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

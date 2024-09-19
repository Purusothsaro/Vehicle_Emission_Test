"use client";

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-5 text-center bg-light">
        <div className="container">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Learn more about our history, team, and commitment to
            sustainability.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <h2>Company History</h2>
            <p>Background of the organization, its values, and milestones.</p>
          </div>
          <div className="col-md-4">
            <h2>Team</h2>
            <p>
              Profiles of key team members with information about their
              expertise.
            </p>
            {/* Add cards for team members */}
            <div className="team-members">
              <div className="card mb-3" style={{ width: "100%" }}>
                <img
                  src="/assets/team-4.jpg"
                  className="card-img-top"
                  alt="Team Member"
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Chief Engineer</p>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#teamModal1"
                  >
                    View Profile
                  </button>
                </div>
              </div>
              {/* Add more team member cards */}
            </div>
          </div>
          <div className="col-md-4">
            <h2>Vision and Mission</h2>
            <p>
              Explanation of the company’s dedication to reducing environmental
              impact.
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="bi bi-graph-up"></i> Sustainability Commitment
              </li>
              <li className="list-group-item">
                <i className="bi bi-tree"></i> Reducing Carbon Footprint
              </li>
              <li className="list-group-item">
                <i className="bi bi-lightbulb"></i> Innovation in Clean
                Technology
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <div
        className="modal fade"
        id="teamModal1"
        tabIndex="-1"
        aria-labelledby="teamModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="teamModalLabel">
                John Doe
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                John is a highly skilled engineer with over 10 years of
                experience in vehicle emissions testing.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

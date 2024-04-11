function About() {
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">About us</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active text-white">About us</li>
        </ol>
      </div>
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div className="text-center mx-auto" style={{maxWidth: "700px"}}>
                  <h1 className="text-primary">About our business</h1>
                  <p className="mb-4">
                    Natural Fruits and Vegetables Ltd (NFV) was established in
                    2024, operating all around in the United Kingdom (UK) due to
                    increased demand for our products. NFV contains important
                    vitamins, minerals, and plant chemicals. They also contain
                    fibre. There are many varieties of fruit and vegetables
                    available and many ways to prepare, cook, and serve them. A
                    diet high in fruit and vegetables can help protect you
                    against cancer, diabetes and heart disease.
                  </p>

                  <p className="mb-4">
                    This business helps to keep a lot of people healthy and
                    wanting more, also help to keep them safe and making sure a
                    healthy living us their daily life style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

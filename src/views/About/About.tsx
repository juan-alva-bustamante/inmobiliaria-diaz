import Navbar from "src/components/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about-shot-info section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-20">
              <h2>We Create Designs<br /> and technology</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat
                quo natus dolor harum voluptatibus modi dicta ducimus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est
                quaerat cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio
                atque!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt
                voluptas. Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae
                molestias aut, aperiam!</p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="images/company/company-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="company-mission section-sm bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam
                dolores assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla
                nemo accusamus, culpa inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit
                obcaecati dicta illum mollitia, perferendis hic, beatae voluptates? Ex labore, obcaecati harum
                nam.</p>
              <img src="images/company/company-image-2.jpg" alt="" className="img-fluid mt-30" />
            </div>
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam
                dolores assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla
                nemo accusamus, culpa inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit
                obcaecati dicta illum mollitia, perferendis hic, beatae voluptates? Ex labore, obcaecati harum
                nam.</p>
              <img src="images/company/company-image-3.jpg" alt="" className="img-fluid mt-30" />
            </div>
          </div>
        </div>
      </section>
      <section className="promo-video section-sm">
        <div className="container">
          <div className="row">
            {/* section title */}
            <div className="col-12">
              <div className="title text-center">
                <h2>Our Promo Video</h2>
                <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu.Sed condimentum
                  iaculis ex,
                  in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus
                  luctus dignissim.</p>
                <div className="border" />
              </div>
            </div>
            {/* /section title */}
            <div className="col-md-8 mx-auto">
              <iframe src="https://player.vimeo.com/video/51119176" width="100%" height={360} frameBorder={0} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
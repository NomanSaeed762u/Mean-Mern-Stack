import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUsPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white text-center py-5">
        <h1>About Us</h1>
      </header>

      {/* Main Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src="back.jpeg"
                alt="Our Team"
                className="img-fluid rounded-circle"
              />
            </Col>
            <Col md={6}>
              <h2>Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer consectetur libero at elit ullamcorper, et iaculis
                dui sagittis. Donec nec lorem vitae lacus efficitur molestie.
                Sed at luctus purus. Nulla facilisi. Sed consequat ipsum
                libero, sit amet feugiat nunc eleifend vitae.
              </p>
              <p>
                Sed lacinia lacus a eros fringilla volutpat. Maecenas vel
                lectus eu sem pharetra eleifend. Sed gravida malesuada nibh,
                ut varius nisl porta ac.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-3">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
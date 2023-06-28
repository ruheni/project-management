import type { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useUser } from "@clerk/nextjs";

import Header from "~/components/shared/Header";

const NotAuth = () => (
  <Row className="mt-5">
    <Col>
      <h5 className="d-flex justify-content-center">
        You are not logged in.
      </h5>
    </Col>
  </Row>
)

const Layout = (
  { children }: { children: ReactNode }
) => {

  const { user } = useUser();

  return (
    <main>
      <Header />
      <Container>
        <Row>
          <Col>
            {!user ? <NotAuth /> : children}
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Layout;
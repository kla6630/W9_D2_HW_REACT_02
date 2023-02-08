import { Card, Col, Row } from "react-bootstrap";
import horror from "../data/books/horror.json";

const AllTheBooks = () => {
  return (
    <div class="container">
      <Row>
        {horror.map((book) => {
          return (
            <Col xs={12} md={3} key={book.asin}>
              <Card className="ook-cover" id="my_card">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default AllTheBooks;

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="border-0 shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">用户登录</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>用户名/邮箱</Form.Label>
                  <Form.Control type="text" placeholder="请输入用户名或邮箱" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>密码</Form.Label>
                  <Form.Control type="password" placeholder="请输入密码" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="记住我" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3">
                  登录
                </Button>
                <div className="text-center">
                  <Link to="/register" className="text-decoration-none">
                    还没有账号？立即注册
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

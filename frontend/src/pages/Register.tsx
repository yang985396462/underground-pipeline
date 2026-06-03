import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="border-0 shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">用户注册</h2>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>姓名</Form.Label>
                      <Form.Control type="text" placeholder="请输入姓名" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>公司名称</Form.Label>
                      <Form.Control type="text" placeholder="请输入公司名称" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>邮箱</Form.Label>
                  <Form.Control type="email" placeholder="请输入邮箱地址" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>联系电话</Form.Label>
                  <Form.Control type="tel" placeholder="请输入联系电话" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>设置密码</Form.Label>
                  <Form.Control type="password" placeholder="请设置密码（6 位以上）" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>确认密码</Form.Label>
                  <Form.Control type="password" placeholder="请再次输入密码" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Check 
                    type="checkbox" 
                    label="我已阅读并同意《用户服务协议》" 
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3">
                  立即注册
                </Button>
                <div className="text-center">
                  已有账号？<Link to="/login" className="text-decoration-none">立即登录</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

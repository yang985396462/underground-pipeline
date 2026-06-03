import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="mb-5">联系方式</h1>
          
          <Row className="g-4">
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <h2 className="h4 mb-4">在线咨询</h2>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>姓名</Form.Label>
                      <Form.Control type="text" placeholder="请输入您的姓名" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>公司</Form.Label>
                      <Form.Control type="text" placeholder="请输入公司名称" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>邮箱</Form.Label>
                      <Form.Control type="email" placeholder="请输入您的邮箱" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>联系电话</Form.Label>
                      <Form.Control type="tel" placeholder="请输入您的联系电话" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>咨询内容</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="请描述您的需求" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      提交咨询
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <h2 className="h4 mb-4">联系方式</h2>
                  
                  <div className="mb-4">
                    <h5 className="mb-2">销售热线</h5>
                    <p className="text-muted mb-0">400-888-8888</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="mb-2">技术支持</h5>
                    <p className="text-muted mb-0">400-999-9999</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="mb-2">服务邮箱</h5>
                    <p className="text-muted mb-0">service@pipeline-survey.com</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="mb-2">公司地址</h5>
                    <p className="text-muted mb-0">
                      北京市海淀区中关村科技园区<br />
                      科技大厦 A 座 10 层
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="mb-2">工作时间</h5>
                    <p className="text-muted mb-0">
                      周一至周五：9:00 - 18:00<br />
                      周六：9:00 - 12:00<br />
                      周日及法定节假日休息
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

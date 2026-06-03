import { Container, Row, Col, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="mb-5">关于我们</h1>
          
          <Card className="mb-4 border-0 shadow-sm">
            <Card.Body>
              <h2 className="h4 mb-3">公司简介</h2>
              <p className="text-muted">
                我们是一家专注于地下管线测绘技术研发的高新技术企业，成立于 2010 年。
                公司总部位于北京，在全国设有 20 多个分支机构，服务网络覆盖全国。
              </p>
              <p className="text-muted">
                多年来，我们致力于为客户提供高精度、高效率的地下管线测绘解决方案，
                产品广泛应用于城市供水、排水、燃气、电力、通信等管线工程的建设与维护。
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4 border-0 shadow-sm">
            <Card.Body>
              <h2 className="h4 mb-3">核心优势</h2>
              <Row>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ 自主研发的核心算法</li>
                    <li className="mb-2">✓ 厘米级测量精度</li>
                    <li className="mb-2">✓ 完善的技术支持体系</li>
                    <li className="mb-2">✓ 丰富的项目实施经验</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ 多项国家专利技术</li>
                    <li className="mb-2">✓ 通过 ISO9001 质量认证</li>
                    <li className="mb-2">✓ 服务超过 500 家客户</li>
                    <li className="mb-2">✓ 7×24 小时技术支持</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h2 className="h4 mb-3">联系我们</h2>
              <Row>
                <Col md={6}>
                  <p><strong>总部地址：</strong>北京市海淀区中关村科技园区</p>
                  <p><strong>服务热线：</strong>400-888-8888</p>
                  <p><strong>技术支持：</strong>support@pipeline-survey.com</p>
                </Col>
                <Col md={6}>
                  <p><strong>商务咨询：</strong>business@pipeline-survey.com</p>
                  <p><strong>工作时间：</strong>周一至周五 9:00-18:00</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <Container className="py-5 text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold mb-4">专业地下管线测绘解决方案</h1>
            <p className="lead mb-4">
              提供高精度的地下管线数据采集、管理和分析服务，
              助力城市基础设施建设与维护
            </p>
            <Button variant="primary" size="lg" className="me-3">
              免费下载
            </Button>
            <Button variant="outline-secondary" size="lg">
              了解详情
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5">核心功能</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-geo-alt text-primary" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <Card.Title>高精度定位</Card.Title>
                <Card.Text>
                  支持 GPS、北斗等多种定位系统，厘米级精度测量
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-cloud-upload text-primary" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 5 1.857 5 4.5 0 2.5-2.14 4.5-5 4.5-.246 0-.484-.016-.718-.046a3.5 3.5 0 0 0-2.991 2.97A4.498 4.498 0 0 0 8 13.5c2.766 0 5-2.11 5-4.75a4.5 4.5 0 0 0-1.077-2.967A5.473 5.473 0 0 0 13 4.5a5.5 5.5 0 0 0-5-5.5c-1.82 0-3.44.715-4.593 1.842A5.49 5.49 0 0 0 1.5 4a5.5 5.5 0 0 0 2.906 5.342zm1.102 2.48a2.5 2.5 0 0 1 2.992-2.97A4.498 4.498 0 0 0 8 13c-1.313 0-2.5-.642-2.997-1.68a2.5 2.5 0 0 1-1.102-2.478z"/>
                    <path d="M7.646 5.646a.5.5 0 0 1 .708 0L9 6.293V2.5a.5.5 0 0 1 1 0v3.793l.646-.647a.5.5 0 1 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
                <Card.Title>数据云同步</Card.Title>
                <Card.Text>
                  实时上传测量数据，多设备自动同步，安全备份
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-bar-chart text-primary" viewBox="0 0 16 16">
                    <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
                  </svg>
                </div>
                <Card.Title>数据分析</Card.Title>
                <Card.Text>
                  专业的数据处理和分析工具，生成详细报告
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CTA Section */}
      <Container className="py-5 text-center">
        <Card className="bg-primary text-white p-5">
          <Card.Body>
            <h2 className="mb-4">立即开始使用</h2>
            <p className="mb-4">注册即可获得 30 天免费试用</p>
            <Button variant="light" size="lg" as={Link as any} to="/register">
              免费注册
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

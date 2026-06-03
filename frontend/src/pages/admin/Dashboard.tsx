import { Container, Row, Col, Card } from "react-bootstrap";

export default function AdminDashboard() {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col md={2} className="bg-dark min-vh-100">
          <div className="p-3">
            <h5 className="text-white mb-4">管理后台</h5>
            <nav className="nav flex-column">
              <a className="nav-link text-white active" href="/admin/dashboard">
                📊 数据概览
              </a>
              <a className="nav-link text-white" href="/admin/users">
                👥 用户管理
              </a>
              <a className="nav-link text-white" href="/admin/data">
                📁 数据管理
              </a>
              <a className="nav-link text-white" href="/admin/files">
                📤 文件管理
              </a>
              <a className="nav-link text-white" href="/">
                🏠 返回首页
              </a>
              <a className="nav-link text-white" href="/login">
                🚪 退出登录
              </a>
            </nav>
          </div>
        </Col>
        <Col md={10}>
          <div className="p-4">
            <h1 className="mb-4">数据概览</h1>
            <Row className="g-4 mb-4">
              <Col md={3}>
                <Card className="border-0 shadow-sm bg-primary text-white">
                  <Card.Body>
                    <h3>1,234</h3>
                    <p className="mb-0">注册用户</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="border-0 shadow-sm bg-success text-white">
                  <Card.Body>
                    <h3>5,678</h3>
                    <p className="mb-0">管线数据</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="border-0 shadow-sm bg-info text-white">
                  <Card.Body>
                    <h3>890</h3>
                    <p className="mb-0">上传文件</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="border-0 shadow-sm bg-warning text-white">
                  <Card.Body>
                    <h3>12</h3>
                    <p className="mb-0">待处理任务</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white">
                <h5 className="mb-0">最近活动</h5>
              </Card.Header>
              <Card.Body>
                <p className="text-muted mb-0">暂无活动记录</p>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

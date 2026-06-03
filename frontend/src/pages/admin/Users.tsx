import { Container, Card, Table, Button } from "react-bootstrap";

export default function AdminUsers() {
  // 示例用户数据
  const users = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', company: '某某工程公司', status: '正常' },
    { id: 2, name: '李四', email: 'lisi@example.com', company: '某某设计院', status: '正常' },
    { id: 3, name: '王五', email: 'wangwu@example.com', company: '某某建设集团', status: '禁用' },
  ];

  return (
    <Container fluid className="p-4">
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">用户管理</h5>
          <Button variant="primary">添加用户</Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>邮箱</th>
                <th>公司</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company}</td>
                  <td>
                    <span className={`badge ${user.status === '正常' ? 'bg-success' : 'bg-danger'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2">编辑</Button>
                    <Button variant="outline-danger" size="sm">删除</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

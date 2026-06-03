import { Container, Card, Table, Button, Badge } from "react-bootstrap";

export default function AdminData() {
  // 示例数据
  const dataRecords = [
    { id: 1, name: '朝阳区供水管线', type: '供水', points: 120, uploadTime: '2024-01-15', status: '已审核' },
    { id: 2, name: '海淀区排水管线', type: '排水', points: 85, uploadTime: '2024-01-14', status: '待审核' },
    { id: 3, name: '西城区燃气管线', type: '燃气', points: 200, uploadTime: '2024-01-13', status: '已审核' },
  ];

  return (
    <Container fluid className="p-4">
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">管线数据管理</h5>
          <Button variant="primary">导入数据</Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>项目名称</th>
                <th>类型</th>
                <th>测点数</th>
                <th>上传时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {dataRecords.map(record => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.type}</td>
                  <td>{record.points}</td>
                  <td>{record.uploadTime}</td>
                  <td>
                    <Badge bg={record.status === '已审核' ? 'success' : 'warning'}>
                      {record.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2">查看</Button>
                    <Button variant="outline-success" size="sm" className="me-2">下载</Button>
                    <Button variant="outline-secondary" size="sm">审核</Button>
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

import { Container, Card, Table, Button } from "react-bootstrap";

export default function AdminFiles() {
  // 示例文件数据
  const files = [
    { id: 1, name: 'survey_data_20240115.dat', size: '24.5 MB', uploadUser: '张三', uploadTime: '2024-01-15 10:30', downloads: 12 },
    { id: 2, name: 'pipeline_report.pdf', size: '5.2 MB', uploadUser: '李四', uploadTime: '2024-01-14 15:20', downloads: 8 },
    { id: 3, name: 'measurement Points.csv', size: '1.8 MB', uploadUser: '王五', uploadTime: '2024-01-13 09:15', downloads: 25 },
  ];

  return (
    <Container fluid className="p-4">
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">文件管理</h5>
          <Button variant="primary">上传文件</Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>文件名</th>
                <th>大小</th>
                <th>上传人</th>
                <th>上传时间</th>
                <th>下载次数</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {files.map(file => (
                <tr key={file.id}>
                  <td>
                    <span className="text-primary">{file.name}</span>
                  </td>
                  <td>{file.size}</td>
                  <td>{file.uploadUser}</td>
                  <td>{file.uploadTime}</td>
                  <td>{file.downloads}</td>
                  <td>
                    <Button variant="outline-success" size="sm" className="me-2">下载</Button>
                    <Button variant="outline-primary" size="sm" className="me-2">预览</Button>
                    <Button variant="outline-danger" size="sm">删除</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="border-0 shadow-sm mt-4">
        <Card.Header className="bg-white">
          <h5 className="mb-0">上传文件</h5>
        </Card.Header>
        <Card.Body>
          <div className="border border-dashed border-2 rounded p-4 text-center">
            <p className="text-muted mb-3">拖拽文件到此处或点击上传</p>
            <Button variant="outline-primary">选择文件</Button>
            <p className="text-muted small mt-2 mb-0">支持格式：.dat, .csv, .dxf, .dwg (最大 100MB)</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

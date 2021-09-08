import { Col, Layout, Row } from "antd";

import "./App.css";

function App() {
    const { Header, Content } = Layout;

    return (
        <Layout>
            <Header>
                <Row justify="center">
                    <Col>
                        <h1 style={{color: "white"}}>Cockatails App</h1>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row>
                    <Col span={24}>
                        <p>My app for cocktails</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default App;

import { Layout, Row, Col, Tabs } from "antd";

import "./HomePage.scss";
import { IHomePageProps, MY_LISTS_TAB_KEY, SEARCH_TAB_KEY } from "./HomePage";
import CocktailsSearchComponent from "../../components/CocktailsSearchComponent";
import MyCocktailsComponent from "../../components/MyCocktailsComponent";

const HomePage: React.FC<IHomePageProps> = () => {
    const { Header, Content } = Layout;
    const { TabPane } = Tabs;

    return (
        <Layout className="home-page">
            <Header>
                <Row justify="center">
                    <Col>
                        <h1 className="title">Cockatails App</h1>
                    </Col>
                </Row>
            </Header>
            <Content className="content">
                <Row>
                    <Col span={24}>
                        <Tabs defaultActiveKey={SEARCH_TAB_KEY} centered>
                            <TabPane tab="Search cocktails" key={SEARCH_TAB_KEY}>
                                <CocktailsSearchComponent />
                            </TabPane>
                            <TabPane tab="My cocktails lists" key={MY_LISTS_TAB_KEY}>
                                <MyCocktailsComponent />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default HomePage;
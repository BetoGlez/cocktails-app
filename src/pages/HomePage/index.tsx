import { Layout, Row, Col, Tabs } from "antd";

import "./HomePage.scss";
import { IHomePageProps, MY_LISTS_TAB_KEY, SEARCH_TAB_KEY } from "./HomePage";
import CocktailsSearchComponent from "../../components/CocktailsSearchComponent";
import MyCocktailsComponent from "../../components/MyCocktailsComponent";

const HomePage: React.FC<IHomePageProps> = () => {
    return (
        <Layout className="home-page">
            <Layout.Header className="header-bar">
                <Row gutter={[8, 0]} justify="center" align="middle">
                    <Col>
                        <h1 className="title">Cocktails App</h1>
                    </Col>
                    <Col>
                        <img className="logo" src="https://www.pngplay.com/wp-content/uploads/6/Drink-Logo-PNG-Clipart-Background.png" alt="logo" />
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content className="content">
                <div className="main-container">
                    <Row>
                        <Col span={24}>
                            <Tabs defaultActiveKey={SEARCH_TAB_KEY}>
                                <Tabs.TabPane tab="Search cocktails" key={SEARCH_TAB_KEY}>
                                    <CocktailsSearchComponent />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="My cocktails lists" key={MY_LISTS_TAB_KEY}>
                                    <MyCocktailsComponent />
                                </Tabs.TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            </Layout.Content>
        </Layout>
    );
};

export default HomePage;
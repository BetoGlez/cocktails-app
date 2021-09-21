import { Layout, Row, Col, Tabs } from "antd";

import "./HomePage.scss";
import { MY_LISTS_TAB_KEY, SEARCH_TAB_KEY } from "./HomePage";
import CocktailsSearchPage from "../CocktailsSearchPage";
import MyCocktailsPage from "../MyCocktailsPage";
import { Assets } from "../../app-constants";

const HomePage: React.FC = () => {
    return (
        <Layout className="home-page">
            <Layout.Header className="header-bar">
                <Row gutter={[8, 0]} justify="center" align="middle">
                    <Col>
                        <h1 className="title">Cocktails App</h1>
                    </Col>
                    <Col>
                        <img className="logo" src={Assets.Images.APP_LOGO} alt="logo" />
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content className="content">
                <div className="main-container">
                    <Row>
                        <Col span={24}>
                            <Tabs defaultActiveKey={SEARCH_TAB_KEY}>
                                <Tabs.TabPane tab="Search cocktails" key={SEARCH_TAB_KEY}>
                                    <CocktailsSearchPage />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="My cocktails lists" key={MY_LISTS_TAB_KEY}>
                                    <MyCocktailsPage />
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
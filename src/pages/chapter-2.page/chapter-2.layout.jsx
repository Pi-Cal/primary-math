import React from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Layout = ({children}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <>
            <Button className="home-btn rounded-pill" onClick={handleClick}>Về trang chủ</Button>
            <Tabs defaultActiveKey="example">
                {children.map(child => (
                    <Tab key={child.props.tabKey} eventKey={child.props.tabKey} title={child.props.name}>
                        {child}
                    </Tab> 
                ))}
            </Tabs>
        </>
    )
}

export default Layout;
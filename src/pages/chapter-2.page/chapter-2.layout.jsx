import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const Layout = ({children}) => {
    return (
        <Tabs defaultActiveKey="practice" className="chapter-body">
            {children.map(child => (
                <Tab key={child.props.tabKey} eventKey={child.props.tabKey} title={child.props.name}>
                    {child}
                </Tab> 
            ))}
        </Tabs>
    )
}

export default Layout;
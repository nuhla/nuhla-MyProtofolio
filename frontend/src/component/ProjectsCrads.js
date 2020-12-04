import { Card,Skeleton ,Avatar } from 'antd';
import React from "react"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const { Meta } = Card;


class ProjectsCard extends React.Component{

  render() {
    return (
      <>
        <Card
          style={{ width: 400 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
         
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          
        </Card>
      </>
    );
  }
}

export default ProjectsCard
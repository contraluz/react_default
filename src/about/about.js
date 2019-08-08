import React from 'react';
import './about.css';
import { Table, Radio, Input, Button } from 'antd';

function about(props) {
  const columns = [
    {
      title: '城市',
      dataIndex: 'cityName',
      key: 'cityName',
    },
    {
      title: '公司名称',
      dataIndex: 'CoName',
      key: 'CoName',
    },
    {
      title: '公司地址',
      dataIndex: 'CoAddress',
      key: 'CoAddress',
    },
    {
      title: '绑定',
      dataIndex: 'bind',
      key: 'bind',
      render: bindValue => {
        return (
          <Radio defaultChecked={bindValue}>A</Radio>
        )
      }
    }
  ]
  const data = [
    {
      key: '1',
      cityName: 'John Brown',
      CoName: '阿里巴巴',
      CoAddress: 'New York No. 1 Lake Park!',
      bind: false
    },
    {
      key: '2',
      cityName: 'Jim Green',
      CoName: '腾讯',
      CoAddress: 'New York No. 2 Lake Park@',
      bind: true
    },
    {
      key: '3',
      cityName: 'Joe Black',
      CoName: '百度',
      CoAddress: 'New York No. 3 Lake Park#',
      bind: false
    },
    {
      key: '4',
      cityName: 'John Brown1',
      CoName: '阿里巴巴1',
      CoAddress: 'New York No. 1 Lake Park$',
      bind: false
    },
    {
      key: '5',
      cityName: 'Jim Green1',
      CoName: '腾讯1',
      CoAddress: 'New York No. 2 Lake Park%',
      bind: false
    },
    {
      key: '6',
      cityName: 'Joe Black1',
      CoName: '百度1',
      CoAddress: 'New York No. 3 Lake Park……',
      bind: false
    }
  ]
  return (
    <div className="about">
      hello {props.name}!
      <Table columns={columns} dataSource={data} />
      <div className="commit">
        <Input placeholder="Remember to us"/>
      </div>
      <Button type="primary">提交</Button>
    </div>
  );
}

export default about;

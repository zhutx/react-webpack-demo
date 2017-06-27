import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

function Index() {
    return (
      <div className="container">
        <h1>Antd DatePicker!</h1>
        <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
      </div>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));

export default Index;

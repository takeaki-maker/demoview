import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default class App extends React.Component {
  state = {
    page: '',
    list: []
  }

  handleChange = event => {
    this.setState({ page: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const page = {
      page: !this.state.page ? "" : '/' + this.state.page
    };

    function axiosTest() {
      var list = [];
      const {data} = axios.get(`http://localhost:8080/api/books`+page.page,{withCredentials: false})
      .then(res => {
        console.log(res);
        console.log(res.data);
        res.data.map((data) => {
          console.log(data.name);
          list.push(<ul><ls>{data.name}</ls></ul>);
        })
        ReactDOM.render(list, document.getElementById('root'));
      }).catch(response => {
        console.log("失敗");
      })
    }
    axiosTest();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            page:
            <input type="text" name="page" onChange={this.handleChange} />
          </label>
          <br/>
          <button type="submit">api呼び出し</button>
          <br/>
        </form>
      </div>
    )
  }
}
axios.defaults.withCredentials = true; // global に設定してしまう場合
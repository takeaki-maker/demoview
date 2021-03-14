import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default class App extends React.Component {
  state = {
    page: '',
  }

  handleChange = event => {
    this.setState({ page: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const page = {
      page: !this.state.page ? "" : '/' + this.state.page
    };

    axios.get(`http://localhost:8080/api/books`+page.page)
      .then(res => {
        console.log(res);
        console.log(res.data);
        return (res);
      }).catch(response => {
        console.log("失敗");
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            page:
            <input type="number" name="page" onChange={this.handleChange} />
          </label>
          <button type="submit">api呼び出し</button>
        </form>
      </div>
    )
  }
}axios.defaults.withCredentials = true; // global に設定してしまう場合
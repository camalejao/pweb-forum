import React, { Component } from 'react';
import axios from 'axios';

class PostCreator extends Component {

  constructor(props) {
    super(props);
    this.state = { titulo: '', mensagem: '' };

    this.changeData = this.changeData.bind(this);
    this.createPost = this.createPost.bind(this);
  }


  createPost(event) {    
    console.log('Titulo: ' + this.state.titulo);
    console.log('Mensagem: ' + this.state.mensagem);

    axios.post('http://localhost:3333/addPost', {titulo: this.state.titulo, mensagem: this.state.mensagem})
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
      event.preventDefault();
  }

  changeData(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createPost} method="POST">
          Título:
              <input type="text" name="titulo" value={this.state.titulo}
            onChange={this.changeData} />
          <br />
          Mensagem:
              <input type="text" name="mensagem" value={this.state.mensagem}
            onChange={this.changeData} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostCreator;

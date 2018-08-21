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
      <div className="row justify-content-center">
        <div className="card w-50 m-5">
         <div class="card-header">
         <div className="form-row justify-content-center">
         Postagens
         </div>
         </div>
          <form onSubmit={this.createPost} method="POST">
          <div className="form-group">
          <div className="form-row justify-content-center mb-2">
          Assunto :
                <input type="text" name="titulo" value={this.state.titulo}
              onChange={this.changeData} />
          </div>
          </div>
          <div className="form-group">
          <div className="form-row justify-content-center mb-2">
            Pergunta :
                <input type="text" name="mensagem" value={this.state.mensagem}
              onChange={this.changeData} />
          </div>
          </div>
          <div className="form-group">
          <div className="form-row justify-content-center">
            <input type="submit" value="Submit" className="btn-danger rounded"/>
          </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostCreator;

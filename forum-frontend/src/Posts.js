import React, { Component } from 'react';
import axios from 'axios';
import PostCreator from './PostCreator';
import 'bootstrap/dist/css/bootstrap.min.css';

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://localhost:3333/getPosts').then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-light">Fórum</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {this.state.posts.map(post =>
              <div key={post.id} className="card mb-3">

                <div className="card-header">
                  <h6 className="card-title">{post.titulo}</h6>
                </div>
                <div className="card-body">
                  <p className="card-text">{post.mensagem}</p>
                </div>

              </div>
            )}
          </div>
        </div>
        <PostCreator />
      </div>
    );
  }
}

export default Posts;

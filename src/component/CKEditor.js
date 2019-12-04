import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { axios } from "../configs/axios";
import { connect } from "react-redux";
import Cookies from "js-cookie"

class MyUploadAdapter {
  constructor(loader) {
    // CKEditor 5's FileLoader instance.
    this.loader = loader;

    // URL where to send files.
    this.url = 'http://localhost:3000/post-images';
  }

  // Starts the upload process.
  upload() {
    return new Promise((resolve, reject) => {
      this._initRequest();
      this._initListeners(resolve, reject);
      this._sendRequest();
    });
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest() {
    const xhr = this.xhr = new XMLHttpRequest();

    xhr.open('POST', this.url, true);
    xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = ` ${loader.file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const response = xhr.response;

      if (!response || response.error) {
        console.log(response.error);
        return reject(response && response.error ? response.error.message : genericErrorText);
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      resolve({
        default: response.url
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', evt => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest() {
    this.loader.file.then(file => {
      const data = new FormData();
      data.append('upload', file);

      this.xhr.send(data);
    })
  }
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
    }
  }

  onGetValue = event => {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name] : value
    })
  }
  onPost = event => {
    event.preventDefault()
    const { title, content } = this.state
    this.props.onPost({
      title,
      content,
      user: this.props.user.username
    })
 
  }


  render() {

    const {title} = this.state
    return (
      <div className="App">
    <h3 style={{ textTransform: 'capitalize',margin:'20px'}}>Hi,{this.props.user.username}</h3>
        <form style={{ margin: 10 }} onSubmit={this.onPost}>
          <h3>Add new topic</h3>
          <input
            value={title}
            name='title'
            type='text'
            placeholder="Enter Title"
            onChange={this.onGetValue}
          />
          <br />
          <CKEditor
            onInit={
              editor => {

              }
            }
            editor={ClassicEditor}
            
            onChange={(event, editor) => {
              this.setState({
                content: editor.getData()
              })

            }}
            data={""}
            config={{
              extraPlugins: [MyCustomUploadAdapterPlugin],
            }}
          />
          <br />
          <button type="submit" onClick={this.onPost}>Post</button>
        </form>
      </div>
    );
  }
}

 
const mapStateToProps = rootReducerState => {
	return {
		user: rootReducerState.loginReducer
	}
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onPost: (data) => {
      axios({
        method: "POST",
        url: "/api/post",
        headers: {
          token: Cookies.get('token')
        },
        data: {
          user:data.user,
          title: data.title,
          content: data.content,
          date:data.createdAt
        }
      })
        .then(res => {
          console.log(res.data.data)
          // alert(`Post success`)
          let info = res.data.data
          dispatch({
            type: "POST",
            data: {
              user:data.user,
              content: info.content,
              title: info.title,
              date:info.createdAt
            }
          })
        })
        .catch(err => console.log(err))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App) 
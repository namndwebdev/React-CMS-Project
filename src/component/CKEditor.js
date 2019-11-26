import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


class MyUploadAdapter {
  constructor( loader ) {
      // CKEditor 5's FileLoader instance.
      this.loader = loader;

      // URL where to send files.
      this.url = 'http://localhost:3000/post-images';
  }

  // Starts the upload process.
  upload() {
      return new Promise( ( resolve, reject ) => {
          this._initRequest();
          this._initListeners( resolve, reject );
          this._sendRequest();
      } );
  }

  // Aborts the upload process.
  abort() {
      if ( this.xhr ) {
          this.xhr.abort();
      }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest() {
      const xhr = this.xhr = new XMLHttpRequest();

      xhr.open( 'POST', this.url, true );
      xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners( resolve, reject ) {
      const xhr = this.xhr;
      const loader = this.loader;
      const genericErrorText = 'Couldn\'t upload file:' + ` ${ loader.file.name }.`;

      xhr.addEventListener( 'error', () => reject( genericErrorText ) );
      xhr.addEventListener( 'abort', () => reject() );
      xhr.addEventListener( 'load', () => {
          const response = xhr.response;

          if ( !response || response.error ) {
            console.log(response.error);
              return reject( response && response.error ? response.error.message : genericErrorText );
          }

          // If the upload is successful, resolve the upload promise with an object containing
          // at least the "default" URL, pointing to the image on the server.
          resolve( {
              default: response.url
          } );
      } );

      if ( xhr.upload ) {
          xhr.upload.addEventListener( 'progress', evt => {
              if ( evt.lengthComputable ) {
                  loader.uploadTotal = evt.total;
                  loader.uploaded = evt.loaded;
              }
          } );
      }
  }

  // Prepares the data and sends the request.
  _sendRequest() {
      this.loader.file.then(file=>{
        const data = new FormData();
        data.append( 'upload', file );

        this.xhr.send( data );
      })
  }
}

function MyCustomUploadAdapterPlugin( editor ) {
  editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      return new MyUploadAdapter( loader );
  };
}

class App extends Component {
  constructor(props){
    super(props)

    this.editor = {}
  }

  render() {
    return (
      <div className="App">
        <CKEditor
          onInit= {
            editor=>{
              this.editor = editor
            }
          }
          editor={ClassicEditor}
          onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( data );
        } }
          data=""
          config={{
            extraPlugins: [ MyCustomUploadAdapterPlugin ],
        }}
        />
        <button type="submit">Submit</button>
      </div>
    );
  }
}
export default App
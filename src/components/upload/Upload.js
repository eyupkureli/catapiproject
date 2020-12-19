import React from "react";
import {Redirect} from "react-router"

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
    // console.log('handle uploading-', this.state.imagePreviewUrl);

    var myHeaders = new Headers();
    //myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "cdbfbcaf-5f5f-4abf-9f4d-fc5974aacf9c");

    var formdata = new FormData();
    formdata.append("file", this.state.file);
    formdata.append("sub_id", this.state.file.name);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    fetch("https://api.thecatapi.com/v1/images/upload", requestOptions)
      .then((response) => response.text())
      .then((result) => {console.log(result); this.props.history.push('/')})
      .catch((error) => console.log("error", error));
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={(e) => this._handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={(e) => this._handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
        <div className="imgPreview">{$imagePreview}</div>
      </div>
    );
  }
}

export default Upload;

import React, { useState } from "react";
import { Form, Input, Button, Upload, notification, Card } from "antd";
import { connect, useDispatch } from "react-redux";
import { createPost } from "../../features/posts/postsSlice";
import "./CreatePost.scss";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc(null);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("text", event.target.text.value);
    if (event.target.image.files[0]) {
      formData.set("image", event.target.image.files[0]);
    }

    try {
      dispatch(createPost(formData)).unwrap();
      notification.success({ message: "Product successfully uploaded " });
      setPreviewSrc(null);
    } catch (error) {
      console.error(error);
      notification.error({ message: "Failed to create post" });
    }
    navigate("/");
  };

  return (
    <div className="cardCreatePostContainer">
      <form className="formPost" action="" onSubmit={handleSubmit}>
        {previewSrc && (
          <div className="CreatePostDiv">
            <img src={previewSrc} alt="Vista previa" className="preview" />
          </div>
        )}
        <div className="CreatePostDiv">
          <Input name="text" placeholder="Text" />
        </div>
        <div className="CreatePostDiv">
          <label htmlFor="file" className="custom-file-label">
            Select picture
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            name="image"
            id="file"
            className="input-file"
            accept="image/*"
          />
        </div>
        <div className="CreatePostDiv">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default connect()(CreatePost);

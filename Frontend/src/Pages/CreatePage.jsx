import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export default function CreatePage() {
  const [title, settitle] = useState("");
  const [summary, setsummary] = useState("");
  const [files, setfiles] = useState("");
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleSubmit = (e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();
    axios.post("http://localhost:3000/post", data);
  };

  return (
    <div className="bg-gray-100 flex justify-center h-screen w-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mt-10 w-11/12 "
      >
        <input
          placeholder="Title"
          type="Title"
          onChange={(e) => settitle(e.target.value)}
          className="bg-gray-50 w-full border input"
        />
        <input
          onChange={(e) => setsummary(e.target.value)}
          placeholder="Summary"
          type="Summary"
          className="bg-gray-50 w-full border input"
        />
        <input
          onChange={(e) => setfiles(e.target.files)}
          type="file"
          placeholder="choose picture"
          className="w-full border bg-gray-50 p-2 input"
        />
        <ReactQuill
          theme="snow"
          value={content}
          onChange={(newValue) => setContent(newValue)}
          className="w-full text-black border mb-10"
          modules={modules}
          formats={formats}
        />
        <button type="submit" className="btn btn-success text-white w-full">
          Create Post
        </button>
      </form>
    </div>
  );
}

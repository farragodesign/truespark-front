import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {Helmet} from 'react-helmet'

function CreateHtml() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const navigate = useNavigate()

  function copyToClipboard() {
    navigator.clipboard.writeText(html);
    alert("HTML Code Copied to clipboard");
  }

  


  return (
    <div className="min-h-screen overflow-scroll w-full mt-20 p-4 container_here">
      <Helmet>
        <title>Create HTML</title>
        <meta name="description" content="Create HTML" />
        <meta name="keywords" content="Create HTML" />
        <link rel="canonical" href="https://www.truespark.live/html" />
        <meta name="robots" content="noindex" />
      </Helmet>
    <div className="h-screen w-full flex-wrap lg:flex-nowrap   p-4 border border-gray-700 rounded-md">
      <div className="w-full h-full">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="container_toolbar"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        placeholder="Enter your content here"
         spellCheck={true}
        toolbarStyle={{
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "0.5rem"
        }}
        editorStyle={{
          border: "1px solid #ddd",
          borderBottomColor: "black",
          borderRadius: "0.5rem",
          padding: "0.5rem",
          overflow: "scroll",
          height: "100%"
        }}
        wrapperStyle={{
          position: "relative",
          width: "100%",
          height: "80%",

        }}
      />
       <div className="flex justify-around text-center mt-36 lg:mt-20">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            copyToClipboard();
          }}
        >
          Copy to Clipboard
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            // go to last visited route
             navigate(-1)

          }}
        >
          Go back
        </button>
      </div>
      </div>
    </div>
    </div>
  );
}

export default CreateHtml;
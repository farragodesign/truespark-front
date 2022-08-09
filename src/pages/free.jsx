import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function CreateHtml() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const navigate = useNavigate()

  function copyToClipboard() {
    navigator.clipboard.writeText(html);
    alert("HTML Code Copied to clipboard");
  }

  return (
    <div className="min-h-screen overflow-scroll w-full mt-20 p-4 ">
    <div className="h-screen w-full flex-wrap lg:flex-nowrap  flex p-4 border border-gray-700 rounded-md">
      <div className="w-full h-full lg:w-1/2 overflow-scroll">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        placeholder="Enter your content here"
         spellCheck={true}
        toolbarStyle={{
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "0.5rem",
        }}
        editorStyle={{
          border: "1px solid #ddd",
          borderRadius: "0.5rem",
          padding: "0.5rem",
          minHeight: "20rem",
          overflow: "scroll",
        }}
      />
      </div>
      <div className="bg-black hidden h-full  lg:mt-0 lg:block w-2  lg:h-full rounded-md"></div>
      <div className="w-full lg:w-1/2  h-full p-2">
        <div className="p-4 lg:mt-0 mt-10 border-2 border-gray-700 rounded-lg w-full h-3/4 overflow-scroll">
      <p className="text-center">{html}</p>
      </div>
      <div className="flex justify-around text-center mt-10">
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
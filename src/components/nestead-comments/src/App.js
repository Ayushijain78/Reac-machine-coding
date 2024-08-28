import "./App.css";
import NesteadComments from "./components/NesteadComments";
import { comment } from "./components/config";
import useComment from "./components/customHook/useComment";
import { useEffect, useState } from "react";

function App() {
  const [commentsData, setCommentsData] = useState(comment);

  const { addComment, editComment, deleteComments } = useComment();

  const handleAddComment = (commentId, message) => {
    const newComments = addComment(commentsData, commentId, message);
    const getNewComments = { ...newComments };
    localStorage.setItem("comments", JSON.stringify(getNewComments));
    setCommentsData(getNewComments);
  };

  const handleEditComment = (commentId, message) => {
    const editedComments = editComment(commentsData, commentId, message);
    const updatedEditedComments = { ...editedComments };
    localStorage.setItem("comments", JSON.stringify(updatedEditedComments));
    setCommentsData(updatedEditedComments);
  };

  const handleDeleteComment = (commentId) => {
    const newDeletedComments = deleteComments(commentsData, commentId);
    const deleted = { ...newDeletedComments };
    localStorage.setItem("comments", JSON.stringify(deleted));
    setCommentsData(deleted);
  };

  useEffect(() => {
    setCommentsData(
      JSON.parse(localStorage.getItem("comments")) || commentsData
    );
  }, []);
  
  return (
    <div className="container">
      <h1>Nestead comments</h1>
      <NesteadComments
        comments={commentsData}
        showInput={true}
        handleAddComment={handleAddComment}
        handleEditComment={handleEditComment}
        handleDeleteComment={handleDeleteComment}
      />
    </div>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import Action from "./Action";

const NesteadComments = ({
  comments,
  showInput,
  handleAddComment,
  handleEditComment,
  handleDeleteComment,
}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const replyRef = useRef(null);

  const onAddComment = (message) => {
    handleAddComment(comments.id, message);
    setIsReply(false);
  };

  const onEditComment = (message) => {
    handleEditComment(comments.id, message);
    setIsEdit(false);
  };

  const onDeleteComment = () => {
    handleDeleteComment(comments.id);
  };

  useEffect(() => {
    replyRef?.current?.focus();
  }, []);
  
  return (
    <div>
      <div>
        {showInput ? (
          <RenderInput
            inputRef={replyRef}
            handleSendClick={onAddComment}
            buttonText="Send"
          />
        ) : (
          <div className="nestead-comment">
            {isEdit ? (
              <RenderInput
                buttonText="Edit"
                placeholder="Edit your Text"
                inputClass="editInputClass"
                defaultValue={comments.message}
                handleSendClick={onEditComment}
                renderButton={
                  <button
                    className="btn cancel-btn"
                    onClick={() => setIsEdit(false)}
                  >
                    Cancel
                  </button>
                }
              />
            ) : (
              <div>{comments.message}</div>
            )}
            <div className="flex">
              <Action
                style={"reply-btn"}
                text="Reply"
                onClick={() => setIsReply(!isReply)}
                renderButton={
                  <button
                    className="btn cancel-btn"
                    onClick={() => setIsReply(false)}
                  >
                    Cancel
                  </button>
                }
              />
              <Action
                style={"edit-btn"}
                text="Edit"
                onClick={() => setIsEdit(() => !isEdit)}
              />
              <Action
                style={"delete-btn"}
                text="Delete"
                onClick={onDeleteComment}
              />
            </div>
          </div>
        )}
        <div className="mt-10">
          {isReply && (
            <RenderInput
              inputRef={replyRef}
              buttonText="Reply"
              handleSendClick={onAddComment}
            />
          )}
        </div>
      </div>
      <div className="left">
        {comments.reply.map((comment) => {
          return (
            <NesteadComments
              handleEditComment={handleEditComment}
              key={comment.id}
              comments={comment}
              handleAddComment={handleAddComment}
              handleDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NesteadComments;

export const RenderInput = ({
  handleSendClick,
  buttonText,
  inputRef,
  renderButton,
  inputClass,
  placeholder = "",
  defaultValue,
}) => {
  const [commentText, setCommentText] = useState(defaultValue || "");
  const handleMessageChange = (event) => {
    setCommentText(event.target.value);
  };
  const onSendClick = () => {
    if (commentText.trim().length > 1) {
      handleSendClick(commentText);
    }
  };
  return (
    <div className={renderButton ? "input-edit-container" : "input-container"}>
      <input
        ref={inputRef}
        type="text"
        value={commentText}
        className={inputClass || "input"}
        onChange={handleMessageChange}
        placeholder={placeholder}
      />
      <div className="flex mb-10">
        <button className="btn button" onClick={onSendClick}>
          {buttonText}
        </button>
        {renderButton}
      </div>
    </div>
  );
};

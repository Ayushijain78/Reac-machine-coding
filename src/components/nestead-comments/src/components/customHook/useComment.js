const useComment = () => {
  const addComment = (tree, id, message) => {
    if (tree.id === id) {
      tree.reply.unshift({
        id: Date.now(),
        message: message,
        reply: [],
      });
      return tree;
    }
    const newTree = tree.reply.map((item) => {
      return addComment(item, id, message);
    });
    return { ...tree, reply: newTree };
  };
  const editComment = (tree, id, message) => {
    if (tree.id === id) {
      tree.message = message;
      return tree;
    }
    tree.reply.map((item) => {
      return editComment(item, id, message);
    });

    return tree;
  };
  const deleteComments = (tree, id) => {
    tree.reply = tree.reply.filter((item) => {
      if (item.id === id) {
        return false;
      } else {
        deleteComments(item, id);
        return true;
      }
    });

    return tree;
  };
  return { addComment, editComment, deleteComments };
};

export default useComment;

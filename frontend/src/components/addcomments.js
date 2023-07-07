import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
} from "@material-tailwind/react";

function AddComments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentToUpdate, setCommentToUpdate] = useState("");
  const [updatedComment, setUpdatedComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      return;
    }
    const comment = {
      id: uuidv4(),
      text: newComment,
      time: format(new Date(), "dd/MM/yyyy HH:mm"),
      avatar: "https://via.placeholder.com/40",
      name: "John Doe",
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  const handleUpdateComment = (event) => {
    const value = event.target.value;
    setUpdatedComment(value);
  };

  const handleEditForm = (event) => {
    event.preventDefault();
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentToUpdate) {
        return {
          ...comment,
          text: updatedComment,
        };
      }
      return comment;
    });
    setComments(updatedComments);
    setCommentToUpdate("");
    setUpdatedComment("");
  };

  const handleEditPopover = (commentId) => {
    setCommentToUpdate(commentId);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap mx-auto lg:max-w-5xl mt-10">
        <div className="flex border-b border-gray-700">
          <h2 className="my-2 text-sm tracking-widest text-gray-500 title-font">
            Recent Comments
          </h2>
        </div>
        <div>
          {comments.length > 0 &&
            comments.map((item) => (
              <div
                key={item.id}
                className="flex content-center py-4 border-b border-gray-700"
              >
                <div className="flex w-full px-10 justify-between">
                  <div className="flex flex-col flex-wrap items-center">
                    <div className="flex mb-4">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={item.avatar}
                        alt="Avatar"
                      />
                      <p className="ms-3">{item.name}</p>
                    </div>
                    <div className="flex flex-col items-start justify-between w-full space-y-2 sm:flex-row">
                      <p className="text-xs text-gray-500">{item.time} </p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <p className="text-md">{item.text}</p>
                  </div>
                  <div className="flex flex-col">
                    <Button
                      className="text-red-500 text-xs hover:text-red-700 ml-2 mb-2 font-semibold bg-transparent"
                      onClick={() => handleDeleteComment(item.id)}
                    >
                      DELETE
                    </Button>
                    <Popover className="bg-gray-500">
                      <PopoverHandler
                        onClick={() => handleEditPopover(item.id)}
                      >
                        <Button className="bg-transparent text-xs text-gray-500 ml-2">
                          Edit
                        </Button>
                      </PopoverHandler>
                      <PopoverContent className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100">
                        <form
                          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                          onSubmit={handleEditForm}
                        >
                          <div className="mb-4 flex flex-col gap-6">
                            <Input
                              size="lg"
                              className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                              value={updatedComment}
                              onChange={handleUpdateComment}
                            />
                          </div>
                          <Button
                            className="text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
                            fullWidth
                            type="submit"
                          >
                            Edit
                          </Button>
                        </form>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            ))}
          <div className="flex items-center mt-4">
            <textarea
              className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
            />
            <button
              className="ms-5 px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddComments;

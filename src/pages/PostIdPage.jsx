import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostsService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostsById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getComments(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostsById();
    fetchComments();
  }, []);

  return (
    <>
      <div>Вы открыли страницу поста в ID: {params.id} </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Коментарии:</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => {
            return (
              <div key={comm.id} style={{ marginTop: "15px" }}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PostIdPage;

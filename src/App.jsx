import { useMemo, useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "AAA ", body: "CCC" },
    { id: 2, title: " LL", body: "RRR" },
    { id: 3, title: " BB", body: "fff" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("ОТРАБОТАЛА ФУНКЦИЯЯ ГЕТСОРТЕДПОСТС");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndAearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className="App">
        <PostForm create={createPost} />
        <hr style={{ margin: "15px 0 " }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList
          remove={removePost}
          posts={sortedAndAearchedPosts}
          title={"Посты про JS"}
        />
      </div>
    </>
  );
}

export default App;

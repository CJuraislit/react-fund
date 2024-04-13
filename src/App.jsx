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

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "AAA ", body: "CCC" },
    { id: 2, title: " LL", body: "RRR" },
    { id: 3, title: " BB", body: "fff" },
  ]);

  const [selectedSort, setselectedSort] = useState("");
  const [searchQuery, setsearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("ОТРАБОТАЛА ФУНКЦИЯЯ ГЕТСОРТЕДПОСТС");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndAearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPost = (sort) => {
    setselectedSort(sort);
    console.log(sort);
  };

  return (
    <>
      <div className="App">
        <PostForm create={createPost} />
        <hr style={{ margin: "15px 0 " }} />
        <div>
          <MyInput
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            placeholder="Поиск..."
          />
          <MySelect
            value={selectedSort}
            onChange={sortPost}
            defaultValue={"Сортировка"}
            options={[
              { value: "title", name: "По названию" },
              { value: "body", name: "По описанию" },
            ]}
          />
        </div>
        {sortedAndAearchedPosts.length ? (
          <PostList
            remove={removePost}
            posts={sortedAndAearchedPosts}
            title={"Посты про JS"}
          />
        ) : (
          <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
        )}
      </div>
    </>
  );
}

export default App;

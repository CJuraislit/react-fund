import { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python 1", body: "Description" },
    { id: 2, title: "Python 2", body: "Description" },
    { id: 3, title: "Python 3", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <>
      <div className="App">
        <form action="">
          {/* Управляемый компонент */}
          <MyInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Название поста"
          />
          {/* Неуправляемый\Неконтролируемый компонет */}
          <MyInput
            ref={bodyInputRef}
            type="text"
            placeholder="Описание поста"
          />
          <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={"Посты про JS"} />
        <PostList posts={posts2} title={"Посты про Python"} />
      </div>
    </>
  );
}

export default App;

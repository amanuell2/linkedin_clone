import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import FilipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
//firebase
import { db } from "./firebase";
import firebase from "firebase";
const Feed = () => {
  const user = useSelector(selectUser);
  // set states
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // load posts
  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  // save post
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              id="input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption
            Icon={ImageIcon}
            title="Photo"
            color="#7FC15E"
          ></InputOption>
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#7FC15E"
          ></InputOption>
          <InputOption
            Icon={EventIcon}
            title="Event"
            color="#7FC15E"
          ></InputOption>
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          ></InputOption>
        </div>
      </div>
      {/* posts */}
      <FilipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FilipMove>
    </div>
  );
};

export default Feed;

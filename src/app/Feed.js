import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

//firebase
import { db } from "./firebase";
import firebase from "firebase";
function Feed() {
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
        setInput("");
      });
  }, []);

  // save post
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Amanuel",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;

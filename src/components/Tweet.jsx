import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({tweet: {message, timestamp, user: {name, image, handle}}}) {

  return (
    <div className="tweet">
      <ProfileImage img={image} />

      <div className="body">
        <div className="top">       
          <User user={name} handle={handle}/>
          <Timestamp time={timestamp} />
        </div>
        <Message msg={message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

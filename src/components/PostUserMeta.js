import TimeAgo from "react-timeago";

const PostUserMeta = ({ FullName, Avatar, ProfileURL, Location, DateTime }) => {
  return (
    <div className="PostUserMeta">
      <a href={ProfileURL}>
        <img src={Avatar} alt={FullName} />
      </a>
      <div className="PostUserMeta-Meta">
        <p className="m-0">
          <a href={ProfileURL}>
            <strong>{FullName}</strong>
          </a>
        </p>
        <p className="m-0 text-muted">
          <TimeAgo date={DateTime} />
          <br />
          {Location}
        </p>
      </div>
    </div>
  );
};

export default PostUserMeta;

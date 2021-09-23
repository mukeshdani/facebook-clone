const PostAttachment = ({ item }) => {
  return (
    item.Attachment && (
      <>
        {item.Type === "Picture" && (
          <img src={item.Attachment} alt={item.Text} />
        )}
        {item.Type === "Video" && (
          <div class="embed-container">
            <iframe
              src={
                "https://www.youtube-nocookie.com/embed/" +
                item.Attachment.replace("https://youtu.be/", "") +
                "?controls=0&autohide=2"
              }
              title={item.Text}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </>
    )
  );
};

export default PostAttachment;

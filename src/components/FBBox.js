const FBBox = ({ Heading, children, className }) => {
  return (
    <div className={"FBBox" + (className ? " " + className : "")}>
      {Heading && <h3>{Heading}</h3>}
      {children}
    </div>
  );
};

export default FBBox;

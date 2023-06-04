const InputForm = ({
  infos,
  invalide,
  disable,
  val,
  label_hidden,
  ...rest
}) => {
  const invalideStyle = {
    border: "1px solid red",
  };

  return (
    <div {...rest}>
      <div className="form-group ">
        <label
          className="form-label"
          htmlFor="email"
          style={{ color: "#07004D", fontSize: "16px" }}
        >
          {infos.label}
        </label>

        <div className="input-group">
          <img src={infos.icon} className="icon" />
          <input
            className="form-control"
            style={invalide ? invalideStyle : {}}
            name={infos.label}
            type={infos.type}
            placeholder={infos.placeHolder}
            required
            disabled={disable ? true : false}
            value={val}
            onChange={(e) => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default InputForm;

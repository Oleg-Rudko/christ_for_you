import CallBackIcon from "../../Footer/FooterCall/FooterIcons/FooterIconCall.svg";
const CallBack = () => {
  return (
    <div>
      <div className="CallBackBlock">
        <a href="/" className="CallBackNumber">
          <img
            width="22px"
            height="22px"
            className="CallBackSvg"
            src={CallBackIcon}
            alt=""
          ></img>
          Дізнатись телефон
        </a>
      </div>
    </div>
  );
};

export default CallBack;

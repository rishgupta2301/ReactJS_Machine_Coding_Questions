import "./albumstyles.css";

const Modal = ({ albumId, val}) => {
  return (
    <div className="modal">
      <ul>
        {val[albumId]?.map((item) => {
            return (
                <>
              <li className="modal-item">{item.title}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Modal;

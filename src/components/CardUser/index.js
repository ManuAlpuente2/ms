import "./CardUser.scss";

const CardUser = () => {
  return (
    <div className="card-user">
      <div className="avatar">MA</div>
      <div className="card-user_info">
        <div className="card-user_name">Manu Alpuente</div>
        <div className="card-user_email">manualpuente@gmail.com</div>
      </div>
      <i className="icon icon-chevron-selector" />
    </div>
  );
};

export default CardUser;

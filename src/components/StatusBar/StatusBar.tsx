import "./StatusBar.scss";

type StatusBarProps = {
  mode: string;
};

export default function StatusBar({ mode }: StatusBarProps) {
  return (
    <div
      className={
        mode === "light" ? "info-status" : "info-status info__dark--div"
      }
    >
      <div className="info-status__div">
        <h4 className="info-status__header">Status</h4>
        <div className="info-status__box">
          <div className="info-status__circle"></div>
          <h3 className="info-status__status">Pending</h3>
        </div>
      </div>
      <div className="info-status__buttons">
        <button
          className={
            mode === "light"
              ? "buttons__button buttons--edit"
              : "buttons__button buttons--edit buttons--edit-dark"
          }
        >
          Edit
        </button>
        <button className="buttons__button buttons--delete">Delete</button>
        <button className="buttons__button buttons--paid">Mark as Paid</button>
      </div>
    </div>
  );
}

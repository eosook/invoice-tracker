import "./StatusBar.scss";

type StatusBarProps = {
  mode: string;
  status: string;
  toggleEditModal: () => void;
};

export default function StatusBar({ mode, status, toggleEditModal }: StatusBarProps) {
  return (
    <div
      className={
        mode === "light" ? "info-status" : "info-status info__dark--div"
      }
    >
      <div className="info-status__div">
        <h4 className="info-status__header">Status</h4>
        <div className={status == "pending" ? "info-status__box info-status__box--orange": "info-status__box info-status__box--green"}>
          <div className={status == "pending" ? "info-status__circle info-status__circle--orange": "info-status__circle info-status__circle--green"}></div>
          <h3 className={status == "pending" ? "info-status__status info-status__status--orange": "info-status__status info-status__status--green"}>{status}</h3>
        </div>
      </div>
      <div className="info-status__buttons">
        <button
          className={
            mode === "light"
              ? "buttons__button buttons--edit"
              : "buttons__button buttons--edit buttons--edit-dark"
          }
          onClick={toggleEditModal}
        >
          Edit
        </button>
        <button className="buttons__button buttons--delete">Delete</button>
        <button className="buttons__button buttons--paid">Mark as Paid</button>
      </div>
    </div>
  );
}

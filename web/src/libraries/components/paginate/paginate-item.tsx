import "./paginate-item.scss";

interface Props {
  page: number;
  isActive: boolean;
  onclick: any;
}

export const PaginateItem = (props: Props) => {
  return (
    <div
      className={`paginate-item ${props.isActive ? "active" : ""}`}
      onClick={() => {
        props.onclick(props.page);
      }}
    >
      <span>{props.page}</span>
    </div>
  );
};

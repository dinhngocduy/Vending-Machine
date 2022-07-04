import "./slide-bar-item.scss";

interface SlideBarItemProps {
  name: string;
  icon?: any;
}

export const SlideBarItemComponent = (props: SlideBarItemProps) => {
  return (
    <>
      <div className="slidebar-item">
        <div className="slidebar-item-icon" >{props.icon}</div>
          <p className="slidebar-item-titile" id="slidebar-item-titile">
            {props.name}
          </p>
      </div>
    </>
  );
};

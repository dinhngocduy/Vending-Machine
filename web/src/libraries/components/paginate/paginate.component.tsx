import {
  FirstPageIcon,
  LastPageIcon,
  NextPageIcon,
  PrevPageIcon,
} from "libraries/icons/svg/paginate/paginate-icon";
import { PaginateItem } from "./paginate-item";
import "./paginate.scss";

interface Props {
  totalPage: number;
  currenPage: number;
  onChange: any;
  numPageDisplay?: number;
}

const DEFAULT_NUM_DISPLAY_PAGE = 5;

export const PaginateComponent = (props: Props) => {
  const { totalPage, currenPage, onChange, numPageDisplay } = props;
  var pages: number[] = [];
  var displayPage;
  var num_display_page: number;

  if (totalPage <= DEFAULT_NUM_DISPLAY_PAGE) {
    num_display_page = totalPage;
  } else {
    num_display_page = numPageDisplay || DEFAULT_NUM_DISPLAY_PAGE;
  }

  for (var i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  if (currenPage - 3 <= 0) {
    displayPage = pages.splice(0, num_display_page);
  } else if (currenPage + 3 >= totalPage) {
    displayPage = pages.splice(totalPage - num_display_page, num_display_page);
  } else {
    displayPage = pages.splice(currenPage - 3, num_display_page);
  }

  const onNext = () => {
    if (currenPage < totalPage) {
      onChange(currenPage + 1);
    }
  };

  const onPrev = () => {
    if (currenPage > 1) {
      onChange(currenPage - 1);
    }
  };

  const onFirst = () => {
    onChange(1);
  };

  const onLast = () => {
    onChange(totalPage);
  };

  const onChoose = (page: number) => {
    onChange(page);
  };

  return (
    <div className="paginate-ctn">
      {currenPage <= 1 ? (
        <div className="paginate-item" />
      ) : (
        <>
          <div className="paginate-item" onClick={onFirst}>
            <FirstPageIcon />
          </div>
          <div className="paginate-item" onClick={onPrev}>
            <PrevPageIcon />
          </div>
        </>
      )}
      {displayPage.map((element) => {
        return (
          <PaginateItem
            page={element}
            isActive={currenPage === element}
            onclick={onChoose}
          />
        );
      })}
      {currenPage >= totalPage ? (
        <div className="paginate-item" />
      ) : (
        <>
          <div className="paginate-item" onClick={onNext}>
            <NextPageIcon />
          </div>
          <div className="paginate-item" onClick={onLast}>
            <LastPageIcon />
          </div>
        </>
      )}
    </div>
  );
};

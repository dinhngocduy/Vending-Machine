import React from "react";
import "./cell-table-item.scss";
import CellProductMappingAdapter from "./cell-table-item.adapter";
import { ICellTableItem } from "./cell-table-item.interfaces";
import isNumeric from "libraries/utils/is-numeric";
import convertToCurrency from "libraries/utils/convert-to-currency";
import isArray from "libraries/utils/is-array";
import LoadingSpinnerScreen from "libraries/components/loading-spinner/loading-spinner.screen";
import formatCurrencyToVnd from "libraries/utils/format-currency-to-vnd";
import { EditProductMapIcon, DeleteProductMapIcon } from "libraries/icons/icon";

const CellTableItemScreen = (props: ICellTableItem) => {
  const {
    canEdit,
    contentIsCurrency,
    isTh,
    className,
    listOptions,
    hasListOptions,
    isError,
    hasEditedByPm,
    changeContent,
    content,
    isGetting,
    child,
    style
  } = props;

  let tempContent = content + "" || "";

  if (contentIsCurrency && !isNumeric(tempContent)) {
    tempContent = "0";
  }

  let eleContent = (
    <p>
      {contentIsCurrency
        ? formatCurrencyToVnd(parseInt(tempContent))
        : tempContent}
    </p>
  );

  //   if (!canEdit) {
  //     if (isTh) {
  //       return (
  //         <th scope="row" className={className}>
  //           {eleContent}
  //         </th>
  //       );
  //     }
  //     return <td className={className}>{eleContent}</td>;
  //   }

  const {
    isEditing,
    inputRef,
    autocompleteRef,
    handleClickCell,
    removeValue,
    changeOption,
  } = CellProductMappingAdapter(props);

  let tempListOptions: any[] = [];

  if (isArray(listOptions) && listOptions.length > 0) {
    try {
      tempListOptions = listOptions.filter((item: any) => {
        return item.name.includes(content);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const showElement = () => {
    // if (isEditing) {
    //   return (
    //     <div className="autocomplete" ref={autocompleteRef}>
    //       <input
    //         type="text"
    //         name=""
    //         value={
    //           contentIsCurrency
    //             ? convertToCurrency(content.toString())
    //             : content
    //         }
    //         ref={inputRef}
    //         onChange={(e: any) => {
    //           changeContent(e.target.value);
    //         }}
    //         id=""
    //         autoComplete="off"
    //         aria-haspopup="true"
    //         aria-disabled="false"
    //         aria-readonly="false"
    //         aria-autocomplete="list"
    //         aria-owns=""
    //       />
    //       <div className="autocomplete__icon flex-center">
    //         {isGetting ? (
    //           <LoadingSpinnerScreen className="small"></LoadingSpinnerScreen>
    //         ) : (
    //           <IoMdClose onClick={removeValue}></IoMdClose>
    //         )}
    //       </div>

    //       {/* <IoMdClose onClick={ removeValue }></IoMdClose> */}

    //       {hasListOptions && (
    //         <ul
    //           className={
    //             "autocomplete__suggests" +
    //             (tempListOptions.length > 0 ? "" : " h-200 flex-center")
    //           }
    //         >
    //           {tempListOptions.length > 0 ? (
    //             tempListOptions.map((item: any, index: number) => (
    //               <li key={index} onClick={() => changeOption(item.name)}>
    //                 <p>{item.name}</p>
    //               </li>
    //             ))
    //           ) : (
    //             <div className="no-data">
    //               <RiDatabase2Line className="img-24"></RiDatabase2Line>
    //               <span>Không có data</span>
    //             </div>
    //           )}
    //         </ul>
    //       )}
    //     </div>
    //   );
    // }
    // else{

    // }
    if (child) {
      return <>{child}</>;
    }

    return (
      <>
        {hasEditedByPm && <div className="cell-pm__has-edited-icon"></div>}
        {eleContent}
        {/* <div className="cell-pm__edit-icon">
          <HiOutlinePencil></HiOutlinePencil>
        </div> */}
      </>
    );
  };

  return (
    <td
      onClick={handleClickCell}
      className={"cell-pm " + className + (isError ? " error" : "")}
      style = {style}
    >
      {showElement()}
    </td>
  );
};

export default CellTableItemScreen;

// export default React.memo(CellTableItemScreen, (prev: any, next: any) => {
//   return (
//     prev.isError === next.isError &&
//     prev.content === next.content &&
//     prev.hasEditedByPm === next.hasEditedByPm &&
//     prev?.listOptions === next?.listOptions &&
//     prev?.getListOptions === next?.getListOptions
//   );
// });

export const FlexRowLg10 = (props) => {
  {
    /*Este componente de */
  }
  return (
    <div className={"row" + " " + props.rowClasses}>
      <div className="col-lg-1"></div>
      <div className="col-lg-10">{props.children}</div>
      <div className="col-lg-1"></div>
    </div>
  );
};

export const FlexRow3ColLg = (props) => {
  {
    /*Este componente de */
  }
  return (
    <div className={"row" + " " + props.rowClasses}>
      <div className={"col-lg-" + props.col1 + " " + props.col1Classes}></div>
      <div className={"col-lg-" + props.col2 + " " + props.col2Classes}>
        {props.children}
      </div>
      <div className={"col-lg-" + props.col3 + " " + props.col3Classes}></div>
    </div>
  );
};

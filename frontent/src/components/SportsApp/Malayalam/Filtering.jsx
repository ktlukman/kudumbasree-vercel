export const Filtering = ({orderChange, calendarPicker, searchfromList, dateVal, searchVal}) => {
  const code1 = "{IaoIcn¡pI";
    return (
      <>
      <div className="container my-5">
      <div className="row">
      <div className="col-12 col-md-3">
            <div className="asc">
              <label className="form-label ml-normal">{code1}</label>
              <select className="form-select ml-normal" onChange={orderChange}>
                <option>apIfnÂ \n¶v Xmtgm«v</option>
                <option>Xmsg \n¶v apIfntem«v</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-3">
          <label className="form-label ml-normal">tNÀ¯ Znhkw</label>
            <input value={dateVal} onChange={calendarPicker} type="date" className="form-control" />
          </div>
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-3">
            <input value={searchVal} onChange={searchfromList} type="text" className="form-control" placeholder="Search..." />
          </div>
      </div>
      </div>
      </>
    )
  }
  
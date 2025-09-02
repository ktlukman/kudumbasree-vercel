export const Filtering = ({orderChange, calendarPicker, searchfromList, dateVal, searchVal}) => {
    return (
      <>
      <div className="container my-5">
      <div className="row">
      <div className="col-12 col-md-3">
            <div className="asc">
              <label className="form-label">Assending/Descending</label>
              <select className="form-select" onChange={orderChange}>
                <option>Assending</option>
                <option>Descending</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-3">
          <label className="form-label">Joining Date</label>
            <input value={dateVal} onChange={calendarPicker} type="date" className="form-control" />
          </div>
          <div className="col-3"></div>
          <div className="col-12 col-md-3">
            <input value={searchVal} onChange={searchfromList} type="text" className="form-control" placeholder="Search..." />
          </div>
      </div>
      </div>
      </>
    )
  }
  
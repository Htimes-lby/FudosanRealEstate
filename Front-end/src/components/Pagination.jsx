import React from "react";
import _ from 'lodash';

const Pagination = (props) => {
    const { active, size, step, onClickHandler } = props;
  
    const showingNumbers = step * 2 + 1;
    let startNumber = 2;
    let startArrayNumber = props.step;
  
    let needStartDots = false;
    let needEndDots = false;
  
    if (active > step) {
      startArrayNumber = active - step;
  
      needStartDots = active > step + startNumber ? true : false;
    }
  
    if (size > showingNumbers) {
      {
        needEndDots = size > active + step + 1 ? true : false;
  
        if (size < active + step + 1) {
          startArrayNumber = size - showingNumbers;
        }
      }
    }
  
    let contentNumber;
  
    return (
      <ul className="pagination">
        {active > 1 ? (
          <li
            className="page-item prev arrow-icon"
            onClick={() => onClickHandler(active - 1)}
          >
            &#x2039;
          </li>
        ) : (
          <li className="page-item prev arrow-icon disabled">&#x2039;</li>
        )}
        {size > showingNumbers + startNumber ? (
          <React.Fragment>
            <li
              onClick={(e) => onClickHandler(e.currentTarget.textContent)}
              className={`page-item ${active === 1 && "active"}`}
            >
              1
            </li>
  
            {needStartDots && <span>...</span>}
            {_.times(showingNumbers, (i) => (
              <li
                key={i++}
                {...(contentNumber = needStartDots
                  ? startArrayNumber
                  : startNumber)}
                {...startNumber++}
                {...startArrayNumber++}
                className={`page-item ${active === contentNumber && "active"}`}
                onClick={(e) => onClickHandler(e.currentTarget.textContent)}
              >
                {contentNumber}
              </li>
            ))}
            {needEndDots && <span>...</span>}
            <li
              className={`page-item ${active === size && "active"}`}
              onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            >
              {size}
            </li>
          </React.Fragment>
        ) : (
          ((startArrayNumber = 1),
          _.times(size, (i) => (
            <li
              key={i++}
              className={`page-item ${active === startArrayNumber && "active"}`}
              onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            >
              {startArrayNumber++}
            </li>
          )))
        )}
        {active < size ? (
          <li
            className="page-item next arrow-icon"
            onClick={() => onClickHandler(active + 1)}
          >
            &#8250;
          </li>
        ) : (
          <li className="page-item next arrow-icon disabled">&#8250;</li>
        )}
      </ul>
    );
  };
  
  const PayOrder = (props) => {
    const [active, setActive] = React.useState(1);
  
    const activeHandler = (clickedActive) => {
      setActive(parseInt(clickedActive));
    };
  
    return (
      <Pagination
        active={active}
        size={99}
        step={2}
        onClickHandler={activeHandler}
      />
    );
  };
  
  export default PayOrder;
  
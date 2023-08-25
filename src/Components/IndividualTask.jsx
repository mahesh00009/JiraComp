import React from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaEdit,
  FaWindowClose,
} from "react-icons/fa";
import Dates from "./Dates";

const IndividualTask = ({
  elem,
  index,
  arrowLeftHandler,
  arrowRightHandler,
  length,
}) => {
  const editHandler = (id) => {
    const arrayToEdit = elem.id;

    console.log(`from array ${arrayToEdit} index ${index}`);
  };

  return (
    <div className={`individualTasks ${elem.category}`}>
      <div className="headingHandles">
        {elem.id !== 0 && (
          <FaArrowLeft
            className="icon leftIcon"
            onClick={arrowLeftHandler.bind(this, elem, index)}
          />
        )}

        <p className="title">{elem.task}</p>

        {elem.id !== length - 1 && (
          <FaArrowRight
            className="icon rightIcon"
            onClick={arrowRightHandler.bind(this, elem, index)}
          />
        )}
      </div>

      <div className="icons">
        <FaEdit onClick={editHandler} />
        <FaWindowClose />
      </div>

      <div className="dates">
        <Dates time={elem.time} dates={elem.dates} />
      </div>
    </div>
  );
};

export default IndividualTask;

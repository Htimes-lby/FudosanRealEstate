import React from 'react';

const ShowContents = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <div className="p-5"> {text}</div>;
  }

  const truncatedText = text.substring(0, maxLength) + '...';

  return (
    <div title={text}>
      {truncatedText}
    </div>
  );
};

export default ShowContents;
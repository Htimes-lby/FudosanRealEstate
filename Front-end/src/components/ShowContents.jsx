import React from 'react';

const ShowContents = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <div > {text}</div>;
  }

  const truncatedText = text.substring(0, maxLength) + '...';

  return (
    <div title={text}>
      {truncatedText}
    </div>
  );
};

export default ShowContents;
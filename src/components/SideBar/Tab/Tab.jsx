const Tab = ({ onClick, element }) => {
  return <button onClick={() => onClick(element)}>{element}</button>;
};

export default Tab;

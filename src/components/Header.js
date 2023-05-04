export default ({ users }) => {
  if (users.length === 0) return <></>;

  return (
    <div className="header">
      Last employee is&nbsp;
      <strong>{users[users.length - 1].name}</strong>
    </div>
  );
};

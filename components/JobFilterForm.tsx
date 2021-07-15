const JobFilterForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="data" id="data" />
        <input type="text" name="location" id="location" />
        <input type="checkbox" name="fullTime" id="fullTime"></input>
        <label htmlFor="fulltime">Full Time Only</label>{' '}
      </form>
      <h1>Job Filter Form</h1>
    </div>
  );
};

export default JobFilterForm;

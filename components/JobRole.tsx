type CompProps = {
  role:
    | {
        content: string;
        items: string[];
      }
    | undefined;
};

const JobRole = ({ role }: CompProps) => {
  return (
    <div>
      <h1>What you will do</h1>
      <p>{role?.content}</p>
      <ol className="list-decimal list-inside">
        {role?.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default JobRole;

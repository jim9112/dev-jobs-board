type CompProps = {
  requirements:
    | {
        content: string;
        items: string[];
      }
    | undefined;
};
const JobRequirements = ({ requirements }: CompProps) => {
  return (
    <div>
      <h1>Requirements</h1>
      <p>{requirements?.content}</p>
      <ul className="list-disc list-inside">
        {requirements?.items?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobRequirements;

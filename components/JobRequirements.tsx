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
    <div className="mb-12">
      <h1 className="font-bold text-xl text-primary-very-dark-blue mb-5">
        Requirements
      </h1>
      <p className="text-base text-secondary-dark-grey mb-10">
        {requirements?.content}
      </p>
      <ul className="list-inside text-base text-secondary-dark-grey">
        {requirements?.items?.map((item, i) => (
          <li className="flex" key={i}>
            <span className="inline-block text-primary-violet font-bold text-lg mr-8">
              •
            </span>
            <span className="inline-block">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobRequirements;

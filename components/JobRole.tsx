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
    <div className="mb-12">
      <h1 className="font-bold text-xl text-primary-very-dark-blue dark:text-secondary-white mb-5">
        What you will do
      </h1>
      <p className="text-base text-secondary-dark-grey mb-10">
        {role?.content}
      </p>
      <ol className="list-inside text-base text-secondary-dark-grey">
        {role?.items.map((item, i) => (
          <li className="flex" key={i}>
            <span className="w-3 inline-block text-primary-violet text-base mr-8">
              {i + 1}
            </span>{' '}
            <span className="inline-block">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default JobRole;

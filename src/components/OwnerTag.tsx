type OwnerTagProps = {
  owner: string;
};

export const OwnerTag = ({ owner }: OwnerTagProps) => {
  return <span className="owner-tag">Owner: {owner}</span>;
};

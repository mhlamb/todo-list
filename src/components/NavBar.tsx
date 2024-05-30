type Props = {
  title: string;
};
const NavBar = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center border-1 py-8">
      <h1 className="text-3xl">{title}</h1>
    </div>
  );
};

export default NavBar;

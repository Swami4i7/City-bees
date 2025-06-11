import { Button } from "../ui/button";

const LargeSubmitButton = ({
  name,
  onClick,
  isPending
}: {
  name: string;
    onClick?: () => void;
  isPending?:boolean
}) => {
  return (
    <Button className="m-4 min-w-96 md:w-3/4" onClick={onClick} disabled={isPending}>
      {name}
    </Button>
  );
};
export default LargeSubmitButton
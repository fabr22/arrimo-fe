import { Button } from "antd";
import Link from "next/link";

const BackButton = () => {
  return (
    <Button>
      <Link href={"/"}>Back to main page</Link>
    </Button>
  );
};

export default BackButton;

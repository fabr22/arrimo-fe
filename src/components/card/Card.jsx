import { Card } from "antd";
import Link from "next/link";

const gridStyle = {
  textAlign: "center",
  cursor: "pointer",
};

const CustomCard = ({ title, href, children }) => {
  return (
    <Link href={href}>
      <Card style={gridStyle} title={`${title}`} hoverable={true}>
        {children}
      </Card>
    </Link>
  );
};

export default CustomCard;

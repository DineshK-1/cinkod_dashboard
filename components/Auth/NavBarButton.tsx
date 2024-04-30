import { LoggedInCollegeAdmin } from "@/@types";
import { PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function NavBarButton({
  user
}: {
  user: LoggedInCollegeAdmin | null;
}) {
  if (user) {
    return (
      <Link href={"/profile"}>
        <PersonIcon />
      </Link>
    );
  }
  return <Link href={"/auth/login"}>Login</Link>;
}

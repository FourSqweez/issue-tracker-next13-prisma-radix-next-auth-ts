import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button className="relative">
      <Pencil2Icon className="absolute left-12" />
      <Link
        href={`/issues/edit/${issueId}`}
        className="absolute flex h-full w-full items-center justify-center"
      >
        Edit Issue
      </Link>
    </Button>
  );
};

export default EditIssueButton;

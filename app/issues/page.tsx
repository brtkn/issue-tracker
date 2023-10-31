import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div>
      Issues Page
      <Button>
        <Link href="/issues/new">Add Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;

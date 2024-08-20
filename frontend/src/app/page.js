import Image from "next/image";
import AllTask from "./all-task";
import CompletedTask from "./completed-task/page";

export default function Home() {

  return (
    <main>
      {/* All task page */}
      <AllTask />

    </main>
  );
}

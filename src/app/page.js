import Image from "next/image";
import AllTask from "./pages/AllTask";
import CompletedTask from "./pages/CompletedTask";

export default function Home() {
  return (
    <main>
      {/* All task page */}
      <AllTask />
      {/* Completed task */}
      <CompletedTask />
    </main>
  );
}

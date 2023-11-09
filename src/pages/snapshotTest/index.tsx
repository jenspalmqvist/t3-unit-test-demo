import Link from "next/link";

export default function SnapshotTest() {
  return (
    <>
      <h1>Snapshot test page</h1>
      <div>Snapshot test 2</div>
      <Link href="/?hasReturned=true">Go back to home page</Link>
    </>
  );
}

import Image from "next/image";
import Tensorflow from "./components/TensorFlow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tensorflow />
    </main>
  );
}

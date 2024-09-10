import ItemList from "./components/Items";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen  sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col gap-2  items-center sm:items-start">
        <ItemList />
      </main>
    </div>
  );
}

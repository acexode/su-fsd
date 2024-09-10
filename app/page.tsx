import ItemList from "./components/ItemListContainer";

export default function Home() {
  return (
    <div className="w-100 grid items-center justify-items-center min-h-screen  sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex-col gap-2  items-center sm:items-start">
        <ItemList />
      </main>
    </div>
  );
}

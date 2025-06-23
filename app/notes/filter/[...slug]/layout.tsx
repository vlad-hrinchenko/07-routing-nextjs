// app/notes/filter/[...slug]/layout.tsx

export default function NotesLayout({
  children,
  modal,
  sidebar,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "240px" }}>{sidebar}</aside>
      <main style={{ flex: 1, position: "relative" }}>
        {children}
        {modal}
      </main>
    </div>
  );
}

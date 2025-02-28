export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>👕 Shopping Mall 👔</header>
      <main>{children}</main>
      <footer>Copyright 2025 By Kim. </footer>
    </div>
  );
}

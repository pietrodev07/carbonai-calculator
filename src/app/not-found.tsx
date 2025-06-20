import Link from "next/link";

const copy = {
  title: "404 - Not Found",
  linkLabel: "Back to the homepage",
};

export default function NotFoundPage() {
  return (
    <main className="full-page-centered">
      <h1 className="title">{copy.title}</h1>
      <Link href="/" className="underlined">
        {copy.linkLabel}
      </Link>
    </main>
  );
}

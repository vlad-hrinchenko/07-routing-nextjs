import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function NotesByTagPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const tag = params.slug?.[0] || "All";
  const tagForQuery = tag === "All" ? undefined : tag;
  const data = await fetchNotes("", 1, 12, tagForQuery);

  return (
    <NotesClient notes={data.notes} totalPages={data.totalPages} tag={tag} />
  );
}

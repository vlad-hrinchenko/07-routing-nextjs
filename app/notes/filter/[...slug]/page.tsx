import NotesClient from "./Notes.client";
import { fetchNotes } from "../../../../lib/api"; //
import type { Note } from "../../../../types/note";

export interface PaginatedNotesResponse {
  notes: Note[];
  page: number;
  totalPages: number;
  totalResults: number;
}
export default async function NotesByTagPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const tag = params.slug?.[0];
  const data: PaginatedNotesResponse = await fetchNotes(tag);

  return <NotesClient notes={data.notes} totalPages={data.totalPages} />;
}

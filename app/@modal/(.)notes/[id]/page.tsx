import { fetchNoteById } from "@/lib/api";
import NotePreview from "./NotePreview.client";

interface PageProps {
  params: { id: string };
}

export default async function NoteModalPage({ params }: PageProps) {
  const noteId = Number(params.id);

  const note = await fetchNoteById(noteId);

  return <NotePreview note={note} />;
}

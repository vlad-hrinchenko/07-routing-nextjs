"use client";

import type { Note } from "@/types/note";
import NotesClient from "@/app/notes/Notes.client";

interface Props {
  notes: Note[];
  totalPages: number;
}

export default function NotesClientWrapper({ notes, totalPages }: Props) {
  return <NotesClient notes={notes} totalPages={totalPages} />;
}

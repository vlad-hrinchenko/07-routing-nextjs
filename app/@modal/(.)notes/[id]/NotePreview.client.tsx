"use client";

import Modal from "@/components/Modal/Modal";
import type { Note } from "@/types/note";
import { useRouter } from "next/navigation";

interface Props {
  note: Note;
}

export default function NotePreview({ note }: Props) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <span>{note.tag}</span>
      </div>
    </Modal>
  );
}

"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

export default function NoteModalPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NotePreview noteId={Number(params.id)} />
    </Modal>
  );
}

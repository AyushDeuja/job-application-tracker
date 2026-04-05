"use client";

import { Board } from "@/lib/models/models.types";

interface KanbanBoardProps {
  board: Board;
  userId: string;
}
export function KanbanBoard({ board, userId }: KanbanBoardProps) {
  return (
    <div>
      <div></div>
    </div>
  );
}

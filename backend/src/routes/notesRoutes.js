import express from "express";
import {
  destroyNote,
  getAllNotes,
  postNote,
  updateNote,
  getNoteById,
} from "../controllers/notesControler.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", postNote);
router.put("/:id", updateNote);
router.delete("/:id", destroyNote);

export default router;

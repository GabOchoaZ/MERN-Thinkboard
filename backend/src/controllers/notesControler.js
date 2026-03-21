import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes", error);
    res.status(500).json({ message: "Internal Server Error :(" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const foundedNote = await Note.findById(req.params.id);
    if (!foundedNote)
      return res.status(404).json({ message: "Not Founded :(" });
    res.json(foundedNote);
  } catch (error) {
    console.error("Error in getNoteById", error);
    res.status(500).json({ message: "Internal Server Error :(" });
  }
};

export const postNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title: title, content: content });
    const savedNote = await note.save();
    res.status(201).json({ savedNote });
  } catch (error) {
    console.error("Error in postNote", error);
    res.status(500).json({ message: "Internal Server Error :(" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: title,
        content: content,
      },
      { new: true },
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Not Founded :(" });

    res.status(200).json({ updatedNote });
  } catch (error) {
    console.error("Error in updateNote", error);
    res.status(500).json({ message: "Internal Server Error :(" });
  }
};

export const destroyNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Not Founded :(" });

    res.status(200).json({ message: `deleted: ${deletedNote}` });
  } catch (error) {
    console.error("Error in destroylNote", error);
    res.status(500).json({ message: "Internal Server Error :(" });
  }
};

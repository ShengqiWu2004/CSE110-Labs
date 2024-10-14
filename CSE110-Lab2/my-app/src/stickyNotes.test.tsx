import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
import { dummyNotesList } from "./constants";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });
});

describe( "Read StickyNote", ()=>{
    test("All notes displayed", ()=>{
        render(<StickyNotes/>);
        const screenNotes = screen.getAllByTestId("note-test");
        expect(screenNotes.length).toBe(dummyNotesList.length);
    });
});
describe("Update Note",()=>{
    test("Object Document Value Updating",()=>{
        render(<StickyNotes/>);
        const updateNoteTitleInput = screen.getByTestId("note-title-1");

        updateNoteTitleInput.textContent = "updated note 1 title";

        fireEvent.input(updateNoteTitleInput, { target: { textContent: "updated note 1 title" } });
        const newNoteTitleContent = screen.getByText("updated note 1 title");
        const newNoteTitle = screen.getByTestId("note-title-1");
        expect(newNoteTitle).toBeInTheDocument();
        expect(newNoteTitleContent).toBeInTheDocument();
    });
    
})
describe("Delete Note",()=>{
    test("Object Document Value Deleted",()=>{
        render(<StickyNotes/>);
        const deleteNoteTitle = screen.getByTestId("note-title-2");
        const deleteButton = screen.getByTestId("note-delbutton-2");

        fireEvent.click(deleteButton);

        expect(deleteNoteTitle).not.toBeInTheDocument();
    });
    
})
//list of dum length = rendered note
//id getbyId 
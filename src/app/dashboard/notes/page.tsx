// app/dashboard/notes/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

type Note = {
  id: number;
  content: string;
  timestamp: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteContent, setNewNoteContent] = useState('');

  const handleAddNote = () => {
    if (newNoteContent.trim() !== '') {
      const newNote: Note = {
        id: Date.now(),
        content: newNoteContent,
        timestamp: new Date().toLocaleString(),
      };
      setNotes([newNote, ...notes]);
      setNewNoteContent('');
    }
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="flex justify-center p-6 min-h-screen">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-3xl">📝 Notes</CardTitle>
          <CardDescription>Jot down your thoughts and reminders.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Textarea
              placeholder="Write a new note..."
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              className="resize-none"
            />
            <Button onClick={handleAddNote}>Add Note</Button>
          </div>
          <Separator />
          <h3 className="text-xl font-semibold">Your Notes</h3>
          <ScrollArea className="h-96">
            {notes.length === 0 ? (
              <p className="text-center text-muted-foreground">No notes yet. Add one above!</p>
            ) : (
              <div className="space-y-4">
                {notes.map((note) => (
                  <Card key={note.id} className="relative group hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground">{note.timestamp}</p>
                      <p className="mt-2 text-base">{note.content}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleDeleteNote(note.id)}
                      >
                        Delete
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">Note:Notes will reset on refresh.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
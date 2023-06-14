import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./dialogstyle.css";

const AddTopicDialog = ({ selectedCategory }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:5000/api/topic'; 
    const topicData = {
      // selectedCategory: selectedCategory,
      selectedCategory: "Custom",
      title: title,
      tags: tags.split(',').map(tag => tag.trim()) 
    };
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(topicData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Resetting
    setTitle('');
    setTags('');

    // Close the dialog
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="w-28 bg-magicBlue bg-opacity-10 p-2 mr-5 text-center hover:shadow-sm hover:shadow-magicBlue rounded-lg">
          Add topic
        </button>
      </Dialog.Trigger>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent bg-gradient-to-tr from-black via-gray-950 to-gray-900">
        <Dialog.Title className="text-mercuryWhite">Add Topic</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Add your topic here. Click "Add" when you're done.
        </Dialog.Description>
        <form onSubmit={handleSubmit}>
          <fieldset className="Fieldset">
            <label className="text-white" htmlFor="topic-name">
              Topic
            </label>
            <input
              className="p-2 rounded-lg w-80 ml-1 bg-magicBlue bg-opacity-10 text-white outline-none"
              placeholder="How Fast Turnaround Times in Logo and Website Design Benefit Your Business"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="text-white" htmlFor="tags">
              Tags
            </label>
            <input
              className="p-2 rounded-lg overflow-y-scroll ml-2 w-80 bg-magicBlue bg-opacity-10 outline-none text-white"
              placeholder="Online Presence, Logo Design, Branding"
              value={tags}
              onChange={event => setTags(event.target.value)}
            />
          </fieldset>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-28 mr-3 mt-2 bg-magicBlue bg-opacity-10 p-2 text-center rounded-lg text-mercuryWhite"
            >
              Add
            </button>
          </div>
        </form>
        <Dialog.Close asChild>
          <button
            className="bg-magicBlue bg-opacity-10 rounded-full fixed top-4 right-4 text-white p-2 "
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddTopicDialog;

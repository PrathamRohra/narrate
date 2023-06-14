import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./dialogstyle.css";

const WriteBlog = ({ topic, tags, topicId }) => {

  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = 'https://node-blog-api-61eb.onrender.com/api/blog'; 
    const blogData = {
      title: topic,
      tags: tags,
      content: content,
      topicId: topicId
    };
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    // Close the dialog
    setContent('');
    setOpen(false);
  }
  

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className=" w-28 bg-magicBlue bg-opacity-10 h-10 text-center rounded-lg hover:shadow-sm hover:shadow-magicBlue">
          Write
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent min-w-[80%] min-h[80vh] bg-gradient-to-tr from-black via-gray-950 to-gray-800 bg-opacity-90">
          <Dialog.Title className="text-mercuryWhite">Write Blog</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Write the blog here. Click "Add Blog" when you're done.
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
            <fieldset className="Fieldset">
              <label className="text-white ml-3" htmlFor="topic-name">
                Topic
              </label>
              <input
                className="p-2 pl-4 rounded-lg w-full ml-1 bg-magicBlue bg-opacity-10 text-white outline-none hover:cursor-not-allowed"
                placeholder="How Fast Turnaround Times in Logo and Website Design Benefit Your Business"
                value={topic}
                disabled={true}
              />
            </fieldset>
            <fieldset className="Fieldset">
              
              <textarea
                className="p-4 rounded-lg min-h-[360px] ml-2 w-full bg-magicBlue bg-opacity-10 outline-none text-white"
                placeholder="Start writing your blog here..."
                value={content}
                onChange={(e)=> { setContent(e.target.value) }}
              />
            </fieldset>
           <div className="flex justify-end">
            <button
              type="submit"
              className="w-28 mr-3 mt-2 bg-magicBlue bg-opacity-20 hover:shadow-sm hover:shadow-magicBlue p-2 text-center rounded-lg text-mercuryWhite"
            >
              Add Blog
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
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default WriteBlog;

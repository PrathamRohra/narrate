import React, { useState, useEffect } from "react";
import WriteBlog from "./WriteBlog";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const emojis = ["😀", "🌟", "🍕", "🎉", "🐶", "🌈", "📚", "⚽", "🎵", "🌺"];
const min = 0;
const max = 10;

export default function RecommendedTopics({ selectedCategory }) {
  // console.log(topics);
  // console.log(emojis);
  const [topics, setTopics] = useState({});

  const fetchTopics = (selectedCategory) => {
    fetch(`http://localhost:5000/api/topics?category=${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedTopics = {};
        for (const topic of data) {
          formattedTopics[topic.title] = {
            tags: topic.tags,
            topicId: topic._id,
          };
        }
        setTopics(formattedTopics);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  };

  useEffect(() => {
    fetchTopics(selectedCategory);
  }, [selectedCategory]);

  const handleDelete = (topicId) => {
    console.log(topicId);
    fetch(`http://localhost:5000/api/topic/${topicId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Topic deleted successfully");
          fetchTopics(selectedCategory);
        } else {
          throw new Error("Failed to delete topic");
        }
      })
      .catch((error) => {
        console.error("Error deleting topic:", error);
      });
  };

  return (
    <div>
      {Object.keys(topics).map((text, idx) => {
        console.log(topics);
        console.log("Text: " + text);
        return (
          <div
            className=" bg-gray-600 bg-opacity-10 shadow-sm rounded-lg p-6 h-full flex flex-row justify-between mb-4"
            key={idx}
          >
            <Link to={`/blog/${topics[text].topicId}`}>
              <div className="flex flex-col space-y-3">
                <p className="max-w-5xl">{text}</p>
                <div className="flex flex-row space-x-4">
                  {topics[text].tags.map((tag) => {
                    const rand = Math.floor(Math.random() * (max - min) + min);
                    return (
                      <p className="bg-magicBlue bg-opacity-10 -ml-2 shadow-sm rounded-full p-[6px] min-w-[100px] text-center">
                        {emojis[rand]} {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Link>

            <div className="flex flex-row space-x-2">
              <button
                className="bg-magicBlue bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-lg p-2 hover:shadow-sm hover:shadow-magicBlue"
                type="submit"
                onClick={() => handleDelete(topics[text].topicId)}
              >
                <AiOutlineDelete />
              </button>
              {/* <button className='w-28 h-10 bg-magicBlue bg-opacity-10 text-center rounded-lg'>Write</button> */}
              <WriteBlog
                topic={text}
                tags={topics[text].tags}
                topicId={topics[text].topicId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const emojis = ["😀", "🌟", "🍕", "🎉", "🐶", "🌈", "📚", "⚽", "🎵", "🌺"];
const min = 0;
const max = 10;

export default function BlogContent() {
  const { id } = useParams();
  // console.log(id);
  const [blog, setBlog] = useState({});

  const navigate = useNavigate();
  const fetchBlogs = () => {
    // console.log(`/api/blog/${id}`)
    fetch(`https://node-blog-api-61eb.onrender.com/api/blog/${id}`)
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, [id]);

  console.log(blog);
  return (
    <div className="min-h-screen text-mercuryWhite p-8 bg-gradient-to-tr from-black via-gray-950 to-gray-900">
      <div>
        <h1 className="font-bold text-4xl mb-8">
          <span className="border-b-[1px] border-opacity-5 drop-shadow-xl shadow-magicBlue/20">
            {blog?.title}
          </span>
        </h1>
        <div className="flex flex-row space-x-8">
          {blog?.tags &&
            blog.tags.map((tag, idx) => {
              const rand = Math.floor(Math.random() * (max - min) + min);
              return (
                <p className="bg-magicBlue bg-opacity-10 -ml-2 shadow-sm rounded-full p-1 min-w-[100px] text-center">
                  {emojis[rand]} {tag}
                </p>
              );
            })}
        </div>
        <div className="whitespace-pre-wrap leading-loose ml-2 mt-16 p-10 drop-shadow-xl shadow-magicBlue/20 max-w-[90vw] first-letter:text-3xl first-letter:font-bold first-letter:opacity-90 indent-12">
          {blog ? blog.content : "No Blog Found"}
        </div>
        <div>
          {!blog && (
            <div className="flex flex-row items-center space-x-4 mt-10">
              <button className="bg-magicBlue bg-opacity-10 w-28 h-10 flex justify-center items-center rounded-lg p-2 hover:shadow-sm hover:shadow-magicBlue"
              onClick={()=>{navigate('/')}}>Click Here</button>
              <span>To Go Back</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

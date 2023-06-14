import React, { useEffect, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import RecommendedTopics from "./RecommendedTopics";
import AddTopicDialog from "./AddTopicDialog";

const catgs = ["All", "Design", "Fashion", "Marketing", "Health", "Custom"];

// const allTopics = {
//   "All": ["Tag1", "Tag2", "Tag3", "Tag6"],
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit": ["Tag1", "Tag2", "Tag3"],
//   "Nostrum nulla praesentium, cupiditate, mollitia non eligendi placeat quas expedita ad veritatis natus nisi consequuntur ratione temporibus ullam atque nesciunt quibusdam et!": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor sit amet consectetur adipisicing": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor sit amet consectetur": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor sit amet": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor sit": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum": ["Tag1", "Tag2", "Tag3"],
//   "Lorem": ["Tag1", "Tag2", "Tag3"],
// }

// const designTopics = {
//   "Design": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit": ["Tag1", "Tag2", "Tag3"],
// }
// const fashionTopics = {
//   "Fashion": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit": ["Tag1", "Tag2", "Tag3"],
// }
// const marketingTopics = {
//   "Marketing": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit": ["Tag1", "Tag2", "Tag3"],
// }

// const healthTopics = {
//   "Health": ["Tag1", "Tag2", "Tag3"],
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit": ["Tag1", "Tag2", "Tag3"],
// }

export default function Categories() {
  return (
    <Tabs.Root className="TabsRoot mt-5" defaultValue="tab1">
      <Tabs.List
        className="flex justify-start space-x-12 mb-4"
        aria-label="Select categories"
      >
        {catgs.map((catgName, idx) => {
          return (
            <Tabs.Trigger
              className="TabsTrigger min-w-[80px] hover:shadow-lg hover:shadow-magicBlue p-2 rounded-lg"
              value={idx}
              key={idx}
            >
              {catgName}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {/* All Tab */}
      <Tabs.Content value={0}>
        <div className="shadow-xl rounded-lg pt-8 h-[540px] overflow-y-scroll Scrollbar">
          <div className="flex flex-row justify-between mb-8 pr-1">
            <p className="ml-1">Recommended Topics</p>
            <AddTopicDialog selectedCategory={"All"} />
          </div>
          <div>
            <RecommendedTopics selectedCategory={"All"} />
          </div>
        </div>
      </Tabs.Content>

      {/* DesignTab */}
      <Tabs.Content value={1}>
        <div className="shadow-xl rounded-lg pt-8 h-[540px] overflow-y-scroll Scrollbar">
          <div className="flex flex-row justify-between mb-8 pr-2">
            <p className="ml-1">Recommended Topics</p>
            <AddTopicDialog selectedCategory={"Design"} />
          </div>
          <div>
            <RecommendedTopics selectedCategory={"Design"} />
          </div>
        </div>
      </Tabs.Content>

      {/* Fashion Tab */}
      <Tabs.Content value={2}>
        <div className="shadow-xl rounded-lg pt-8 h-[540px] overflow-y-scroll Scrollbar">
          <div className="flex flex-row justify-between mb-8 pr-2">
            <p className="ml-1">Recommended Topics</p>
            <AddTopicDialog selectedCategory={"Fashion"} />
          </div>
          <div>
            <RecommendedTopics selectedCategory={"Fashion"} />
          </div>
        </div>
      </Tabs.Content>

      {/* Marketing Tab */}
      <Tabs.Content value={3}>
        <div className="shadow-xl rounded-lg pt-8 h-[540px] overflow-y-scroll Scrollbar">
          <div className="flex flex-row justify-between mb-8 pr-2">
            <p className="ml-1">Recommended Topics</p>
            <AddTopicDialog selectedCategory={"Marketing"} />
          </div>

          <div>
          <RecommendedTopics selectedCategory={"Marketing"}/>
          </div>
        </div>
      </Tabs.Content>

      {/* Health Tab */}
      <Tabs.Content value={4}>
        <div className="shadow-xl rounded-lg pt-8 h-[540px] overflow-y-scroll Scrollbar">
          <div className="flex flex-row justify-between mb-8 pr-2">
            <p className="ml-1">Recommended Topics</p>
            <AddTopicDialog selectedCategory={"Health"} />
          </div>
          <div>
            <RecommendedTopics selectedCategory={"Health"} />
          </div>
        </div>
      </Tabs.Content>

      {/* Custom Tab */}
      <Tabs.Content value={5}>
        <div className="shadow-xl rounded-lg pt-8 h-[540px] overflow-y-scroll Scrollbar">
          <div className="flex flex-row justify-between mb-8 pr-2">
            <p className="ml-1">Recommended Topics</p>
            <AddTopicDialog selectedCategory={"Health"} />
          </div>
          <div>
            <RecommendedTopics selectedCategory={"Custom"} />
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}

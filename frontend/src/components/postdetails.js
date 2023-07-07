import React from "react";
import Addcomments from "./addcomments";

const product = {
  _id: "1bc40356-9c89-4cbf-a2d6-2ce12cf85db0",
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  imgUrl: "https://m.media-amazon.com/images/I/71m+kC4vOxL.jpg",
  reviews: [
    {
      username: "CognitiveScienceEnthusiast",
      rating: 3,
      comment:
        "Kahneman's exploration of the two systems of thinking is mind-blowing. A must-read for anyone interested in decision-making and human behavior.",
      date: "2022-10-28",
    },
    {
      username: "PsychologyStudent",
      rating: 4.7,
      comment:
        "An insightful book that challenges the way we think and perceive the world. Kahneman's Nobel Prize-winning research is brilliantly explained.",
      date: "2022-10-20",
    },
  ],
  description:
    "In 'Thinking, Fast and Slow,' Daniel Kahneman, a renowned psychologist and Nobel laureate, explores the fascinating realm of human decision-making and presents his influential research on the two systems of thinking that drive our choices and judgments. Through vivid examples and thought-provoking anecdotes, Kahneman challenges conventional wisdom, shedding light on the workings of the mind and providing valuable insights into the complexities of human behavior. This captivating masterpiece invites readers to reconsider their understanding of decision-making and gain a deeper understanding of the intricacies of the human mind.",
  id: "1",
};

function Postdetails() {
  return (
    <>
      <section
        className="overflow-hidden text-gray-100 mt-10"
        style={{ backgroundColor: "#111827" }}
      >
        {product && (
          <div className="container px-5 pt-32 pb-4 mx-auto sm:py-24">
            <div className="flex flex-wrap items-center mx-auto lg:max-w-5xl">
              <img
                alt="img"
                className="object-cover object-center w-full rounded h-1/2 lg:w-1/4"
                src={product.imgUrl}
              />

              <div className="w-full mt-6 lg:w-2/3 lg:pl-10 py-0 lg:mt-0">
                <h1 className="text-3xl font-medium text-gray-100 title-font mb-8">
                  {product.title}
                </h1>
                <p className="leading-relaxed">{product.description}</p>
              </div>
            </div>
            <div>
              <Addcomments />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Postdetails;

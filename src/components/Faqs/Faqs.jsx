import React, { useState } from "react";
import classes from "./Faqs.module.scss";
import FaqsImg from "../../assets/images/Group 14.png";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";

function Faqs() {
  const [show, setShow] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is a professional traffic permit?",
      answer:
        "Traffic permits are a requirment for conducting professional traffic.",
      show: false,
    },
    {
      id: 2,
      text: "How is the sample for a professional traffic permit booked?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 3,
      text:
        "Are there professional traffic permit training courses at a distance?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 4,
      text: "How to plug in for the traffic permit test?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 5,
      text: "How much does a commercial traffic permit cost for goods?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 6,
      text:
        "Are there differences between a traffic permit and a professional traffic permit?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 7,
      text: "Where to look for a traffic permit?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 8,
      text: "How to check the traffic condition?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 9,
      text: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 10,
      text: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 11,
      text: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 12,
      text: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 13,
      text: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 14,
      text: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 15,
      text: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
    {
      id: 16,
      text: "When is a professional traffic permit needed?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      show: false,
    },
  ]);

  const handleClick = (id) => {
    const updatedQuestions = [...questions];
    updatedQuestions.forEach((question) => {
      if (question.id === id) {
        question.show = !question.show;
        setQuestions(updatedQuestions);
      }
    });
  };

  const leftColumn = questions.slice(0, 5).map((question) => {
    return (
      <div
        key={question.id}
        className={classes.Question}
        onClick={() => handleClick(question.id)}
      >
        <div className={classes.QuestionMain}>
          <h4>{question.text}</h4>
          {question.show ? (
            <BsDash className={classes.Icon} />
          ) : (
            <BsPlus className={classes.Icon} />
          )}
        </div>
        <div
          style={{
            transform: question.show ? "translateY(0)" : "translateY(-5vh)",
            opacity: question.show ? "1" : "0",
            height: question.show ? "100%" : "0",
            padding: question.show ? "3rem 3rem 4rem 2rem" : "0",
          }}
          className={classes.QuestionSecondary}
        >
          <p>{question.answer}</p>
        </div>
      </div>
    );
  });

  const rightColumn = questions.slice(5, 10).map((question) => {
    return (
      <div
        key={question.id}
        className={classes.Question}
        onClick={() => handleClick(question.id)}
      >
        <div className={classes.QuestionMain}>
          <h4>{question.text}</h4>
          {question.show ? (
            <BsDash className={classes.Icon} />
          ) : (
            <BsPlus className={classes.Icon} />
          )}
        </div>
        <div
          style={{
            transform: question.show ? "translateY(0)" : "translateY(-5vh)",
            opacity: question.show ? "1" : "0",
            height: question.show ? "100%" : "0vh",
            padding: question.show ? "3rem 3rem 4rem 2rem" : "0",
          }}
          className={classes.QuestionSecondary}
        >
          <p>{question.answer}</p>
        </div>
      </div>
    );
  });

  const moreQuestionsLeft = questions.slice(10, 13).map((question) => {
    return (
      <div
        key={question.id}
        className={classes.Question}
        onClick={() => handleClick(question.id)}
      >
        <div className={classes.QuestionMain}>
          <h4>{question.text}</h4>
          {question.show ? (
            <BsDash className={classes.Icon} />
          ) : (
            <BsPlus className={classes.Icon} />
          )}
        </div>
        <div
          style={{
            transform: question.show ? "translateY(0)" : "translateY(-5vh)",
            opacity: question.show ? "1" : "0",
            height: question.show ? "100%" : "0vh",
            padding: question.show ? "3rem 3rem 4rem 2rem" : "0",
          }}
          className={classes.QuestionSecondary}
        >
          <p>{question.answer}</p>
        </div>
      </div>
    );
  });

  const moreQuestionsRight = questions.slice(13, 16).map((question) => {
    return (
      <div
        key={question.id}
        className={classes.Question}
        onClick={() => handleClick(question.id)}
      >
        <div className={classes.QuestionMain}>
          <h4>{question.text}</h4>
          {question.show ? (
            <BsDash className={classes.Icon} />
          ) : (
            <BsPlus className={classes.Icon} />
          )}
        </div>
        <div
          style={{
            transform: question.show ? "translateY(0)" : "translateY(-5vh)",
            opacity: question.show ? "1" : "0",
            height: question.show ? "100%" : "0vh",
            padding: question.show ? "3rem 3rem 4rem 2rem" : "0",
          }}
          className={classes.QuestionSecondary}
        >
          <p>{question.answer}</p>
        </div>
      </div>
    );
  });

  return (
    <div id="faqs" className={classes.Bg}>
      <div className={classes.InnerContainer}>
        <section className={classes.Section}>
          <div className={classes.SectionContainer}>
            <h2>FAQ</h2>
            <h3>
              Questions and Answers
              <br />
              on Professional Traffic
              <br />
              Permits:
            </h3>
          </div>
          <div className={classes.SectionImageContainer}>
            <img
              className={classes.SectionImage}
              src={FaqsImg}
              alt="Illustration"
            />
          </div>
        </section>
        <section className={classes.QuestionSection}>
          <div className={classes.QuestionColumn}>{leftColumn}</div>
          <div className={classes.QuestionColumn}>
            {rightColumn}
            <div onClick={() => setShow(!show)} className={classes.LoadMore}>
              {show ? (
                <h4>
                  SHOW LESS <BsDash className={classes.Icon} />
                </h4>
              ) : (
                <h4>
                  LOAD MORE <BsPlus className={classes.Icon} />
                </h4>
              )}
            </div>
          </div>
        </section>
        <section
          style={{
            height: show ? "min-content" : "0",
            transform: show ? "translateY(0)" : "translateY(-5vh)",
            opacity: show ? "1" : "0",
          }}
          className={classes.QuestionSection}
        >
          <div className={classes.QuestionColumn}>{moreQuestionsLeft}</div>
          <div className={classes.QuestionColumn}>{moreQuestionsRight}</div>
        </section>
      </div>
    </div>
  );
}

export default Faqs;

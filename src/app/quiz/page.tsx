"use client";
import React from 'react'
import Header from './../components/Header'
import questions from './../../../shared/json/questions.json'

type Props = {}

function quiz({ }: Props) {
  console.log(questions)
  return (
    <>
      <Header />
      <section className="steps step2" id="step2">
        <div className="container">
          <article className="text-content">
            <h2 className="main-heading"> Quiz</h2>
          </article>
        </div>
      </section>
    </>
  )
}

export default quiz
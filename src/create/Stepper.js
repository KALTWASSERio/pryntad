import React from 'react'
import 'react-step-progress-bar/styles.css'
import { ProgressBar } from 'react-step-progress-bar'

export default function Stepper({ step }) {
  if (step === 0) {
    return (
      <ProgressBar
        percent={0}
        filledBackground="linear-gradient(to right, #e6508c, #d70064)"
      />
    )
  } else if (step === 1) {
    return (
      <ProgressBar
        percent={20}
        filledBackground="linear-gradient(to right, #e6508c, #d70064)"
      />
    )
  } else if (step === 2) {
    return (
      <ProgressBar
        percent={40}
        filledBackground="linear-gradient(to right, #e6508c, #d70064)"
      />
    )
  } else if (step === 3) {
    return (
      <ProgressBar
        percent={60}
        filledBackground="linear-gradient(to right, #e6508c, #d70064)"
      />
    )
  } else if (step === 4) {
    return (
      <ProgressBar
        percent={80}
        filledBackground="linear-gradient(to right, #e6508c, #d70064)"
      />
    )
  } else if (step === 5) {
    return (
      <ProgressBar
        percent={100}
        filledBackground="linear-gradient(to right, #e6508c, #d70064)"
      />
    )
  }
}

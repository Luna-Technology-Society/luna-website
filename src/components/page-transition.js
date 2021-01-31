import React, { useEffect } from "react"
import Header from "../components/header"
import { useSpring, animated } from "react-spring"

export default function PageTransition(props) {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("page-dim").style.pointerEvents = "none"
    }, props.releasePointerEvents)
  }, [])

  const dimAnimationProps = useSpring({
    config: {
      duration: props.duration,
    },
    delay: props.delay,
    opacity: "0",
    from: { opacity: "1"}
  });

  return (
    <animated.div
      id="page-dim"
      style={dimAnimationProps}
      className="page-dim"
    ></animated.div>
  )
}

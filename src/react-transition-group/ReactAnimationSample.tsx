import React, { useState } from "react";
import { Transition } from "react-transition-group";

// カードコンポーネントに適用するStyle
const FLIP_STYLE = {
  // 前面⇒背面
  entering: {
    transition: 'all .5s ease',
    transform: 'perspective(25rem) rotateY(-180deg)'
  },
  // 背面
  entered: {
    transition: '',
    transform: 'perspective(25rem) rotateY(-180deg)'
  },
  // 背面⇒前面
  exiting: {
    transition: 'all .5s ease',
    transform: 'perspective(25rem) rotateY(-360deg)'
  },
  // 前面
  exited: {
    transition: '',
    transform: 'perspective(25rem) rotateY(0)'
  }
};

interface Props {
  flip: boolean;
  flipToFront: (e: boolean) => void;
  flipToBack: (e: boolean) => void;
}

const FlipCard: React.FC<Props> = ({
  flip,
  flipToFront,
  flipToBack,
}) => {
  const[text1, setText1] = useState("Moi!");
  const[text2, setText2] = useState("Hei!");

  const callBacks = {
    onEnter: () => setText2("Hei!"),
    onEntered: () => setText2("HeiHei!"),
    onExit: () => setText1("Moi!"),
    onExited: () => setText1("MoiMoi"),
  }

  return (
    <Transition
      in={flip}
      timeout={550}
      {...callBacks}>
        {state => (
          <div className="flip-card" style={FLIP_STYLE.entered}>
            <div
              className="flip-card_front"
              onClick={() => flipToBack}>
                {text2}
            </div>
            <div
              className="flip-card_back"
              onClick={() => flipToFront}>
                {text2}
            </div>
          </div>
        )}
    </Transition>
  );
};

export const TransitionPage: React.FC = () => {
  const [flip, setFlip] = useState(false);

  return (
    <FlipCard
      flip={flip}
      flipToBack={() => setFlip(true)}
      flipToFront={() => setFlip(false)}>
        <button
          className="btn"
          onClick={() => setFlip(!flip)}>
          Flip to { flip ? "front" : "back" }
        </button>
    </FlipCard>
  );
};



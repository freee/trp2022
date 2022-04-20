import React, { createContext, Dispatch, useReducer } from "react";

export type Frame = {
  readonly name: string;
  readonly path: string;
  readonly thumbnail: string;
};

export const Frames: Frame[] = [
  {
    name: "frame1",
    path: "frames/frame1.png",
    thumbnail: "frames/thumb_frame1.png",
  },
  {
    name: "frame2",
    path: "frames/frame2.png",
    thumbnail: "frames/thumb_frame2.png",
  },
  {
    name: "frame2",
    path: "frames/frame3.png",
    thumbnail: "frames/thumb_frame3.png",
  },
];

type Dispatcher = { type: "set"; frame: Frame };
export const FrameContext = createContext<{
  currentFrame: Frame;
  dispatch: Dispatch<Dispatcher>;
}>({ currentFrame: Frames[0], dispatch: () => {} });

export const FrameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentFrame, dispatch] = useReducer<
    (state: Frame, action: Dispatcher) => Frame
  >((_state, action) => {
    return action.frame;
  }, Frames[0]);

  return (
    <FrameContext.Provider value={{ currentFrame, dispatch }}>
      {children}
    </FrameContext.Provider>
  );
};

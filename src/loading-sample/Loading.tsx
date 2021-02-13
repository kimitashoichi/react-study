import React, { useEffect, useState } from "react";
import axious, { AxiosResponse } from "axios";
import Button from "@material-ui/core/Button";

interface PostSample {
  userId: number
  id: number
  title: string
  body: string
}

const initalState: PostSample = {
  userId: 0,
  id: 0,
  title: "",
  body: ""
}

const LoadingSample: React.FC = () => {
  const [sample, setSample] = useState<PostSample>(initalState);

  useEffect(() => {
    console.log("useEffect");
    axious.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res: AxiosResponse<PostSample>) => {
      console.log("response", res);
      const responseData: PostSample = {
        userId: res.data.userId,
        id: res.data.id,
        title: res.data.title,
        body: res.data.body,
      };
      setSample(responseData);
    })
    .catch(err => {
      throw new Error(err.message);
    })
  }, []);

  return (
    <>
      { sample.userId !== 0 ? <div>{sample.userId}</div> : <div>Loading...</div>}
    </>
  )
};

export default LoadingSample;
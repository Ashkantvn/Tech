"use client";
import React from "react";
import { useEffect } from "react";

function CustomError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center mt-60">
      <h2 className="my-3">Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default CustomError;

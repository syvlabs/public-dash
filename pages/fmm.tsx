import React, { FC, useState, useEffect } from 'react';
import Head from 'next/head'

const FMM: FC = () => {

  return (
    <div>
      <Head>
        <title>Food Market Shortcuts</title>
      </Head>
      <div className="w-full">
          <div className="text-2xl px-8 mt-8 text-gray-700 font-bold">Food Market Shortcuts</div>
          <div 
            className="my-4 w-80 rounded-lg text-white bg-green-500 hover:bg-green-600 active:bg-green-800 p-4 mx-8 font-bold select-none cursor-pointer shadow" 
            onClick={() => {navigator.clipboard.writeText("hello world!")}}>
              1. Click to copy delivery message
          </div>
          <div className="my-4 w-80 rounded-lg text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-700 p-4 mx-8 font-bold select-none cursor-pointer shadow">
              2. Go to order page
          </div>
      </div>
    </div>
  )
}

export default FMM;
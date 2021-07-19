import React, { FC } from 'react';
import Head from 'next/head'
import moment from 'moment'

const LINKS: {[key: number]: any} = {
    1: {
        name: "Chef's Cuisines",
        url: "https://food-market-manila.myshopify.com/apps/bundles/bundle/34811",
    },
    2: {
        name: "European",
        url: "https://food-market-manila.myshopify.com/apps/bundles/bundle/34812",
    },
    3: {
        name: "Asian",
        url: "https://food-market-manila.myshopify.com/apps/bundles/bundle/34098",
    },
    4: {
        name: "Filipino",
        url: "https://food-market-manila.myshopify.com/apps/bundles/bundle/34280",
    },
}

const FMM: FC = () => {
  const week: number = moment().add(2, 'days').isoWeek()
  const index: number = ((week + 1) % 4) + 1;
  return (
    <div>
      <Head>
        <title>Food Market Shortcuts</title>
      </Head>
      <div className="w-full">
          <div className="text-2xl px-8 mt-8 text-gray-700 font-bold">Food Market Shortcuts</div>
          <div 
            className="my-4 w-80 rounded-lg text-white bg-green-500 hover:bg-green-600 active:bg-green-800 p-4 mx-8 font-bold select-none cursor-pointer shadow" 
            onClick={() => {navigator.clipboard.writeText("Pls deliver food before 12nn, pls leave food at lobby")}}>
              1. Copy Delivery Message
          </div>
          <a href={LINKS[index].url} target="_blank" rel="noreferrer">
            <div className="my-4 w-80 rounded-lg text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-700 p-4 mx-8 font-bold select-none cursor-pointer shadow">
                2. Go to Page ({LINKS[index].name})
            </div>
          </a>
      </div>
    </div>
  )
}

export default FMM;
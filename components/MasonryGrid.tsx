"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";

const MasonryGrid =  () => {
  const [ImageUrl, setImagesUrl] = useState([])

  
  const ImageUrls = [
    "https://source.unsplash.com/OyCl7Y4y0Bk",
    "https://source.unsplash.com/Kl1gC0ve620",
    "https://source.unsplash.com/55btQzyDiO8",
    "https://source.unsplash.com/g0dBbrGmMe0",
    "https://source.unsplash.com/v1OW17UcR-Q",
    "https://source.unsplash.com/Wpg3Qm0zaGk",
    "https://source.unsplash.com/W3FC_bCPw8E",
    "https://source.unsplash.com/rBRZLPVLQg0",
    "https://source.unsplash.com/RRksEVVoU8o",
    "https://source.unsplash.com/OyCl7Y4y0Bk",
    "https://source.unsplash.com/Kl1gC0ve620",
    "https://source.unsplash.com/55btQzyDiO8",
    "https://source.unsplash.com/g0dBbrGmMe0",
    "https://source.unsplash.com/v1OW17UcR-Q",
    "https://source.unsplash.com/Wpg3Qm0zaGk",
    "https://source.unsplash.com/W3FC_bCPw8E",
    "https://source.unsplash.com/rBRZLPVLQg0",
    "https://source.unsplash.com/RRksEVVoU8o",
    "https://source.unsplash.com/W3FC_bCPw8E",
    "https://source.unsplash.com/rBRZLPVLQg0",
    "https://source.unsplash.com/RRksEVVoU8o",
    "https://source.unsplash.com/OyCl7Y4y0Bk",
    "https://source.unsplash.com/Kl1gC0ve620",
    "https://source.unsplash.com/55btQzyDiO8",
    "https://source.unsplash.com/Kl1gC0ve620",
    "https://source.unsplash.com/55btQzyDiO8",
    "https://source.unsplash.com/g0dBbrGmMe0",
    "https://source.unsplash.com/v1OW17UcR-Q",
    "https://source.unsplash.com/Wpg3Qm0zaGk",
    "https://source.unsplash.com/W3FC_bCPw8E",
    "https://source.unsplash.com/g0dBbrGmMe0",
    "https://source.unsplash.com/v1OW17UcR-Q",
    "https://source.unsplash.com/Wpg3Qm0zaGk",
  ];

  // const accessKey = "pP3DWWJIyIecRDHSSXEOdcIe-fW6z3MvJnRe1vgYBOs";
  // let imageCount = 11;
  // const getImages = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.unsplash.com/photos/random/?count=${imageCount}`,
  //       {
  //         headers: {
  //           Authorization: `Client-ID ${accessKey}`,
  //         },
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error(
  //         `Failed to fetch images from Unsplash. Status: ${response.status}`
  //       );
  //     }

  //     const data = await response.json();
  //     return data;
  //   } catch (err) {
  //     console.error("Error fetching images from Unsplash:", err);
  //     return [];
  //   }
  // };

  // await getImages().then((data) => {
  //   for (let i = 0; i < imageCount; i++) allImages.push(data[i].urls.small);
  // });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="w-[98%] m-auto pt-20 pb-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto "
        columnClassName="pl-4 bg-clip-padding"
      >
        {ImageUrls.map((url, i) => (
          <div className="mb-4" key={i}>
            <Image
              className="rounded-[7px]"
              width={640}
              height={480}
              alt=""
              src={url}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGrid;

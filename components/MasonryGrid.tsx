import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const MasonryGrid = async () => {
  let allImages: string[] = [];
  let colOneImages: string[] = [];
  let colTwoImages: string[] = [];
  let colThreeImages: string[] = [];
  let colFourImages: string[] = [];
  //   const ImageUrls = [
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/Kl1gC0ve620",
  //     "https://source.unsplash.com/55btQzyDiO8",
  //     "https://source.unsplash.com/g0dBbrGmMe0",
  //     "https://source.unsplash.com/v1OW17UcR-Q",
  //     "https://source.unsplash.com/Wpg3Qm0zaGk",
  //     "https://source.unsplash.com/W3FC_bCPw8E",
  //     "https://source.unsplash.com/rBRZLPVLQg0",
  //     "https://source.unsplash.com/RRksEVVoU8o",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/Kl1gC0ve620",
  //     "https://source.unsplash.com/55btQzyDiO8",
  //     "https://source.unsplash.com/g0dBbrGmMe0",
  //     "https://source.unsplash.com/v1OW17UcR-Q",
  //     "https://source.unsplash.com/Wpg3Qm0zaGk",
  //     "https://source.unsplash.com/W3FC_bCPw8E",
  //     "https://source.unsplash.com/rBRZLPVLQg0",
  //     "https://source.unsplash.com/RRksEVVoU8o",
  //     "https://source.unsplash.com/W3FC_bCPw8E",
  //     "https://source.unsplash.com/rBRZLPVLQg0",
  //     "https://source.unsplash.com/RRksEVVoU8o",
  //     "https://source.unsplash.com/OyCl7Y4y0Bk",
  //     "https://source.unsplash.com/Kl1gC0ve620",
  //     "https://source.unsplash.com/55btQzyDiO8",
  //     "https://source.unsplash.com/Kl1gC0ve620",
  //     "https://source.unsplash.com/55btQzyDiO8",
  //     "https://source.unsplash.com/g0dBbrGmMe0",
  //     "https://source.unsplash.com/v1OW17UcR-Q",
  //     "https://source.unsplash.com/Wpg3Qm0zaGk",
  //     "https://source.unsplash.com/W3FC_bCPw8E",
  //     "https://source.unsplash.com/g0dBbrGmMe0",
  //     "https://source.unsplash.com/v1OW17UcR-Q",
  //     "https://source.unsplash.com/Wpg3Qm0zaGk",
  //   ];

  const accessKey = "pP3DWWJIyIecRDHSSXEOdcIe-fW6z3MvJnRe1vgYBOs";
  let imageCount = 11;
  const getImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?count=${imageCount}`,
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch images from Unsplash. Status: ${response.status}`
        );
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error fetching images from Unsplash:", err);
      return [];
    }
  };

  await getImages().then((data) => {
    for (let i = 0; i < imageCount; i++) allImages.push(data[i].urls.small);
  });

  for (let i = 0; i < allImages.length; i += 4) {
    if (typeof allImages[i] == "string") colOneImages.push(allImages[i]);
    if (typeof allImages[i + 1] == "string")
      colTwoImages.push(allImages[i + 1]);
    if (typeof allImages[i + 2] == "string")
      colThreeImages.push(allImages[i + 2]);
    if (typeof allImages[i + 3] == "string")
      colFourImages.push(allImages[i + 3]);
  }

  return (
    <div className="w-[98%] m-auto pt-20 pb-10 ">
      <div className="flex gap-2">
        <div className="flex w-[25%] flex-col gap-2 ">
          {colOneImages.map((url, k) => (
            <div
              className="relative w-full h-full hover:opacity-70 duration-500"
              key={k}
            >
              {/* <div className="absolute top-0 right-0 h-16 w-16 bg-green-300">hello</div> */}
              <Image
                className="w-full h-full rounded-[10px] object-cover "
                width={640}
                height={480}
                alt=""
                src={url}
              />
            </div>
          ))}
        </div>
        <div className="flex w-[25%] flex-col gap-2">
          {colTwoImages.map((url, k) => (
            <div
              className="w-full h-full hover:opacity-70 duration-500"
              key={k}
            >
              <Image
                className="w-full h-full rounded-[10px] object-cover"
                width={640}
                height={480}
                alt=""
                src={url}
              />
            </div>
          ))}
        </div>
        <div className="flex w-[25%] flex-col gap-2">
          {colThreeImages.map((url, k) => (
            <div
              className="w-full h-full hover:opacity-70 duration-500"
              key={k}
            >
              <Image
                className="w-full h-full rounded-[10px] object-cover"
                width={640}
                height={480}
                alt=""
                src={url}
              />
            </div>
          ))}
        </div>
        <div className="flex w-[25%] flex-col gap-2">
          {colFourImages.map((url, k) => (
            <div
              className="w-full h-full hover:opacity-70 duration-500"
              key={k}
            >
              <Image
                className="w-full h-full rounded-[10px] object-cover"
                width={640}
                height={480}
                alt=""
                src={url}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center pt-5">
        <Button className="rounded-full w-[220px] bg-cream-5 text-black hover:bg-cream-2 font-semibold duration-300">
          Load more
        </Button>
      </div>
    </div>
  );
};

export default MasonryGrid;

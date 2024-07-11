import Button from "@/app/components/Button";
import React from "react";
import Image from "next/image";
import sunflower from "@/public/sunflower.jpg";

export default function mission() {
  return (
    <main className="mt-6">
      <div>This is mission page</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh
        mi, blandit in consequat a, laoreet vitae ipsum. In egestas odio mi, ac
        tempus nisi finibus quis. Nam mattis dictum nibh, rhoncus sagittis dolor
        dapibus in. Proin dolor augue, lobortis sit amet ex a, molestie dapibus
        lacus.
      </div>
      <Button />
      <Image
        placeholder="blur"
        className="mt-10 w-[400px]"
        src={sunflower}
        alt="sunflower Image"
        quality={100}
      ></Image>
    </main>
  );
}

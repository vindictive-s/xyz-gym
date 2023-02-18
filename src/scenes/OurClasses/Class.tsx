import React from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute cursor-pointer rounded-lg z-30 flex h-[338px] w-[400px] flex-col  items-center justify-center whitespace-normal bg-primary-500 text-center text-secondary-400 opacity-0 transition durration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <div className="h-[320px] w-[400px]">
        <img
          alt={`${image}`}
          src={image}
          className="rounded-lg object-contain"
        />
      </div>
    </li>
  );
};

export default Class;

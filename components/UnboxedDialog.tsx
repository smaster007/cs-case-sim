"use client";

import Image from "next/image";
import gradeColors from "@/utils/gradeColors";
import { GradeType, ItemType } from "@/types";

type Props = {
  unboxedDialogRef: React.MutableRefObject<HTMLDialogElement | null>;
  historyDialogRef: React.MutableRefObject<HTMLDialogElement | null>;
  item: ItemType | null;
};
export default ({ unboxedDialogRef, historyDialogRef, item }: Props) => {
  return (
    <dialog
      className="mx-auto w-full max-w-lg border-[1px] border-white/30 bg-[#2d2d2d] text-xl text-white"
      ref={unboxedDialogRef}
    >
      <div className="flex flex-col">
        <span
          className="border-b-[12px] bg-[#262626] p-3 text-3xl font-semibold text-neutral-400"
          style={{
            borderColor: item?.name.includes("★")
              ? gradeColors["Rare Special Item"]
              : gradeColors[item?.rarity as GradeType]
          }}
        >
          You got a{" "}
          <span
            style={{
              color: item?.name.includes("★")
                ? gradeColors["Rare Special Item"]
                : gradeColors[item?.rarity as GradeType]
            }}
          >
            {item?.name}
          </span>
        </span>

        <div className="flex flex-col p-2">
          {item && (
            <div>
              <Image
                key={item.id}
                src={item.image}
                alt={item.image}
                width={512}
                height={384}
              />
            </div>
          )}

          <div className="flex flex-row-reverse gap-1">
            <button
              className="self-end rounded p-2 text-xl font-medium transition-colors duration-300 hover:bg-black/50"
              onClick={() => unboxedDialogRef.current?.close()}
            >
              THANKS
            </button>
            <button
              className="self-end rounded p-2 text-xl font-medium transition-colors duration-300 hover:bg-black/50"
              onClick={() => historyDialogRef.current?.showModal()}
            >
              HISTORY
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
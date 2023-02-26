import React from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { NavLink } from "react-router-dom";

type Data = {
  created_at: Date;
  name: string;
  shortLink: string;
  totalEngagements: number;
  id: string;
};
const LinkCard = (props: Data) => {
  const fullDate = new Date(props.created_at);
  const months = [
    "JANUARY",
    "FEBURARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const getCorrectDate = (fullDate: Date): string => {
    const currDate = new Date();
    if (fullDate.getFullYear() < currDate.getFullYear()) {
      return `${
        months[fullDate.getMonth()]
      } ${fullDate.getDate()} ${fullDate.getFullYear()}`;
    } else {
      return `${months[fullDate.getMonth()]} ${fullDate.getDate()}`;
    }
  };
  const short_link = props.shortLink.split("/");
  const displayDate = getCorrectDate(fullDate);
  return (
    <NavLink
      to={`/links/${props.id}/details`}
      className={({ isActive }: any) =>
        isActive
          ? "bg-white p-3 cursor-pointer border-t-2 border-t-gray-200 flex w-full gap-4"
          : "bg-transparent p-3 cursor-pointer border-t-2 border-t-gray-200 flex w-full gap-4"
      }
    >
      <div id={props.id} className={`flex w-full gap-4 `}>
        <input
          type="checkbox"
          name="stuff"
          id="stuff"
          className="cursor-pointer"
        />
        <div className="flex flex-col text-sm w-full ">
          <span className="uppercase text-gray-400 text-xs font-medium">
            {displayDate}
          </span>
          <span className="text-base">{props.name}</span>
          <p className="flex items-center justify-between w-full mt-2">
            <span className="text-orange-600">
              {short_link[0]}/
              <span className="font-medium">{short_link[1]}</span>
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              {props.totalEngagements}
              <LeaderboardIcon
                className="text-gray-500 "
                sx={{
                  fontSize: "1rem",
                }}
              />
            </span>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default LinkCard;

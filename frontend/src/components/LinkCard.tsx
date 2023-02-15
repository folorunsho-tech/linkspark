import React from "react";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { NavLink } from "react-router-dom";

type Data = {
  created_at: Date;
  name: string;
  shortLink: string;
  totalEngagements: number;
  id: string;
  onCardClick: any;
  active: Function;
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
    <NavLink to={`:${props.id}`}>
      <div
        id={props.id}
        className={`flex w-full gap-4 ${({ isActive }: any) =>
          isActive
            ? "bg-white"
            : "bg-transparent"} p-3 cursor-pointer border-t-2 border-t-gray-200`}
        onClick={props.onCardClick}
      >
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
          <span className="">{props.name}</span>
          <p className="flex items-center justify-between w-full mt-2">
            <span className="text-orange-600">
              {short_link[0]}/
              <span className="font-medium">{short_link[1]}</span>
            </span>
            <span className="text-gray-500 text-sm">
              {props.totalEngagements}
              <LeaderboardIcon className="text-gray-500 text-sm" />
            </span>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default LinkCard;

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getLinkData } from "../queries/links";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BarChartIcon from "@mui/icons-material/BarChart";
import SellIcon from "@mui/icons-material/Sell";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
type Props = {
  id: string;
  name: string;
  createdAt: Date;
  totalEngagements: number;
  createdBy: string;
  referrers: Array<Object>;
  locations: Array<Object>;
  shortLink: string;
  longLink: string;
  link_in_bio: boolean;
  qrcode: object;
  tags: Array<string>;
};

const LinkContent = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["spark_link", id],
    queryFn: () => getLinkData(id),
    refetchOnWindowFocus: false,
  });
  const date = new Date(data?.createdAt).toString().substring(0, 31);
  console.log(data);

  return (
    <section className="p-4 pt-12 space-y-8 w-full h-full overflow-y-auto">
      {isLoading && <div className="text-center">loading...</div>}
      {!isLoading && (
        <>
          <div
            aria-label="link title"
            className="p-4 bg-white rounded-sm space-y-4"
          >
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">{data.name}</h2>
              <div className="flex gap-4 ">
                <button className="rounded-sm p-2 px-3 bg-gray-300">
                  <EditIcon className="text-xs" /> Edit
                </button>
                <button className="rounded-sm p-2  border border-gray-200">
                  <MoreHorizIcon />
                </button>
              </div>
            </div>
            <p className="text-base">
              <CalendarTodayIcon
                sx={{
                  fontSize: "1rem",
                }}
              />{" "}
              <span>{date}</span> by {data.createdBy}
            </p>
            <p className="text-base">
              <BarChartIcon
                sx={{
                  fontSize: "1rem",
                }}
              />{" "}
              <span>{data.totalEngagements} </span> Total engagements
            </p>
          </div>
          <div
            aria-label="link details"
            className="p-4 bg-white rounded-sm space-y-4"
          >
            <div className="flex justify-between">
              <a href={data.longLink} target="_blank">
                <span className="font-bold text-2xl text-blue-700">
                  {data.shortLink}
                </span>
              </a>
              <div className="flex gap-4 ">
                <button className="rounded-sm p-2 px-3 bg-gray-300">
                  <ContentCopyIcon className="text-xs" /> Copy
                </button>
                <button className="rounded-sm p-2  border border-gray-200">
                  <MoreHorizIcon />
                </button>
              </div>
            </div>
            <p className="text-sm">
              <span className="font-bold">{data.totalEngagements}</span> clicks
            </p>
            <p className="text-base">
              <SubdirectoryArrowRightIcon
                sx={{
                  fontSize: "1rem",
                }}
              />{" "}
              <a href={data.longLink} target="_blank">
                <span>{data.longLink}</span>{" "}
              </a>
            </p>
            <div className="text-base flex justify-between">
              <div aria-label="qr-code ">
                <h2 className="font-bold text-lg pb-3">QR Code</h2>
                <div className="flex justify-beween gap-3">
                  <p>img</p>
                  <div>
                    {/* <button className="rounded-sm p-2  border border-gray-200">
                      Create Qr-Code
                    </button> */}
                    <div className="flex gap-2">
                      <button className="rounded-sm p-2 flex items-center text-sm font-bold border border-gray-200">
                        <BarChartIcon
                          sx={{
                            fontSize: "1rem",
                          }}
                        />{" "}
                        View details
                      </button>
                      <button className="rounded-sm p-2  border border-gray-200">
                        <MoreHorizIcon
                          sx={{
                            fontSize: "1rem",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-label="link-in-bio">
                <h2 className="font-bold text-lg pb-3">Link-in-bio</h2>
                <button className="rounded-sm p-2  border border-gray-200">
                  Add to Link-in-bio
                </button>
              </div>
            </div>
            <p className="flex items-center gap-2">
              <SellIcon
                sx={{
                  fontSize: "1rem",
                  color: "gray",
                }}
              />
              {data.tags.length === 0 ? (
                <span className="text-gray-500 font-semibold">No tags</span>
              ) : (
                <div className="flex items-center gap-2">
                  {data.tags.map((tag: string) => (
                    <button className="text-gray-500 text-xs p-1 border border-gray-200 text-center font-normal">
                      {tag}
                    </button>
                  ))}
                  <button>
                    <EditIcon
                      className="text-gray-600"
                      sx={{
                        fontSize: "1.3rem",
                      }}
                    />
                  </button>
                </div>
              )}
            </p>
          </div>
          <div
            aria-label="link analytics-bar-chart"
            className="p-4 bg-white rounded-sm space-y-2"
          >
            <h2 className="font-bold text-3xl flex items-baseline gap-2">
              {data.totalEngagements}
              <BarChartIcon
                className="text-gray-600"
                sx={{
                  fontSize: "1.2rem",
                }}
              />
            </h2>
            <h3 className="text-xs font-bold text-gray-600">
              TOTAL ENGAGEMENTS
            </h3>
            <div id="enagement-chart"></div>
          </div>
        </>
      )}
    </section>
  );
};

export default LinkContent;

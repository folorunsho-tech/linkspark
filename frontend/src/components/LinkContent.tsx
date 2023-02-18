import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getLinkData } from "../queries/links";
import { useParams } from "react-router-dom";

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
  const { id: linkId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["spark_link", linkId],
    queryFn: () => getLinkData(linkId),
    refetchOnWindowFocus: false,
  });

  return <div>{data?.name}</div>;
};

export default LinkContent;

import React from "react";
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

const LinkContentCard = (props: Props) => {
  return <div>LinkContentCard</div>;
};

export default LinkContentCard;

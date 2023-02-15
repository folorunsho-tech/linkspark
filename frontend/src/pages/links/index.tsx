import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LinkCard from "../../components/LinkCard";
import { useSearchParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getLinks } from "../../queries/links";
import axios from "axios";
const Links = () => {
  // Access the client
  // const queryClient = useQueryClient();

  const [tag, setTag] = React.useState("");
  const [currLink, setCurrLink] = React.useState("");

  const handleSelectChange = (event: SelectChangeEvent) => {
    setTag(event.target.value);
  };

  const [order, setOrder] = React.useState("date-created");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrder((event.target as HTMLInputElement).value);
  };

  const [btnState, setBtnState] = React.useState(false);

  const handleBtnClick = () => {
    setBtnState(!btnState);
  };

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["spark_links"],
    queryFn: getLinks,
    refetchOnWindowFocus: false,
  });

  return (
    <main className="bg-gray-100 h-screen">
      <header className="relative p-4 border-b-1 shadow-sm bg-white border-b-gray-300">
        <h2 className="text-2xl font-bold">Links</h2>
        <section className="flex gap-96 mt-6 ">
          <div className="flex items-center">
            <p>Filter By:</p>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="filter-tag">Tag</InputLabel>
              <Select
                labelId="filter-tag"
                id="filter-tag"
                value={tag}
                label="Tag"
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex items-center gap-4">
            <p> Order By:</p>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={order}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="Date created"
                  control={<Radio size="small" />}
                  label="Date created"
                />
                <FormControlLabel
                  value="Top performing"
                  control={<Radio size="small" />}
                  label="Top performing"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </section>
        {btnState && <section>total links chart</section>}
        <button
          onClick={handleBtnClick}
          className="absolute right-1/2 -bottom-6 translate-y-1.5 p-1 text-sm text-indigo-700 rounded-sm border border-t-gray-200 border-gray-300 shadow-sm"
        >
          Show chart
        </button>
      </header>
      <section className="flex justify-between h-full">
        <div
          id="Links-Container"
          className=" border-r-2 space-y-4 border-r-gray-300 w-1/3"
        >
          <h2 className="p-4 pb-2 text-gray-600 font-normal text-right">
            Engagements all time
          </h2>
          <section>
            {data?.linkList?.map((link: any) => (
              <LinkCard key={link?.id} {...link} />
            ))}
          </section>
        </div>
        <div id="Link-Details" className="p-4">
          content
        </div>
      </section>
    </main>
  );
};

export default Links;

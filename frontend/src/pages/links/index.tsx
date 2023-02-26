import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LinkCard from "../../components/LinkCard";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getLinks } from "../../queries/links";
const Links = () => {
  // Access the client
  // const queryClient = useQueryClient();

  const [tag, setTag] = React.useState("");

  const [order, setOrder] = React.useState("date-created");
  const handleSelectChange = (event: SelectChangeEvent) => {
    setTag(event.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrder((event.target as HTMLInputElement).value);
  };

  const [btnState, setBtnState] = React.useState(false);

  const handleBtnClick = () => {
    setBtnState(!btnState);
  };

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
                  value="date-created"
                  control={<Radio size="small" />}
                  label="Date created"
                />
                <FormControlLabel
                  value="top-performing"
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
          className="absolute right-1/2 -bottom-6 bg-gray-50 translate-y-1.5 p-1 text-sm text-indigo-700 rounded-sm border border-t-gray-200 border-gray-300 shadow-sm"
        >
          Show chart
        </button>
      </header>
      <section className="flex h-3/4 overflow-y-hidden">
        <div
          id="Links-Container"
          className=" border-r-2  space-y-4 border-r-gray-300 w-3/5"
        >
          <h2 className="p-4 pb-2 text-gray-600 font-normal text-right">
            Engagements all time
          </h2>
          <section className="overflow-y-auto h-full">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data.map((link: any) => <LinkCard key={link?.id} {...link} />)
            )}
          </section>
        </div>
        <div id="Link-Details" className="p-4 w-full h-full">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Links;

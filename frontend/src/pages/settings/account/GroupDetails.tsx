import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
const GroupDetails = () => {
  const [selectedValue, setSelectedValue] = React.useState("bit.ly");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <main>
      <h2 className="text-3xl font-bold mb-4">
        <Link
          to={`/settings/organization/:org_id/groups`}
          className="text-gray-500"
        >
          Groups
        </Link>
        /<span aria-label="o_1shfu7o9uj">o_1shfu7o9uj</span>
      </h2>
      <hr className="border-1 border-gray-300" />
      <section className="space-y-8 ">
        <div className="flex flex-col gap-4 mt-3">
          <label htmlFor="group_name">Name</label>
          <input
            type="text"
            name="group_name"
            className="p-2 w-1/3 rounded-sm font-medium border border-gray-300 text-sm transition duration-200 outline-blue-500 hover:border-blue-400"
            value={`o_1shfu7o9uj`}
          />
          <button className="hover:bg-blue-800 transition duration-200 font-semibold bg-blue-600 w-max text-white p-2 px-4 text-center rounded-md">
            Save Changes
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Domains</h2>
          <TableContainer
            component={Box}
            sx={{
              fontFamily: "Open Sans",
            }}
          >
            <Table
              sx={{ minWidth: 650, fontFamily: "Open Sans" }}
              aria-label="organization table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Domain
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Default
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "1rem",
                    }}
                  >
                    bit.ly
                  </TableCell>
                  <TableCell>
                    <Radio
                      checked={selectedValue === "bit.ly"}
                      onChange={handleChange}
                      value="bit.ly"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "bit.ly" }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <button className="mt-3 hover:bg-blue-100 border text-sm border-blue-600 transition duration-200 font-semibold bg-transparent w-max text-blue-600 p-2 px-4 text-center rounded-md">
            Add Custom Domains
          </button>
          <button className="mt-4 block hover:bg-blue-800 transition duration-200 font-semibold bg-blue-600 w-max text-white p-2 px-4 text-center rounded-md">
            Update Default Domain
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">App connections</h2>
          <p>Connect to Twitter to share links directly from Bitly</p>
          <button className="mt-4 block hover:bg-blue-800 transition duration-200 font-semibold bg-blue-600 w-max text-white p-2 px-4 text-center rounded-md">
            Connect a Twitter account
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <TableContainer
            component={Box}
            sx={{
              fontFamily: "Open Sans",
            }}
          >
            <Table
              sx={{ minWidth: 650, fontFamily: "Open Sans" }}
              aria-label="organization table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Role
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "1rem",
                    }}
                  >
                    Folorunsho Ibrahim
                  </TableCell>
                  <TableCell>Account Admin</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <button className="mt-3 hover:bg-blue-100 border text-sm border-blue-600 transition duration-200 font-semibold bg-transparent w-max text-blue-600 p-2 px-4 text-center rounded-md">
            Load More
          </button>
          <button className="mt-4 block hover:bg-blue-800 transition duration-200 font-semibold bg-blue-600 w-max text-white p-2 px-4 text-center rounded-md">
            Add User
          </button>
        </div>
      </section>
    </main>
  );
};

export default GroupDetails;

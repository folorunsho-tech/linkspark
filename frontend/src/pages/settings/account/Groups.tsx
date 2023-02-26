import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const Groups = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Groups</h2>
      </div>
      <div>
        <h3 className="text-sm mb-3">Using 1 of 1 groups</h3>
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
                  align="right"
                >
                  Created
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                  align="right"
                >
                  Last modified
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Link to={`/settings/organization/:org_id/groups/:group_id`}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "#0B35B3",
                      fontSize: "1rem",
                      ["&:hover"]: {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    o_1shfu7o9uj
                  </TableCell>
                </Link>
                <TableCell align="right">Dec 12, 2020, 6:10 PM GMT+1</TableCell>
                <TableCell align="right">Dec 12, 2020, 6:10 PM GMT+1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default Groups;

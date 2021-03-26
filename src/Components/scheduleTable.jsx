import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import "../style.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.whitesmoke,
    color: theme.palette.common.black,
    fontFamily: "Gill Sans",
  },
  body: {
    fontSize: 13,
    fontFamily: "Gill Sans",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const ScheduleTable = ({ rows, setRows }) => {
  const [headerRow, setHeaderRow] = React.useState([false, false, false]);
  const [background, setBackground] = React.useState({ row: -1, column: -1 });

  const handleSelectAllClick = (event, column) => {
    if (column === 1) {
      let r = rows.map((row) => {
        row.state1 = event.target.checked;
        row.state2 = event.target.checked;
        return { ...row };
      });
      setRows(r);
    } else if (column === 2) {
      let r = rows.map((row) => {
        row.state1 = event.target.checked;
        row.state3 = event.target.checked;
        return { ...row };
      });
      setRows(r);
    } else if (column === 3) {
      let r = rows.map((row) => {
        row.state1 = event.target.checked;
        row.state4 = event.target.checked;
        return { ...row };
      });
      setRows(r);
    }

    let arr = headerRow;
    arr[column - 1] = event.target.checked;
    setHeaderRow([...arr]);
  };

  const handleClick = (event, row, column) => {
    if (column === 1) {
      rows[row] = {
        state1: event.target.checked,
        name: rows[row].name,
        state2: event.target.checked,
        state3: event.target.checked,
        state4: event.target.checked,
      };
      setRows([...rows]);
    } else if (column === 2) {
      rows[row] = {
        ...rows[row],
        state1: event.target.checked,
        state2: event.target.checked,
      };
      setRows([...rows]);
    } else if (column === 3) {
      rows[row] = {
        ...rows[row],
        state1: event.target.checked,
        state3: event.target.checked,
      };
      setRows([...rows]);
    } else if (column === 4) {
      rows[row] = {
        ...rows[row],
        state1: event.target.checked,
        state4: event.target.checked,
      };
      setRows([...rows]);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                backgroundColor: 0 === background.column ? "#32CD32" : "",
              }}
            >
              <Checkbox
                checked={headerRow[0]}
                onChange={(event) => handleSelectAllClick(event, 1)}
              />
              AMERICA
            </StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                backgroundColor: 1 === background.column ? "#32CD32" : "",
              }}
            >
              <Checkbox
                checked={headerRow[1]}
                onChange={(event) => handleSelectAllClick(event, 2)}
              />
              AUSTRALIA
            </StyledTableCell>
            <StyledTableCell
              align="left"
              style={{
                backgroundColor: 2 === background.column ? "#32CD32" : "",
              }}
            >
              <Checkbox
                checked={headerRow[2]}
                onChange={(event) => handleSelectAllClick(event, 3)}
              />
              EMEA
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{
                  backgroundColor: index === background.row ? "#32CD32" : "",
                }}
              >
                <Checkbox
                  checked={row.state1}
                  onChange={(event) => handleClick(event, index, 1)}
                />
                {row.name}
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{
                  backgroundColor:
                    (background.column === 0 && index <= background.row) ||
                    (index === background.row && 0 <= background.column)
                      ? "#98FB98"
                      : "",
                }}
                onMouseOver={() => {
                  setBackground({ row: index, column: 0 });
                  console.log(index, 0);
                }}
              >
                <Checkbox
                  checked={row.state2}
                  onChange={(event) => handleClick(event, index, 2)}
                />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{
                  backgroundColor:
                    (background.column === 1 && index <= background.row) ||
                    (index === background.row && 1 <= background.column)
                      ? "#98FB98"
                      : "",
                }}
                onMouseOver={() => {
                  setBackground({ row: index, column: 1 });
                  console.log(index, 1);
                }}
              >
                <Checkbox
                  checked={row.state3}
                  onChange={(event) => handleClick(event, index, 3)}
                />
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{
                  backgroundColor:
                    (background.column === 2 && index <= background.row) ||
                    (index === background.row && 2 <= background.column)
                      ? "#98FB98"
                      : "",
                }}
                onMouseOver={() => {
                  setBackground({ row: index, column: 2 });
                  console.log(index, 2);
                }}
              >
                <Checkbox
                  checked={row.state4}
                  onChange={(event) => handleClick(event, index, 4)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;

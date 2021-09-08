import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  console.log(value);
  return `${value}°C`;
}

export default function MRange({ marks, step }) {
  const classes = useStyles();
  const [value, setValue] = useState([0, 100]);

  function valueLabelFormat(value) {
    let item = marks.find((item) => item.value === value);
    if (value == 0) return marks[0].label;
    if (item) return item.label;
  }

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={20}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        aria-labelledby="slider-custom"
        step={null}
        arial-label={100324}
        valueLabelDisplay="auto"
        marks={marks}
        valueLabelFormat={valueLabelFormat}
      />
    </div>
  );
}

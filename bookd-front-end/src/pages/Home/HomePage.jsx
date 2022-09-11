import classes from "./HomePage.module.css";
import { useState } from "react";
import background from "../../assets/partyBack.jpg";
import TextField from "@mui/material/TextField";
import NumericInput from "react-numeric-input";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

const HomePage = () => {
  const dietaryRestrictions = ["Vegetarian", "Halal", "Vegan", "Gluten-free", "Kosher", "Nut-free", "Lactose-free"];
  const accessibilityOptions = ["Wheelchair Accessible", "Blind Friendly", "Deaf Friendly"];
  return (
    <div className={classes.pageContainer}>
      <div className={classes.searchSection} style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <form className={classes.searchForm}>
          <div className={`row ${classes.formGroup}`}>
            <div className="col-sm-12">
              <TextField className={classes.searchField} id="outlined-basic" label="Search events" variant="outlined" />
            </div>
          </div>
          <div className={`row ${classes.formGroup}`}>
            <div className="col-sm-6">
              <TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} label="Capacity" />
            </div>
            <div className="col-sm-6">
              <TextField className={classes.searchField} id="outlined-basic" label="Budget($)" variant="outlined" />
            </div>
          </div>
          <div className={`row ${classes.formGroup}`}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={dietaryRestrictions}
              getOptionLabel={(option) => option}
              // defaultValue={[top100Films[13]]}
              filterSelectedOptions
              renderInput={(params) => <TextField {...params} label="Filter for dietary restrictions" placeholder="Select all that apply" />}
            />
          </div>
          <div className={`row ${classes.formGroup}`}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={accessibilityOptions}
              getOptionLabel={(option) => option}
              // defaultValue={[top100Films[13]]}
              filterSelectedOptions
              renderInput={(params) => <TextField {...params} label="Filter for accessibility offerings" placeholder="Select all that apply" />}
            />
          </div>
          <div className={`row ${classes.formGroup}`}>
            <div className="col-sm-12">
              <Button variant="contained" className={classes.searchButton}>
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;

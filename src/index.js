import "./index.css";
import $ from "jquery";
import render from "./render";

$(document).ready(() => {
  console.log("ready");
  render($("#root")[0]);
});
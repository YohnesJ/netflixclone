import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  // we need the series and the filmes
  //we need slides
  const slides = selectionFilter({ series, films });
  // pass it to the brwose container

  return <BrowseContainer slides={slides} />;
}

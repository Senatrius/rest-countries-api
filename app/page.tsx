"use client";

import { useState } from "react";
import { Controls } from "../components/Controls";
import { Filter } from "./Filter";
import { Search } from "./Search";

export default function Index() {
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  return <Controls>
    <Search value={query} setQuery={setQuery}/>
    <Filter filter={filter} setFilter={setFilter}/>
  </Controls>
}
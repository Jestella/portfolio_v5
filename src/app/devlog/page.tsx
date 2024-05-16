"use client";

import { useState } from "react";
import DevlogItems from "../devlog-items";
import devlogs from "../models/Devlogs";
import SearchBar from "../components/SearchBar/SearchBar";

import styles from "./work.module.scss";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDevlogs, setFilteredDevlogs] = useState(devlogs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = devlogs.filter((devlog) =>
      Object.values(devlog).find(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredDevlogs(filtered);
  };
  return (
    <div className="container">
      <p className="section-title">/* Devlog */</p>
      <div className="devlog-page">
        <SearchBar onSearch={handleSearch} />
        <div className="devlog-container">
          <div className="devlog-items">
            {/* {devlogs
              .slice(0)
              .reverse()
              .map((project) => (
                <Devlog key={project.id} project={project} />
              ))} */}
            {filteredDevlogs.length > 0 ? (
              filteredDevlogs
                .slice(0)
                .reverse()
                .map((project) => (
                  <DevlogItems key={project.id} project={project} />
                ))
            ) : (
              <p>No result found.</p>
            )}
          </div>
          <div className="devlog-right">*** Coming Soon ***</div>
        </div>
      </div>
    </div>
  );
}
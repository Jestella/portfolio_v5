"use client";

import { useState } from "react";
import DevlogItems from "./devlog-items";
import devlogs from "../models/Devlogs";
import SearchBar from "../components/SearchBar/SearchBar";

import styles from "./devlog.module.scss";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDevlogs, setFilteredDevlogs] = useState(devlogs);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = devlogs.filter((devlog) =>
      Object.values(devlog).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(query.toLowerCase());
        } else if (Array.isArray(value)) {
          return value.some((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          );
        }
        return false;
      })
    );

    setFilteredDevlogs(filtered);
  };
  return (
    <div className="container">
      <div className={styles["devlog-page"]}>
        <SearchBar onSearch={handleSearch} />
        <div className={styles["devlog-container"]}>
          <div className={styles["devlog-items"]}>
            {filteredDevlogs.length > 0 ? (
              [...filteredDevlogs]
                .reverse()
                .map((project) => (
                  <DevlogItems key={project.id} project={project} />
                ))
            ) : (
              <p>No result found.</p>
            )}
          </div>
          <div className={styles["devlog-right"]}>* Coming Soon *</div>
        </div>
      </div>
    </div>
  );
}

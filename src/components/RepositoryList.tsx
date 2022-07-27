import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import { Repository } from "./types";

import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        {repositories.map((repository, index) => (
          <RepositoryItem key={index} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

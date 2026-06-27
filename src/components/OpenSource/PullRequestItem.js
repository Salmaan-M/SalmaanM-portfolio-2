import React from "react";
import { VscGitPullRequest } from "react-icons/vsc";

function PullRequestItem({ title, repo, number, status, url }) {
  const repoUrl = `https://github.com/${repo}`;
  const statusClass =
    status === "Review required" ? "oss-pr-status-review" : "oss-pr-status-merged";

  return (
    <li className="oss-pr-item">
      <VscGitPullRequest className="oss-pr-icon" aria-hidden="true" />
      <div className="oss-pr-content">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="oss-pr-title"
        >
          {title}
        </a>
        <span className="oss-pr-meta">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="oss-pr-repo-link"
          >
            {repo}
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="oss-pr-number-link"
          >
            #{number}
          </a>
        </span>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`oss-pr-status ${statusClass}`}
      >
        {status}
      </a>
    </li>
  );
}

export default PullRequestItem;

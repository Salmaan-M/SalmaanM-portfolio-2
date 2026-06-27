import React from "react";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { VscGitPullRequest } from "react-icons/vsc";
import PullRequestItem from "./PullRequestItem";

function OrgContributions({
  name,
  subtitle,
  description,
  orgUrl,
  ghLink,
  allPrsLink,
  prs,
}) {
  return (
    <section className="oss-org-section">
      <div className="oss-org-header">
        <div>
          <h2 className="oss-org-name">
            {orgUrl ? (
              <a
                href={orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="oss-org-name-link"
              >
                {name}
              </a>
            ) : (
              name
            )}
            {subtitle && (
              <a
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="oss-org-subtitle"
              >
                {" "}
                / {subtitle}
              </a>
            )}
          </h2>
          <p className="oss-org-description">{description}</p>
        </div>
        <div className="oss-org-actions">
          <Button variant="primary" href={ghLink} target="_blank" rel="noopener noreferrer">
            <BsGithub /> &nbsp; Repository
          </Button>
          {allPrsLink && (
            <Button
              variant="primary"
              href={allPrsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="oss-all-prs-btn"
            >
              <VscGitPullRequest /> &nbsp; All PRs
            </Button>
          )}
        </div>
      </div>
      <ul className="oss-pr-list">
        {prs.map((pr) => (
          <PullRequestItem key={`${pr.repo}-${pr.number}`} {...pr} />
        ))}
      </ul>
    </section>
  );
}

export default OrgContributions;

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import logo1 from "../../src/assets/images-removebg-preview.png";

export default function Sidebar({ isSidebarOpen }) {
  return (
    <div className={isSidebarOpen ? "sidebar" : "delete"}>
      <div className="accordion__wrapper">
        <Accordion className="accoridon">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Start Here</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="typography__title">
                <Image alt="" className="accordion__intro--logo" src={logo1} />
                <h1 className="typography__title">Introduction</h1>
              </div>
              <div className="accordion__links">
                <Link href="/Introduction" className="accordion__link">
                  Course Introduction
                </Link>
                <Link
                  href="/introduction/motivation"
                  className="accordion__link"
                >
                  Mindset & Motivation
                </Link>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

import React from "react";
import "./Footer.css";
import { FcChargeBattery } from "react-icons/fc";

const Footer = ({}) => {
  const dataList = [
    "Home (Sales)",
    "HomeV1",
    "Home V2",
    "Home V3",
    "About",
    "Team Members",
    "Team Single",
    "Contact V1",
  ];
  const dataList2 = [
    "Contact V2",
    "Contact V3",
    "Bloc V1",
    "Bloc V2",
    "Bloc V3",
    "Bloc posts",
    "Bloc category",
  ];
  const dataList3 = [
    "Services",
    "Services Single",
    "Product",
    "Product Single",
    "Pricing",
    "Pricing Single",
    "Careers",
    "Careers Single",
  ];
  const dataList4 = [
    "Costumer Testimonials",
    "Case Studies",
    "Case Studies Single",
    "Policy and Regulations",
    "Coming Soon",
    "More Webflow Templates",
  ];
  const dataList5 = [
    "Start Here",
    "Style Guide",
    "Password",
    "404 Not Found",
    "Licenses",
    "Changelog",
  ];

  return (
    <div className="footerList">
      <div className="buttomBar">
        <h2> Pages</h2>
        <h2>Utility Pages</h2>
      </div>

      <div className="lists">
        <ul>
          {dataList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <ul>
          {dataList2.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <ul>
          {dataList3.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <ul>
          {dataList4.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <ul>
          {dataList5.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="energy">
        <h3>
          <FcChargeBattery />
          Energy
        </h3>
        <p>
          Copyright Energy X | Designed by BRIX Templates - Powered by webflow
        </p>
      </div>
    </div>
  );
};

export default Footer;

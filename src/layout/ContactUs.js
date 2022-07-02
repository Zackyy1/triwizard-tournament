import React, { lazy, Suspense, useState } from "react";
import "./ContactUs.scss";
import "./ContactUsTablet.scss";
import "./ContactUsMobile.scss";

import countries from "../shared/countries";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Link from "../components/Link/Link";
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";

const Input = lazy(() => import("../components/Input/Input"));
const Dropdown = lazy(() => import("../components/Dropdown/Dropdown"));

// Configuration for dropdowns
const industries = [
  "Automotive",
  "Banking",
  "Consulting",
  "Finance",
  "Healthcare",
  "Media/PR",
  "Retail",
  "Technology",
  "Telecommunication",
  "Other",
];
const operatingGeographies = ["National", "Regional", "Global"];

export const ContactUs = () => {
  const [industry, setIndustry] = useState(null);
  const [country, setCountry] = useState(null);
  const [operatingGeography, setOperatingGeography] = useState(null);

  const composeCountryItems = () => {
    return countries.map((country) => {
      return {
        label: country.name,
        value: country.code,
      };
    });
  };

  const composeIndustryItems = () => {
    return industries.map((industry) => {
      return {
        label: industry,
        value: encodeURIComponent(industry.toLowerCase()),
      };
    });
  };

  const composeGeographyItems = () => {
    return operatingGeographies.map((geography) => {
      return {
        label: geography,
        value: encodeURIComponent(geography.toLowerCase()),
      };
    });
  };

  return (
    <div className="contact-us">
      <div className="background"></div>
      <h4>Contact us</h4>

      <div className="contact-info">
        <div className="item">
          <p>Media enquiries:</p>
          <Link href="mailto:press@tuumplatform.com" rel={"noreferrer"}>
            press@tuumplatform.com
          </Link>
        </div>
        <div className="item">
          <p>Career questions:</p>
          <Link href="mailto:careers@tuumplatform.com" rel={"noreferrer"}>
            careers@tuumplatform.com
          </Link>
        </div>
      </div>

      <form>
        <Suspense fallback={null}>
          <div className="split">
            <Input
              name="first-name"
              placeholder="First name"
              required
              type="text"
            />
            <Input name="last-name" placeholder="Last name" type="text" />
            <Input name="email" placeholder="Email" required type="text" />
            <Input name="job-title" placeholder="Job title" type="text" />
            <div className="spacer"></div>
            <Input
              name="company-name"
              placeholder="Company name"
              required
              type="text"
            />
            <Dropdown
              required
              name={"Industry"}
              items={composeIndustryItems()}
              onChange={setIndustry}
            />
            <Dropdown
              required
              name={"Country"}
              items={composeCountryItems()}
              isCountries
              onChange={setCountry}
            />
            <Dropdown
              name={"Operating geography"}
              items={composeGeographyItems()}
              onChange={setOperatingGeography}
            />
            <Input
              textarea
              name="topic"
              label={"What would you like to talk about?"}
            />

            <div className="checkboxes">
              {/* <FormGroup> */}
                <CustomCheckbox
                  ariaLabel={
                    "By submitting this form I accept privacy policy and cookie policy."
                  }
                  label={
                    <>
                      By submitting this form I accept{" "}
                      <Link
                        target={"_blank"}
                        rel={"noreferrer"}
                        href="/privacy-policy/"
                      >
                        privacy policy and cookie policy
                      </Link>
                      .
                    </>
                  }
                />
                <CustomCheckbox
                  ariaLabel={"I would like to receive your newsletter."}
                  label={"I would like to receive your newsletter."}
                />
              {/* </FormGroup> */}
            </div>
          </div>
        </Suspense>
      </form>
    </div>
  );
};

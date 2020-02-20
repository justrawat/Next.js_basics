import React from "react";
import Link from "next/link";

//By default next provides an error-404 page, this page just overwrites that page and renders this instead of that.
const errorPage = () => (
  <div>
    <h1>Oops, something went wrong.</h1>
    <p>
      Try{" "}
      <Link href="/">
        <a>going back</a>
      </Link>
      .
    </p>
  </div>
);

export default errorPage;

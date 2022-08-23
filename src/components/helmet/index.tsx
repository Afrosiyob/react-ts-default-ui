import React from "react";
import { Helmet } from "react-helmet";

import { _IPageTitle } from "./__test__/interfaces";

function PageTitle({ title = "Title page" }: _IPageTitle) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default PageTitle;

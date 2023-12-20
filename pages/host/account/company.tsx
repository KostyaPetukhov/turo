import { type FC, useState } from "react";

import CompanyInfoForm from "../../../conponents/СompanyAccount/CompanyInfoForm";
import InsuranceSettingsForm from "../../../conponents/СompanyAccount/InsuranceSettingsForm";

const CompanyAccount: FC = () => {
  const [isCompanyInfoSuccess, setIisCompanyInfoSuccess] = useState(false);

  return (
    <>
      {!isCompanyInfoSuccess ? (
        <CompanyInfoForm setIisCompanyInfoSuccess={setIisCompanyInfoSuccess} />
      ) : (
        <InsuranceSettingsForm />
      )}
    </>
  );
};

export default CompanyAccount;

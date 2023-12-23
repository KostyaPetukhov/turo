import { type FC, useState } from "react";

import CompanyInfoForm from "../../../conponents/СompanyAccount/CompanyInfoForm";
import InsuranceSettingsForm from "../../../conponents/СompanyAccount/InsuranceSettingsForm";

const CompanyAccount: FC = () => {
  const [isCompanyInfoSuccess, setIisCompanyInfoSuccess] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    companyEmail: "",
    buisnessAddress: "",
    phone: "",
  });
  return (
    <>
      {!isCompanyInfoSuccess ? (
        <CompanyInfoForm
          setIisCompanyInfoSuccess={setIisCompanyInfoSuccess}
          setCompanyInfo={setCompanyInfo}
        />
      ) : (
        <InsuranceSettingsForm companyInfo={companyInfo} />
      )}
    </>
  );
};

export default CompanyAccount;

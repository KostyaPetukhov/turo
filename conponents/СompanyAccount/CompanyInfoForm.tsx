import { type FC, type Dispatch, type SetStateAction } from "react";

interface CompanyInfoFormProps {
  setIisCompanyInfoSuccess: Dispatch<SetStateAction<boolean>>;
}

const CompanyInfoForm: FC<CompanyInfoFormProps> = (props) => {
  const { setIisCompanyInfoSuccess } = props;
  console.log("setIisCompanyInfoSuccess", setIisCompanyInfoSuccess);
  return <div>Copmany info</div>;
};

export default CompanyInfoForm;

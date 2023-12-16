import { type FC } from "react";
import { useRouter, type NextRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, TextField, FormControl, Box } from "@mui/material";

const SignUpForm: FC = () => {
  const router: NextRouter = useRouter();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      void router.push({
        pathname: "/profile/registration",
        query: { email: values.email },
      });
    },
  });

  console.log("formik", formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <FormControl>
          <TextField
            name="email"
            label="Enter email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={
              formik.touched.email === true && Boolean(formik.errors.email)
            }
            helperText={formik.touched.email === true && formik.errors.email}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          disabled={!formik.isValid || !formik.dirty}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};

export default SignUpForm;

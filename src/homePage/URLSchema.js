import * as Yup from "yup";

export const URLSchema = Yup.object({
    userId: "",
    urlCode: "",
    longUrl: Yup.string().required("Please enter your URL"),
    shortUrl: "",
});
// "use server";
// import { ContactFormSchema } from "./schema";
// import type { ContactFormstate } from "./types";




// export const handleContactForm = async (
//   _prevState: ContactFormstate,
//   formData: FormData
// ) => {
//   console.log('entries', Object.entries(formData));
//   const name = String(formData.get("name") || "");
//   const email = String(formData.get("email") || "");
//   const message = String(formData.get("message") || "");

//   const result = ContactFormSchema.safeParse({ name, email, message });
//   if (result.success) {
//     console.log("success", result.data);

//     return { success: true, error: {} };
//   } else {
//     const error: ContactFormstate["error"] = {};
//     result.error.issues.forEach((issue) => {
//       const key = issue.path[0] as keyof ContactFormstate["error"];
//       error[key] = issue.message;
//     });
//     return { name, email, message, success: false, error };
//   }
// };

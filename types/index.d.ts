declare type Gender = "Male" | "Female" | "Other";

declare interface CreateUserParams {
  username: string;
  email: string;
  phone: string;
}
